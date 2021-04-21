import React from "react";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import {
  Box,
  Heading,
  SimpleGrid,
  Center,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import YoutubeVideoPlayer from "@/components/youtubevideoplayer";
import YouTubeStat from "@/components/youtubestats";
import Header from "@/components/header";
import Seo from "@/components/seo";

export default function Youtube({ results }) {
  const { data, error } = useSWR("/api/youtube", fetcher);
  const { colorMode } = useColorMode();
  if (!data) {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color={colorMode === "light" ? "#98199F" : "#E883ED"}
          size="xl"
        />
      </Center>
    );
  }
  if (error) return <div>Sorry, we couldn't load the </div>;
  const { subscriberCount, viewCount } = data;

  return (
    <>
      <Seo
        title="Youtube Videos | James Perkins/"
        description="Check out my latest videos from YouTube"
      />
      <Box maxWidth="1080px" width="100%" mx="auto" my={4} px={4}>
        <Box
          width="100%"
          mt={[0, 8]}
          mb={12}
          mx="auto"
          justifyItems="center"
          alignItems="center"
          columns={{ sm: 1, lg: 2 }}
        >
          <Center>
            <YouTubeStat label="Subscriber Count" number={subscriberCount} />
            <YouTubeStat label="View Count" number={viewCount} />
          </Center>
        </Box>
        <Heading as="h1" my={10} textAlign="center">
          My Latest YouTube Videos
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
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
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=12`;
  const response = await fetch(REQUEST_URL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
