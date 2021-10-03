import {
    Badge,
    Box,
    Button,
    Heading,
    HStack,
    Img,
    Stack,
    Text,
  } from '@chakra-ui/react'

  
  export const FourOhFour = () => {
    return (
      <Box
        as="section"
        bg="gray.50"
        pb="24"
        pos="relative"
        px={{
          base: '6',
          lg: '12',
        }}
      >
        <Box maxW="7xl" mx="auto">
          <Box
            maxW={{
              lg: 'md',
              xl: 'xl',
            }}
            pt={{
              base: '20',
              lg: '40',
            }}
            pb={{
              base: '16',
              lg: '24',
            }}
          >
            <Heading as="h1" size="3xl" lineHeight="1" fontWeight="extrabold" letterSpacing="tight">
             Oh No You Seem  {<br/>}
              <Box as="mark" color='blue.500' bg="transparent">
              To Be Lost!
              </Box>
            </Heading>
            <Text mt={4} fontSize="xl" fontWeight="medium" color="gray.600">
              Sorry that you are here, report it to me on Twitter. Or try the link again.
            </Text>
            <Stack
              direction={{
                base: 'column',
                sm: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button
              as="a"
              href="/"
                size="lg"
                bg="white"
                color="gray.800"
                _hover={{
                  bg: 'gray.50',
                }}
                height="14"
                px="8"
                shadow="base"
                fontSize="md"
              >
                Go Back!
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          pos={{
            lg: 'absolute',
          }}
          insetY={{
            lg: '0',
          }}
          insetEnd={{
            lg: '0',
          }}
          bg="gray.50"
          w={{
            base: 'full',
            lg: '50%',
          }}
          height={{
            base: '96',
            lg: 'full',
          }}
          sx={{
            clipPath: {
              lg: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
            },
          }}
        >
          <Img
            height="100%"
            width="100%"
            objectFit="cover"
            src="https://res.cloudinary.com/dub20ptvt/image/upload/v1627759692/me-and-tina_hgq79d.jpg?w=2550&q=80"
            alt="Tina and James"
          />
        </Box>
      </Box>
    )
  }