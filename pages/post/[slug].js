import { Box, HStack, Heading, Flex, Text, Divider, Avatar,Code ,Icon,
    IconButton,
    useClipboard,
    useTheme,
    Link,
  } from "@chakra-ui/react";
import {HiClipboardCopy,HiClipboardCheck} from "react-icons/hi"
import { LoadingSpinner } from "@/components/loadingSpinner";
import Image from 'next/image';
import OptInForm from '@/components/optinform';
import Seo from '@/components/seo';
import { staticRequest, getStaticPropsForTina } from 'tinacms';
import Comments from '@/components/comments';
import ReactMarkdown from 'react-markdown';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
export default function Post(props) {
    const theme = useTheme();
    const CopyButton = ({ codeString }) => {
        const { hasCopied, onCopy } = useClipboard(codeString);
      
        return (
          <IconButton
            size="sm"
            colorScheme="blackAlpha"
            variant="outline"
            icon={
              <Icon
                as={hasCopied ? HiClipboardCheck : HiClipboardCopy}
                height={5}
                width={5}
                color="white"
                aria-hidden="true"
              />
            }
            onClick={onCopy}
            aria-hidden={hasCopied ? "Copied" : "Copy"}
          />
        );
      };
    const CodeBlock = ({ children, ...rest }) => {
        
        if(rest.inline){
            return(<Code colorScheme="purple">{children}</Code>)
        }
        return (
    <Box position="relative"  width="50vw">
      <SyntaxHighlighter
        wrapLongLines 
        language={rest.className?.replace("language-", "")}
        style={atomOneDark}
        customStyle={{
            marginTop: 0,
            marginBottom: 0,
            width:"100%",
            padding: `${theme.space["12"]} ${theme.space["4"]} ${theme.space["4"]}`,
            fontSize: theme.fontSizes["sm"],
            borderRadius: theme.radii["md"],
          }}
       
      >
        {children}
      </SyntaxHighlighter>
      <Flex
        position="absolute"
        top={2}
        insetX={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          as="span"
          textColor="gray.500"
          fontSize="xs"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {rest.className?.replace("language-", "")}
        </Text>
        <CopyButton codeString={children} />
      </Flex>
    </Box>
        );
    };

    const CustomLink = ({children,href}) => {
      console.log(children)
      return (
        <Link
          textDecoration="underline"
          fontWeight="bold"
          transition=".3s"
          pos="relative"
          fontSize="1rem"
          _hover={{
            color: "#E883ED",
            _after: {
              w: "100%",
            }
          }}
          _after={{
            content: "''",
            height: "2px",
            bgColor: "#E883ED",
            position: "absolute",
            left: "0",
            bottom: "-3px",
            transition: ".3s",
            w: "0"
          }}
          href={href}
        >
          {children}
        </Link>
      )
    }

    const custom = {
        code: CodeBlock,
        a: CustomLink
    };

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    function reformatDate(fullDate) {
        const date = new Date(fullDate);
        return date.toDateString().slice(4);
    }
    if (props.data && props.data?.getPostsDocument?.data) {
    return (
        <>
            <Seo
                title={props.data?.getPostsDocument?.data?.title}
                excerpt={props.data?.getPostsDocument?.data?.excerpt}
                image={props.data?.getPostsDocument?.data?.hero_image}
                date={reformatDate(props.data?.getPostsDocument?.data?.date)}
                type="article"
            />
            <Box maxWidth="1080px" width="100%" mx="auto" mt={[2, 4]} mb={4} px={4}>
                <article>
                    <Heading as="h2" size="3xl" textAlign="center" my={8}>
                        {props.data?.getPostsDocument?.data?.title}
                    </Heading>
                    <Box my={[2, 4]}>
                        <HStack my={4} spacing={4}>
                            <Avatar
                                name="James Perkins"
                                src="https://res.cloudinary.com/dub20ptvt/image/upload/v1618489779/me_n7quph.jpg"
                            />
                            <Text size="sm">{props.data?.getPostsDocument?.data?.author}</Text>

                            <Text size="md" fontWeight="normal">
                                {reformatDate(props.data?.getPostsDocument?.data?.date)}
                            </Text>
                            <Box justifyContent="flex-end" alignContent="flex-end"></Box>
                        </HStack>
                        <Divider />
                    </Box>
                    <Flex as="figure" alignContent="center" justifyContent="center" mx="auto">
                        <Image
                            loader={myLoader}
                            src={props.data?.getPostsDocument?.data?.hero_image}
                            alt={props.data?.getPostsDocument?.data?.hero_image}
                            width={720}
                            quality={50}
                            height={384}
                        />
                    </Flex>
                        <ReactMarkdown components={ChakraUIRenderer(custom)} escapeHtml={false}>
                            {props.data?.getPostsDocument?.data?.body}
                        </ReactMarkdown>
                </article>
                <Divider my={4} border="8px" />
                <Box maxWidth="720px" width="100%" mx="auto" my={6} px={4}>
                    <Comments />
                </Box>
                <Box maxWidth="720px" width="100%" mx="auto" my={6}>
                    <OptInForm />
                </Box>
            </Box>
        </>
  
    );
    }else{
        return <LoadingSpinner/>;
    }
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
        variables: {}
    });
    return {
        paths: postsListData.getPostsList.edges.map((edge) => ({
            params: { slug: edge.node.sys.filename }
        })),
        fallback: 'blocking'
    };
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const variables = { relativePath: `${slug}.md` };
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
        variables: variables
    });
    return {
        props: {
            ...tinaProps, // {data: {...}, query: '...', variables: {...}}
            slug
        }
    };
};
