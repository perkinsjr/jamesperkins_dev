import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const CustomLink = (props) => {

  const { href } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    )
  }

  return <Link isExternal {...props} />
}
