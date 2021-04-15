import React, { useEffect } from "react";

import {Input, useColorMode } from "@chakra-ui/react";
import StyledButton from "./button";

const OptInForm = () => {
  const { colorMode } = useColorMode();
  useEffect(() => {
    const kwesScript = document.createElement("script");
    kwesScript.setAttribute("src", "https://kwes.io/v2/kwes-script.js");
    kwesScript.setAttribute("defer", "defer");
    document.head.appendChild(kwesScript);
  }, []);
  return (
   
      
      <form
        method="POST"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/kwgK4CF1LJxmra8CqpKW"
      >
        <Input
          id="email"
          type="email"
          name="email"
          focusBorderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          mt={8}
          placeholder="batman@gmail.com"
          required
        />
        <StyledButton type="submit" text="Sign Up" />
      </form>

  );
};

export default OptInForm;
