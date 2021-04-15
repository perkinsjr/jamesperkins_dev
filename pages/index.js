import YoutubeVideoPlayer from "@/components/youtubevideoplayer";
import {
  Flex,
  Grid,
  Heading,
  Box,
  Text,
  useColorMode,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
const Index = ({ results }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      maxWidth="1080px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
    >
      <NextSeo
        title="Home | James Perkins"
        description="James Perkins homepage, blog and more"
        openGraph={{
          url: "https://jamesperkins.dev/",
          title: "Home Page",
          description: `Home Page`,
          images: [{ url: "https://jamesperkins.dev/me.jpg" }],
          site_name: "James Perkins",
        }}
        twitter={{
          handle: "@james_r_perkins",
          cardType: "summary_large_image",
        }}
      />
      <Grid p={6} columnGap={6} templateColumns="auto 1fr" alignItems="center">
        <Box display={["none", "block"]}>
          <Image
            rounded="50%"
            maxW="250px"
            src="./me.jpg"
            alt="James Perkins Picture"
          />
        </Box>
        <Box>
          <Heading as="h2" mb={6} size="2xl" textAlign="center">
            Hi, I'm James!
          </Heading>
          <Text fontSize="lg" maxWidth="600px">
            I am a developer who specializes in JamStack Development.
            <br />
            <br />
            Most of the time you will find me on Twitter with hot takes, or
            hanging out with my dogs and awesome wife.
          </Text>
        </Box>
      </Grid>
      <Box>
        <Box
          p={4}
          shadow="lg"
          borderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          borderWidth="2px"
          borderRadius={2}
          mb={4}
        >
          <Heading
            as="h2"
            mb={6}
            size="2xl"
            textAlign="left"
            color={colorMode === "light" ? "#98199F" : "#E883ED"}
          >
            YouTube Videos
          </Heading>
          <Text fontSize="lg" maxWidth="850px" textAlign="left">
            I create JamStack videos every single week, and every other week a
            full crash course on a particular tech in conjunction with NextJS.
            This include FaunaDB, Firebase, NextAuth, WordPress and so much
            more!
            <br />
            <br />
            Below are my latest 3 videos, give it a look you won't be
            disappointed!
          </Text>
        </Box>
        <SimpleGrid columns={[1, 1, 3]} spacing={8} mt={8}>
          {results &&
            results.map((video) => {
              return (
                <Box key={video.id}>
                  <YoutubeVideoPlayer
                    thumb={video.snippet.thumbnails.high.url}
                    id={video.snippet.resourceId.videoId}
                  />
                </Box>
              );
            })}
        </SimpleGrid>
        <Box></Box>
        <Box
          p={4}
          shadow="lg"
          borderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
          borderWidth="2px"
          borderRadius={2}
          my={8}
        >
          <Heading
            as="h2"
            mb={6}
            size="2xl"
            textAlign="left"
            color={colorMode === "light" ? "#98199F" : "#E883ED"}
          >
            I write occasionally
          </Heading>
          <Text fontSize="lg" maxWidth="850px" textAlign="left">
            I do occasionally write blog posts about all sorts of things, from
            implementation of code. Improving your code, reviewing courses I
            have taken.
            <br />
            <br />
            Sometimes I even write about random things, like shows I am watching
            and movies I really like!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;
export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=3`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
