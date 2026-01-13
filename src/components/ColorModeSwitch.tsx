import {
  HStack,
  Switch,
  useColorMode,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  //custom hook for color mode
  const { colorMode, toggleColorMode } = useColorMode();
  const showText = useBreakpointValue({ base: false, md: true });
  return (
    <HStack spacing={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        aria-label="Toggle color mode"
      />
      {showText && <Text whiteSpace="nowrap">Mode</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
