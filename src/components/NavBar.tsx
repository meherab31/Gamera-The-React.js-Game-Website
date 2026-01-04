import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"40px"} padding={"2px"}></Image>
      <Text color={"white"}>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
