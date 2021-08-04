import {
    Badge,
    Box,
    HStack,
    Stack,
    StackDivider,
  } from '@chakra-ui/react'
  
  export const BlogMeta = (props) => {
    const { type, tags } = props
    return (
      <Stack
        spacing={{
          base: '4',
          md: '6',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        textTransform="uppercase"
        fontSize="xs"
        letterSpacing="wider"
        fontWeight="semibold"
      >
        <Badge colorScheme="blue" variant="solid" alignSelf="flex-start">
          {type}
        </Badge>
        <HStack
          divider={<StackDivider h="3" alignSelf="center" />}
          spacing="3"
          color='gray.600'
        >
          {tags.map((tag, index) => (
            <Box key={index}>{tag}</Box>
          ))}
        </HStack>
      </Stack>
    )
  }