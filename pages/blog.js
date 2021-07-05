import React from "react";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPosts from "@/components/blogposts";
import { Heading, Flex } from "@chakra-ui/react";
import Seo from "@/components/seo";
const Blog = (props) => {
  const filteredBlogPosts = props.posts
    .sort(
      (a, b) =>
        Number(new Date(b.date)) - Number(new Date(a.date))
    );
  return (
    <>
      <Seo
        title="Blog | James Perkins"
        description="Blog posts surrounding the tech industry or thoughts."
      />
        <BlogPosts allBlogs={filteredBlogPosts} />
    </>
  );
};
export default Blog;
export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('post');

  return { props: { posts } }
}