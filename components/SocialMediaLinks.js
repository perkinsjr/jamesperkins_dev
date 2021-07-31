import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://youtube.com/c/learntocodewithjames" aria-label="Youtube" icon={<FaYoutube fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/perkinsjr" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://twitter.com/james_r_perkins" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    <IconButton as="a" href="https://twitch.tv/james_perkins" aria-label="Twitter" icon={<FaTwitch fontSize="20px" />} />
  </ButtonGroup>
)