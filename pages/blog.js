import React from "react";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
import Seo from "@/components/seo";
const Blog = (props) => {
  const { posts } = props;
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  return (
    <>
      <Seo
        title="Blog | James Perkins"
        description="Blog posts surrounding the tech industry or thoughts."
      />
      <Flex
        maxWidth="1080px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mx="auto"
      >
        <Heading as="h1" mb={4} textAlign="center">
          Blog
        </Heading>
        <BlogPosts allBlogs={props.posts} />
      </Flex>
    </>
  );
};
export default Blog;
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts');

  return { props: { posts } }
}