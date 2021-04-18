import React from "react";
import matter from "gray-matter";
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";
const Blog = (props) => {
  return (
    <>
      <Head>
        <title>Blog | James Perkins</title>
        <meta name="robots" content="follow, index" />
        <meta content="James Perkins homepage, blog and more " name="description" />
        <meta property="og:url" content={`https://jamesperkins.dev/blog`} />
        <link rel="canonical" href={`https://jamesperkins.dev/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="James Perkins" />
        <meta property="og:description" content="James Perkins homepage, blog and more" />
        <meta property="og:title" content="Blog | James Perkins" />
        <meta property="og:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@james_r_perkins" />
        <meta name="twitter:title" content="Blog | James Perkins" />
        <meta name="twitter:description" content="James Perkins homepage, blog and more" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
      </Head>
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
  const publishedOnly = sortedPosts.filter(item => (item.frontmatter.published === true));
  return {
    props: {
      allBlogs: publishedOnly,
      title: siteConfig.default.title,
      description: siteConfig.default.description,
    },
  };
}
