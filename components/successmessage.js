import { Text } from "@chakra-ui/react";
export default function SuccessMessage({ children }) {
  return (
    <Text my={4} textAlign="center">
      {children}
    </Text>
  );
}
