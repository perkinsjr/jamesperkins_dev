import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { Box, Button, Center, Heading, SimpleGrid ,Spinner, Stack, StackDivider } from '@chakra-ui/react'
import Image from 'next/image';
import YoutubeVideoPlayer from '@/components/youtubevideoplayer';
import YouTubeStat from '@/components/youtubestats';
import Seo from '@/components/seo';
import { shimmer } from '@/components/shimmer';
import { toBase64 } from '@/lib/toBase64';

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
export default function Youtube({ results }) {
    const { data, error } = useSWR('/api/youtube', fetcher);
    const [playing, setPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(results[0]);
    if (!data) {
        return (
            <Center h="100vh">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color={'#98199F'}
                    size="xl"
                />
            </Center>
        );
    }
    if (error) return <div>Sorry, we couldn&apos;t load the </div>;
    const { subscriberCount, viewCount } = data;

    return (
        <>
            <Seo
                title="Youtube Videos | James Perkins/"
                description="Check out my latest videos from YouTube"
            />
            <Box maxWidth="1080px" width="100%" mx="auto" my={4} px={4}>
            <Box as="section" p="6">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box bg='white' p="10" rounded="xl" shadow="lg" border="1px">
          <Stack
            spacing="8"
            justify="space-between"
            direction={{
              base: 'column',
              md: 'row',
            }}
            divider={<StackDivider />}
          >
        <YouTubeStat label="Subscriber Count" number={subscriberCount} />
                        <YouTubeStat label="View Count" number={viewCount} />
        
          </Stack>
        </Box>
      </Box>
    </Box>
                <Heading as="h1" my={10} textAlign="center">
                    My Latest YouTube Videos
                </Heading>
                <Box maxWidth="720px" mx="auto" p={4} borderRadius="lg" boxShadow="2xl" my={8}>
                    <YoutubeVideoPlayer
                        id={currentVideo.snippet.resourceId.videoId}
                        playing={playing}
                    />
                </Box>
                <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                    {results &&
                        results.map((video) => {
                            return (
                                <Box key={video.id} mx={4}>
                                    <Image
                                        src={video.snippet.thumbnails.maxres.url}
                                        layout="intrinsic"
                                        width={1280}
                                        height={720}
                                        alt={video.snippet.title}
                                        placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(60, 60),
            )}`}
                                    />
                                    <Heading
                                        as="h5"
                                        fontSize="sm"
                                        textAlign="left"
                                        noOfLines={1}
                                        mb={2}>
                                        {video.snippet.title}
                                    </Heading>
                                    <Center>
                                        <Button
                                            mx="auto"
                                            my={4}
                                            colorScheme="red"
                                            onClick={() => {
                                                setCurrentVideo(video);
                                                setPlaying(true);
                                                scrollTop();
                                            }}>
                                            Watch Now
                                        </Button>
                                    </Center>
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
        revalidate: 10
    };
}
