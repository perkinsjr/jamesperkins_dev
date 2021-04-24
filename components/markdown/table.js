import { Box, useColorModeValue } from '@chakra-ui/react'

export const Table = (props) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
)

export const THead = (props) => {


  return <Box as="th" fontWeight="semibold" p={2} fontSize="sm" {...props} />
}

export const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)
