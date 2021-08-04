import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { BlogAuthor } from './blogauthor';
import { BlogMedia } from './blogmedia';
import { BlogMeta } from './blogmeta';
import Link from 'next/link';
import { Fragment } from 'react';
const BlogPosts = (allPosts, ) => {
    const { allBlogs } = allPosts;
    function truncateSummary(content) {
        const contentTrunc = content.slice(0, 197).trimEnd();
        return `${contentTrunc}...`;
    }
    return (
        <Box as="section" py={[4,24]} width="100%" maxW="1200px" mx="auto">
            <Box
                mx="auto"
                px={{
                    base: '6',
                    md: '8'
                }}>
                <Grid
                    templateColumns={{
                        base: '1fr',
                        md: '1fr 24rem'
                    }}
                    columnGap={{
                        base: '12',
                        lg: '16'
                    }}
                    rowGap="10">
                    {allBlogs.length > 0 &&
                        allBlogs.map((post) => {
                          return(
                            <Fragment key={post.slug}>
                                <Link href={{ pathname: `/post/${post.slug}` }} passHref>
                                    <a>
                                        <BlogMedia alt={post.title} src={post.hero_image} />
                                    </a>
                                </Link>
                                <Flex direction="column" h="full">
                                    <Box flex="1">
                                        <BlogMeta type="Blog" tags={post.tags} />
                                        <Heading size="xl" mt="6" mb="4">
                                            {post.title}
                                        </Heading>
                                        <Text
                                            fontSize="lg"
                                            color='gray.600'
                                            lineHeight="tall">
                                            {truncateSummary(post.excerpt)}
                                        </Text>
                                    </Box>

                                    <BlogAuthor
                                        mt="8"
                                        name={post.author}
                                        image="../me.jpg"
                                        role="Developer Advocate"
                                    />
                                </Flex>
                                </Fragment>
                          )
})}
                </Grid>
            </Box>
        </Box>
    );
};
export default BlogPosts;
