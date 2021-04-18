import React from "react";
import OptInForm from "@/components/optinform";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
export default function Newsletter() {
  return (
    <>
      <Head>
        <title>Newsletter | James Perkins</title>
        <meta name="robots" content="follow, index" />
        <meta content="Sign Up for Newsletter for James Perkins" name="description" />
        <meta property="og:url" content={`https://jamesperkins.dev/newsletter`} />
        <link rel="canonical" href={`https://jamesperkins.dev/newsletter`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="James Perkins" />
        <meta property="og:description" content="Sign Up for Newsletter for James Perkins" />
        <meta property="og:title" content="Newsletter | James Perkins" />
        <meta property="og:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@james_r_perkins" />
        <meta name="twitter:title" content="Newsletter | James Perkins" />
        <meta name="twitter:description" content="Sign Up for Newsletter for James Perkins" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dub20ptvt/image/upload/c_thumb,w_200,g_face/v1618489779/me_n7quph.jpg" />
      </Head>
      <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
        <Heading
          letterSpacing="tight"
          mb={2}
          as="h1"
          size="2xl"
          textAlign="center"
        >
          Sign up to my newsletter!
      </Heading>
        <OptInForm />
      </Box>
    </>
  );
}
