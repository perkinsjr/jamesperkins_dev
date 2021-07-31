import { chakra } from '@chakra-ui/react'
import NextLink from 'next/link'

export const CustomLink = (props) => {

  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <chakra.a
      fontWeight="bold"
      fontSize="lg"
      color="primary.400"
      w="full"
      _hover={{
        color: 'primary.200',
      }}
      {...props}
    />
      </NextLink>
    )
  }

  return <chakra.a
  fontWeight="bold"
  fontSize="lg"
  color="primary.400"
  w="full"
  _hover={{
    color: 'primary.200',
  }}
 isExternal {...props} />
}
