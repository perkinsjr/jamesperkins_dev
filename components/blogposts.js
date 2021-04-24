import { SimpleGrid } from "@chakra-ui/react";
import PostCard from "./postcard";
const BlogPosts = (props) => {
  const { allBlogs } = props;
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={4} px={2}>
      {allBlogs.length > 0 &&
        allBlogs.map((post) => <PostCard key={post.slug} post={post} />)}
    </SimpleGrid>
  );
};
export default BlogPosts;
