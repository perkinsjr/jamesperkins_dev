import React, { useState, useRef } from "react";
import SuccessMessage from "./successmessage";
import ErrorMessage from "./errormessage";
import { Input, useColorMode } from "@chakra-ui/react";
import StyledButton from "./button";

const OptInForm = () => {
  const { colorMode } = useColorMode();
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
    <>
      <form onSubmit={subscribe}>
        <Input
          ref={inputEl}
          id="email"
          type="email"
          name="email"
          focusBorderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          mt={8}
          placeholder="batman@gmail.com"
          required
        />
        <input type="hidden" value="1" name="embed" />
        <StyledButton
          isLoading={form.state === "loading"}
          type="submit"
          text="Sign Up"
        />
      </form>
      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : (
        <SuccessMessage>{form.message}</SuccessMessage>
      )}
    </>
  );
};

export default OptInForm;
