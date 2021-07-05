import NextLink from 'next/link'
import { chakra, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

const DesktopNavLink = (props) => {
  return (
    <NextLink href={props.href} passHref>
    <chakra.a
      fontWeight="medium"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="2px"
      borderColor="transparent"
      transition="all 0.2s"
      _hover={{
        borderColor: 'currentcolor',
        color: useColorModeValue('primary.100', 'blue.200'),
      }}
      {...props}
      
    />
    </NextLink>
  )
}

const MobileNavLink = (props) => {
  return (
    
<NextLink href={props.href} passHref>
    <chakra.a
      display="block"
      textAlign="center"
      fontWeight="bold"
      py="5"
      fontSize="lg"
      color="white"
      w="full"
      _hover={{
        bg: 'blackAlpha.200',
      }}
      {...props}
    />
   </NextLink>
  )
}

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
}