import React from "react";
import matter from "gray-matter";
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
const Blog = (props) => {
  return (
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
      <BlogPosts allBlogs={props.allBlogs} />
    </Flex>
  );
};
export default Blog;
export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`);
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  };
}