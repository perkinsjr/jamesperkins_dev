import { Box, Text } from "@chakra-ui/layout";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  function truncateSummary(content) {
    const contentTrunc = content.slice(0, 197).trimEnd();
    return `${contentTrunc}...`;
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }
  return (
    <Link key={post.slug} href={{ pathname: `/post/${post.slug}` }} passHref>
      <a>
        <>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={post.frontmatter.hero_image}
              alt={post.frontmatter.hero_image}
              height={250}
              width={400}
            />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {post.frontmatter.title}
              </Box>

              <Box>{reformatDate(post.frontmatter.date)}</Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {truncateSummary(post.frontmatter.excerpt)}
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      </a>
    </Link>
  );
};

export default PostCard;
