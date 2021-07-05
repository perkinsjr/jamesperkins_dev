import React from "react";
import {
  Box,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
export default function YouTubeStat({ label, number }) {

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
        <Stack mx="auto" spacing="3">
          <Box color={mode('gray.600', 'gray.400')} fontWeight="medium">
            {label}
          </Box>
          <HStack spacing="3">
            <Heading as="h1" size="xl" fontWeight="bold">
            {formatNumber(number)}
            </Heading>
          </HStack>
        </Stack>
      )
    }
