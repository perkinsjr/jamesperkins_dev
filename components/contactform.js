import React, { useEffect } from "react";

import { Box, Heading, Input, Textarea, useColorMode } from "@chakra-ui/react";
import StyledButton from "./button";

const ContactForm = () => {
  const { colorMode } = useColorMode();
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
        Contact Me
      </Heading>
      <form
        method="POST"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/19nN9CkNHnOM9Ll3bx6K"
      >
        <Input
          id="email"
          type="email"
          name="email"
          focusBorderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          mt={8}
          placeholder="batman@gmail.com"
          color="white"
          required
        />
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me what you are looking for"
          focusBorderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          mt={8}
          required
        />
        <StyledButton type="submit" text="Contact" />
      </form>
    </Box>
  );
};
export default ContactForm;