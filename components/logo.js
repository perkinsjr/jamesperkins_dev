import React from "react";
import { Box, Button, Stack, useColorMode } from "@chakra-ui/react";

export default function Logo(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
      <Stack isInline>
        <Button
          bg="transparent"
          fontSize="lg"
          fontWeight="semibold"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <Button
          bg="transparent"
          fontSize="lg"
          fontWeight="semibold"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Stack>
    </Box>
  );
}
