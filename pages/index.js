import YoutubeVideoPlayer from "@/components/youtubevideoplayer";
import {
  Flex,
  SimpleGrid,
  Heading,
  Box,
  Text,
  useColorMode,
  Skeleton,
  Center,
} from "@chakra-ui/react";

const Index = ({ results }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h2" mb={6} size="2xl" textAlign="center">
        James Perkins
      </Heading>
      <Heading as="h3" mb={6} size="lg" textAlign="center">
        Developer | <span>Teacher</span> <span>| Blogger</span>
      </Heading>
      <Box>
        <SimpleGrid
          columns={[1, 1, 2]}
          mt={8}
          mb={6}
          mx="auto"
          justifyContent="center"
        >
          <Center>
            <Box width="100%" height="100%">
              {results &&
                results.map((video) => {
                  return (
                    <Box key={video.id}>
                      <YoutubeVideoPlayer
                        id={video.snippet.resourceId.videoId}
                      />
                    </Box>
                  );
                })}
            </Box>
          </Center>
          <Box mt={8} width="50%">
            <Text>
              I create Jamstack related content on YouTube, I drop a video a
              week and a new crash course every other week!
            </Text>
          </Box>
          <Box>
            <Skeleton
              height="300px"
              width="500px"
              startColor="secondary.200"
              endColor="primary.100"
              speed="1.0"
            />
          </Box>
          <Box>It's livestreams</Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Index;
export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=1`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
