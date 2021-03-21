import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { Box, Code, Heading } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

const glob = require("glob");
const InlineCode = ({ value }) => {
  return (
    <Code color="white" bg="primary.100" fontStyle="italic">
      {value}
    </Code>
  );
};
const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={atomDark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  if (!frontmatter) return <></>;

  return (
    <Box maxWidth="720px" width="100%" mx="auto" mb={4}>
      <article>
        <figure className="blog__hero">
          <Image
            src={frontmatter.hero_image}
            width="720"
            height="384"
            objectPosition=""
            alt={`blog_hero_${frontmatter.title}`}
          />
        </figure>
        <Box my={[2, 4]}>
          <Heading as="h2" size="3xl">
            {frontmatter.title}
          </Heading>
          <Heading as="h4" size="md" fontWeight="normal">
            {reformatDate(frontmatter.date)}
          </Heading>
        </Box>
        <div className="text-justify">
          <ReactMarkdown
            escapeHtml={false}
            source={markdownBody}
            renderers={{ code: CodeBlock, inlineCode: InlineCode }}
          />
        </div>
        <Heading as="h3">Written By: {frontmatter.author}</Heading>
      </article>
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
