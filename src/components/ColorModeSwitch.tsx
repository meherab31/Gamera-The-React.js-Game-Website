import {
  HStack,
  Switch,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  //custom hook for color mode
  const { colorMode, toggleColorMode } = useColorMode();
  const showText = useBreakpointValue({ base: false, md: true });
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        {showText && "Mode"}
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
