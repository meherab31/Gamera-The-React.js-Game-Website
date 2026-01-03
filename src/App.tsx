import { Box, Heading, Text, VStack, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Gamera - Find Your Desired Games";
  }, []);
  return (
    <Box
      minH="100vh"
      bg="gray.50"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} textAlign="center">
        <Heading
          size="2xl"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          fontWeight="bold"
        >
          Welcome to Gamera
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Website on progress
        </Text>
        <Spinner size="xl" color="blue.500" />
      </VStack>
    </Box>
  );
};

export default App;
