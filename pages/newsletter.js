import React from "react";
import OptInForm from "@/components/optinform";
import {Box, Heading} from "@chakra-ui/react";
import {NextSeo} from "next-seo";
export default function Newsletter() {
  return (
    <Box maxWidth="700px" width="100%" px={6} mt={[0, 8]} mb={8} mx="auto">
      <NextSeo
    title="Newsletter Page"
    description="James' Newsletter Page "
    openGraph={{
      url: `https://jamesperkins.dev/newsletter`,
      title: `Newsletter Page`,
      description: `James' Newsletter Page`,
      images: [{ url: `./me.jpg` }],
      site_name: "James Perkins",
    }}
    twitter={{
      handle: "@james_r_perkins",
      cardType: "summary_large_image",
    }}
  />
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
  </Box>);
}
