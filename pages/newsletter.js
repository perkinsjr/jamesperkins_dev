import React from "react";
import OptInForm from "@/components/optinform";
import { Box, Heading } from "@chakra-ui/react";
import Header from "@components/header";
export default function Newsletter() {
  return (
    <>
      <Header
        title="Newsletter | James Perkins"
        description="Sign up to my newsletter"
      />
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
