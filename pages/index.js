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

const Index = ({ results }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Grid p={6} columnGap={6} templateColumns="auto 1fr" alignItems="center">
        <Box>
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
          <Text fontSize="lg" maxWidth="500px">
            I am a developer who specializes in{" "}
            <span>
              <Text as="u">JamStack Development</Text>
            </span>{" "}
            Most of the time you will find me on Twitter with hot takes, or
            hanging out with my dogs and awesome wife.
          </Text>
        </Box>
      </Grid>
      <Box>
        <Box
          p={4}
          shadow="lg"
          borderColor="primary.200"
          borderWidth="2px"
          borderRadius={2}
          mb={4}
        >
          <Heading
            as="h2"
            mb={6}
            size="2xl"
            textAlign="left"
            color="primary.100"
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
        <SimpleGrid columns={[1, 1, 3]} spacing={8}>
          {results &&
            results.map((video) => {
              return (
                <Box key={video.id}>
                  <Heading
                    as="h5"
                    fontSize="md"
                    textAlign="center"
                    noOfLines={1}
                    mb={2}
                  >
                    {video.snippet.title}
                  </Heading>
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
          borderColor="primary.200"
          borderWidth="2px"
          borderRadius={2}
          my={4}
        >
          <Text>
            I create Jamstack related content on YouTube, I drop a video a week
            and a new crash course every other week!
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
