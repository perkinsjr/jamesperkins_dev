import {
    Center,
    Spinner,
  } from "@chakra-ui/react";
  
  export const LoadingSpinner = () => {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          size="xl"
        />
      </Center>
    );
  };