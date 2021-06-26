import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import Image from "next/image";
import { shimmer } from '@/components/shimmer';
import { toBase64 } from '@/lib/toBase64';
const PostCard = ({ post }) => {
  function truncateSummary(content) {
    const contentTrunc = content.slice(0, 197).trimEnd();
    return `${contentTrunc}...`;
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality}`;
  };
  return (
    <Link key={post.slug} href={{ pathname: `/post/${post.slug}` }} passHref>
      <a>
        <>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              loader={myLoader}
              src={post.hero_image}
              alt={post.hero_image}
              height={250}
              quality={50}
              width={400}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(60, 60),
            )}`}
            />
            <Box p="6">
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {post.title}
              </Box>

              <Box>{reformatDate(post.date)}</Box>

              <Box d="flex" mt="2" alignItems="center">
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {truncateSummary(post.excerpt)}
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
