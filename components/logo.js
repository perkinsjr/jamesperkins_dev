import React from "react";
import { Box, Button, Stack, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Logo(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
      <Stack isInline>
        <IconButton
          aria-label="Toggle dark mode"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        ></IconButton>
      </Stack>
    </Box>
  );
}
