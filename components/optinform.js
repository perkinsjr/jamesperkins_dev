import React, { useState, useRef } from "react";
import SuccessMessage from "./successmessage";
import ErrorMessage from "./errormessage";
import {
  Box,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import StyledButton from "./button";


const OptInForm = () => {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Congratulations, you are on the list`,
    });
  };
  return (
    <Box as="section"py="6">
      <Box
        textAlign="center"
        bg='white'
        shadow="lg"
        border="1px"
        maxW={{ base: 'lg', md: '2xl' }}
        mx="auto"
        px={{ base: '4', md: '6' }}
        py="4"
        rounded="lg"
      >
        <Box maxW="md" mx="auto">
          <Heading mt="4" fontWeight="extrabold">
            Get new content every week in your inbox!
          </Heading>
          <Box mt="4">
            <form onSubmit={subscribe}>
              <Stack>
                <Input
                  aria-label="Enter your email"
                  placeholder="Enter your email to join"
                  rounded="base"
                  ref={inputEl}
          id="email"
          type="email"
          name="email"
                />
                <input type="hidden" value="1" name="embed" />
                <StyledButton
          isLoading={form.state === "loading"}
          type="submit"
          text="Sign Up"
        />
              </Stack>
            </form>
            <Text color='gray.600' fontSize="sm" mt="5">
              I only send you relevant content
            </Text>
            {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : (
        <SuccessMessage>{form.message}</SuccessMessage>
      )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OptInForm;