import { Box, Flex, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { NavContent } from './navcontent'

const NavBar = () => {
  return (
    <Box zIndex="10000">
    <Box as="header" height="16" bg={useColorModeValue('white', 'gray.800')} position="relative">
      <Box
        height="100%"
        //maxW="7xl"
        mx="auto"
        ps={{
          base: '6',
          md: '8',
        }}
        pe={{
          base: '5',
          md: '0',
        }}
      >
        <Flex
          as="nav"
          aria-label="Site navigation"
          align="center"
          justify="space-between"
          height="100%"
        >
          <Box as="a" href="/" rel="home">
            <VisuallyHidden>James Perkins</VisuallyHidden>
          </Box>
          <NavContent.Desktop
            display={{
              base: 'none',
              md: 'flex',
            }}
          />
          <NavContent.Mobile
            display={{
              base: 'flex',
              md: 'none',
            }}
            zIndex="100000000000000"
          />
        </Flex>
      </Box>
    </Box>
  </Box>
  );
};

export default NavBar;
