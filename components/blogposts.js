import { Text, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
const BlogPosts = ({ allBlogs }) => {
  function truncateSummary(content) {
    const contentTrunc = content.slice(0, 197).trimEnd();

    return `${contentTrunc}...`;
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <>
      {allBlogs.length > 0 &&
        allBlogs.map((post) => (
          <Link key={post.slug} href={{ pathname: `/post/${post.slug}` }}>
            <a>
              <div className="hero_image">
                <Image
                  src={post.frontmatter.hero_image}
                  alt={post.frontmatter.hero_image}
                  height={250}
                  width={400}
                />
              </div>
              <div className="blog__info">
                <Heading as="h2">{post.frontmatter.title}</Heading>
                <Heading as="h3">
                  {" "}
                  {reformatDate(post.frontmatter.date)}
                </Heading>
                <Text>
                  <ReactMarkdown source={truncateSummary(post.markdownBody)} />
                </Text>
              </div>
            </a>
          </Link>
        ))}
    </>
  );
};
export default BlogPosts;
