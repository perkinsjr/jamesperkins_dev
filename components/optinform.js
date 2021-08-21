import SuccessMessage from "./successmessage";
import ErrorMessage from "./errormessage";
import {
  Box,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import StyledButton from "./button";


const OptInForm = () => {
  return (
    <Box as="section"py="6">
      <Box
        textAlign="center"
        bg='white'
        shadow="lg"
        border="1px"
        maxW={{ base: 'lg', md: '2xl' }}
        mx="auto"
        px={{ base: '4', md: '6' }}
        py="4"
        rounded="lg"
      >
        <Box maxW="md" mx="auto">
          <Heading mt="4" fontWeight="extrabold">
            Get new content every week in your inbox!
          </Heading>
          <Box mt="4" id="revue-embed">
          <form action="https://www.getrevue.co/profile/james_r_perkins/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
              <Stack>
                <Input
                  aria-label="Enter your email"
                  placeholder="Enter your email to join"
                  rounded="base"
                  name="member[email]" type="email" id="member_email"/>
                <input type="hidden" value="1" name="embed" />
                <StyledButton type="submit"
          text="Sign Up"
          value="Subscribe" name="member[subscribe]" id="member_submit"/>
              </Stack>
            </form>
            <Text color='gray.600' fontSize="sm" mt="5">
              I only send you relevant content
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OptInForm;