import React from "react";
import { Box, Stack, useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Logo(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
      <Stack mx={8} isInline>
        
      </Stack>
    </Box>
  );
}
