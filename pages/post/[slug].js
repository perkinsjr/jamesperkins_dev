import { Box, HStack, Heading, Flex, Text, Divider, Avatar } from "@chakra-ui/react";
import Image from "next/image";
import OptInForm from "@/components/optinform";
import Seo from "@/components/seo";
import { staticRequest,getStaticPropsForTina } from "tinacms";
import Comments from "@/components/comments";
import ReactMarkdown from "react-markdown"
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';

export default function Post({ data }) {
  const {
    author,
    date,
    title,
    excerpt,
    hero_image,
    body
  } = data.getPostsDocument.data

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  if (!body) return <></>;
   
  return (
    <>
      <Seo
        title={`${title} – James Perkins`}
        excerpt={excerpt}
        image={hero_image}
        date={reformatDate(date)}
        type="article"
      />
      <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
        <article>
          <Heading as="h2" size="3xl" textAlign="center" my={8}>
            {title}
          </Heading>
          <Box my={[2, 4]}>

            <HStack my={4} spacing={4} >
              <Avatar name="James Perkins" src="https://res.cloudinary.com/dub20ptvt/image/upload/v1618489779/me_n7quph.jpg" />
              <Text size="sm">{author}</Text>

              <Text size="md" fontWeight="normal">
              {reformatDate(date)}
              </Text>
              <Box justifyContent="flex-end" alignContent="flex-end">
              </Box>
            </HStack>
            <Divider />
          </Box>
          <Flex
            as="figure"
            alignContent="center"
            justifyContent="center"
            mx="auto"
          >
            <Image
              loader={myLoader}
              src={hero_image}
              alt={hero_image}
              width={720}
              quality={50}
              height={384}
            />
          </Flex>
          
          <Box width="100%">
          <ReactMarkdown
  components={ChakraUIRenderer()}
  escapeHtml={false}
>{body}</ReactMarkdown>
          </Box>
        </article>
        <Divider my={4} border="8px"/>
        <Box maxWidth="720px" width="100%" mx="auto" my={6} px={4}>
        <Comments/>
        </Box>
        <Box maxWidth="720px" width="100%" mx="auto" my={6} >
          <OptInForm />
        </Box>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const postsListData = await staticRequest({
    query: `
      query {
        getPostsList {
          edges {
            node {
            sys {
              filename
              }
            }
          }
      }
    }
    `,
    variables: {},
  })
  return {
    paths: postsListData.getPostsList.edges.map(edge => ({
      params: { slug: edge.node.sys.filename },
    })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const variables = { relativePath: `${slug}.md` }
  const tinaProps = await getStaticPropsForTina({
    query: `query BlogPostQuery($relativePath: String!) {
      getPostsDocument(relativePath: $relativePath) {
        data {
          author
          date
          title
          excerpt
          hero_image
          tags
          published
          body
        }
      }
    }
    `,
    variables: variables,
  })
  return {
    props: {
      ...tinaProps, // {data: {...}, query: '...', variables: {...}}
      slug,
    },
  }
}
