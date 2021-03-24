import { SimpleGrid } from "@chakra-ui/layout";
import PostCard from "./postcard";
const BlogPosts = ({ allBlogs }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} px={2}>
      {allBlogs.length > 0 &&
        allBlogs.map((post) => <PostCard key={post.slug} post={post} />)}
    </SimpleGrid>
  );
};
export default BlogPosts;
