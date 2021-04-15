import { Text } from "@chakra-ui/react";
export default function ErrorMessage({ children }) {
  return (
    <Text my={4} textAlign="center">
      {children}
    </Text>
  );
}
