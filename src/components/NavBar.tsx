import { HStack, Image, Text, Box, useColorModeValue } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box bg={bgColor} color={textColor} px={5} py={3} shadow="md">
      <HStack justifyContent="space-between" align="center">
        <HStack spacing={4} align="center">
          <Image src={logo} boxSize="50px" borderRadius="full" />
          <Text fontSize="2xl" fontWeight="bold" fontFamily="heading">
            Gamera - Your Game Explorer
          </Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
