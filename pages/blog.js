import React from "react";
import matter from "gray-matter";
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
import Header from "@/components/header";
const Blog = (props) => {
  return (
    <>
      <Header
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
        <BlogPosts allBlogs={props.allBlogs} />
      </Flex>
    </>
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

  const sortedPosts = posts
    .slice()
    .sort(
      (a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
    );
  const publishedOnly = sortedPosts.filter(
    (item) => item.frontmatter.published === true
  );
  return {
    props: {
      allBlogs: publishedOnly,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  };
}
