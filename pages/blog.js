import React from "react";
import matter from "gray-matter";
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
const Blog = (props) => {
  return (
    <Flex
      maxWidth="1080px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mx="auto"
    >
      <NextSeo
              title="Blog Page"
              description="James' Blog Page "
              openGraph={{
                url: `https://jamesperkins.dev/blog`,
                title: `Blog Page`,
                description: `James' Blog Page`,
                images: [{ url: `./me.jpg` }],
                site_name: "James Perkins",
              }}
              twitter={{
                handle: "@james_r_perkins",
                cardType: "summary_large_image",
              }}
            />
      
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
