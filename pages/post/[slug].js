import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import ChakraUIRenderer, { defaults } from 'chakra-ui-markdown-renderer';
import { Box, Code, Heading, Flex, useColorMode } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import OptInForm from "@/components/optinform";
import { NextSeo } from "next-seo";

const glob = require("glob");
const newTheme = {
  ...defaults,
  code: props => {
    const { language, value } = props;
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {value}
        </SyntaxHighlighter>
      );
  },
  inlineCode: props => {
    const { children } = props;
    return (
      <Code color="white" p={1} bg="primary.400" fontStyle="italic" fontWeight="bold">
      {children}
    </Code>
    )
  },
  blockquote : props => {
    const {children} = props;
    const { colorMode } = useColorMode();
  return (
    <Box
      p={4}
      as="blockquote"
      shadow="lg"
      borderColor={colorMode === "light" ? "#98199F" : "#E883ED"}
      borderWidth="2px"
      borderRadius={2}
      mb={4}
    >{children}</Box>
  )
  }
}


export default function BlogTemplate({ frontmatter, markdownBody,slug }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  

  if (!frontmatter) return <></>;

  return (
    <Box maxWidth="960px" width="100%" mx="auto" mb={4} px={4}>
      <NextSeo
              title={frontmatter.title}
              description={frontmatter.excerpt}
              openGraph={{
                url: `https://jamesperkins.dev/post/${slug}`,
                title: `${frontmatter.title}`,
                description: `${frontmatter.excerpt}`,
                images: [{ url: `${frontmatter.hero_image}` }],
                site_name: "James Perkins",
              }}
              twitter={{
                handle: "@james_r_perkins",
                cardType: "summary_large_image",
              }}
            />
      <article>
        <Flex as="figure" alignContent="center" justifyContent="center" mx="auto">
          <Image
            src={frontmatter.hero_image}
            width="720"
            height="384"
            objectPosition="cover"
            alt={`blog_hero_${frontmatter.title}`}
          />
        </Flex>
        <Box my={[2, 4]}>
          <Heading as="h2" size="3xl">
            {frontmatter.title}
          </Heading>
          <Heading as="h4" size="md" fontWeight="normal" my={4}>
            {reformatDate(frontmatter.date)}
          </Heading>
        </Box>
        <Box width="100%">
          <ReactMarkdown
            escapeHtml={false}
            source={markdownBody}
            renderers={
              ChakraUIRenderer(newTheme)
            }
          />
        </Box>
      </article>
      <Box maxWidth="720px" width="100%" mx="auto" my={6} px={4}>
        <Heading my={2} as="h4" fontSize="2xl" textAlign="center">Enjoying my content? Sign up for my newsletter!</Heading>
        <OptInForm/>
      </Box>
    </Box>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const config = await import(`../../data/config.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      slug: slug,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/post/${slug}`);
  return {
    paths,
    fallback: false,
  };
}
