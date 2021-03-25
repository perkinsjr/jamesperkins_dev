import React, { useEffect } from "react";

import { Box, Heading, Input } from "@chakra-ui/react";
import StyledButton from "./button";

const OptInForm = () => {
  useEffect(() => {
    const kwesScript = document.createElement("script");
    kwesScript.setAttribute("src", "https://kwes.io/v2/kwes-script.js");
    kwesScript.setAttribute("defer", "defer");
    document.head.appendChild(kwesScript);
  }, []);
  return (
    <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
      <Heading
        letterSpacing="tight"
        mb={2}
        as="h1"
        size="2xl"
        textAlign="center"
      >
        Sign up to my newsletter!
      </Heading>
      <form
        method="POST"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/kwgK4CF1LJxmra8CqpKW"
      >
        <Input
          id="email"
          type="email"
          name="email"
          focusBorderColor="primary.200"
          mt={8}
          placeholder="batman@gmail.com"
          required
        />
        <StyledButton type="submit" text="Sign Up" />
      </form>
    </Box>
  );
};

export default OptInForm;
