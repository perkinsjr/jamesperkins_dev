import React, { useEffect } from "react"
import hydrate from 'next-mdx-remote/hydrate'
import { Box, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import OptInForm from "@/components/optinform";
import Seo from "@/components/seo";
import { getFiles, getFileBySlug } from '@/lib/mdx';
import Markdown from '@/components/markdown'
import Prism from "prismjs";
export default function BlogTemplate(params) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { frontMatter, mdxSource } = params;
  const content = hydrate(mdxSource, { components: Markdown })
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  if (!frontMatter) return <></>;

  return (
    <>
      <Seo
        title={`${frontMatter.title} – James Perkins`}
        excerpt={frontMatter.summary}
        image={frontMatter.hero_image}
        date={new Date(frontMatter.date).toISOString()}
        type="article"
      />
      <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
        <article>
          <Flex
            as="figure"
            alignContent="center"
            justifyContent="center"
            mx="auto"
          >
            <Image
              loader={myLoader}
              src={frontMatter.hero_image}
              alt={frontMatter.hero_image}
              width={720}
              quality={50}
              height={384}
            />
          </Flex>
          <Box my={[2, 4]}>
            <Heading as="h2" size="3xl" textAlign="center">
              {frontMatter.title}
            </Heading>
            <Heading as="h4" size="md" fontWeight="normal" my={4}>
              {reformatDate(frontMatter.date)}
            </Heading>
          </Box>
          <Box width="100%">
            {content}
          </Box>
        </article>
        <Box maxWidth="720px" width="100%" mx="auto" my={6} px={4}>
          <Heading my={2} as="h4" fontSize="2xl" textAlign="center">
            Enjoying my content? Sign up for my newsletter!
          </Heading>
          <OptInForm />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('posts');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('posts', params.slug);

  return { props: { ...post } };
}