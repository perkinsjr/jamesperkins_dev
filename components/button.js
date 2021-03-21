import { Box, Center } from "@chakra-ui/react";

const StyledButton = ({ type, text }) => {
  return (
    <Center>
      <Box
        as="button"
        p={2}
        color="white"
        type={type}
        mt={8}
        width="50%"
        fontWeight="bold"
        fontSize="xl"
        borderRadius="md"
        bgGradient="linear(to-r, primary.100,secondary.100)"
        _hover={{
          bgGradient: "linear(to-r, secondary.200, primary.200)",
        }}
      >
        {text}
      </Box>
    </Center>
  );
};
export default StyledButton;
