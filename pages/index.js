import {chakra, Box,Button,Heading, Text, Stack } from '@chakra-ui/react';
import NextImage from "next/image";
import { shimmer } from '@/components/shimmer';
import {ImYoutube} from "react-icons/im"
import Seo from '@/components/seo';
import NextLink from 'next/link'
import { toBase64 } from '@/lib/toBase64';
const Index = () => {
    const CoverImg = chakra(NextImage, {
        shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt','quality','placeholder','blurDataURL','loader '].includes(prop),
      })
    
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality}`;
      };
    return (
        <>
            <Seo title="Home | James Perkins" description="Home page for James Perkins" />
            <Box as="section" bg={'gray.50'} pt="16" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '520px' }}>

            <Heading
              as="h1"
              size="3xl"
              color={'primary.300'}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Learn to Code with James
            </Heading>
            <Text color={'gray.600'} mt="4" fontSize="lg" fontWeight="medium">
              James provides web development educational courses for both beginners and intermediate developers. Almost all of James' tutorials and courses can be found for free on YouTube.

            </Text>
            <Text color={'gray.600'} mt="4" fontSize="lg" fontWeight="medium">
              James also writes blog posts and streams live on Twitch. You might even see him at conferences on stage given talks.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
            <NextLink href="/blog" passHref>
              <Button as="a" size="lg" minW="210px" bg="primary.400" color="white" height="14" px="8">
                To Blog posts
              </Button>
            </NextLink>
              <Button as="a" target="_blank" rel="noopener noreferrer" href="https://youtube.com/c/learntocodewithjames"
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.700' }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<ImYoutube/>}
              >
                YouTube Videos
              </Button>
            </Stack>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
            <CoverImg
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              loader={myLoader}
        width={800}
        quality={100}
        height={750}
        placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(60, 60),
            )}`}
            src="https://res.cloudinary.com/dub20ptvt/image/upload/v1627759692/me-and-tina_hgq79d.jpg"
            alt="James and TIna"
              objectFit="cover"
              
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg='gray.200'
            />
          </Box>
        </Stack>
      </Box>
    </Box>
        </>
    );
};

export default Index;