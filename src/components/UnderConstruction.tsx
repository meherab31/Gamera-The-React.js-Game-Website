import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

// Popular game screenshots (using placeholder images - replace with actual game screenshots)
const gameScreenshots = [
  "https://images.unsplash.com/photo-1556438064-2d7646166914?w=1920&h=1080&fit=crop", // Cyberpunk city
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop", // Fantasy landscape
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop", // Space scene
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=1080&fit=crop", // Gaming setup
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1920&h=1080&fit=crop", // Action scene
];

const UnderConstruction = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % gameScreenshots.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <MotionBox
      minH="100vh"
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <MotionBox
          key={currentImageIndex}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgImage={`url(${gameScreenshots[currentImageIndex]})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            w: "100%",
            h: "100%",
            bg: "rgba(0, 0, 0, 0.6)", // Dark overlay for text readability
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* Content Overlay */}
      <MotionBox
        position="relative"
        zIndex={2}
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={4}
      >
        <MotionVStack
          spacing={8}
          textAlign="center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <MotionText
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, #ff0080, #ff6b6b, #4ecdc4, #667eea)"
            bgClip="text"
            textShadow="0 0 30px #ff0080"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            GAMERA
          </MotionText>

          <MotionText
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            fontWeight="bold"
            textShadow="0 0 20px #fff"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            INITIALIZING...
          </MotionText>

          <MotionText
            fontSize="xl"
            color="gray.300"
            maxW="600px"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            The ultimate gaming universe is loading. Prepare for an epic
            adventure that will redefine your reality.
          </MotionText>

          <MotionBox
            w="300px"
            h="4px"
            bgGradient="linear(to-r, #ff0080, #4ecdc4)"
            borderRadius="full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 2.5, ease: "easeInOut" }}
            transformOrigin="left"
          />

          <MotionText
            fontSize="lg"
            color="yellow.400"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, delay: 3, repeat: Infinity }}
          >
            LOADING GAME ASSETS...
          </MotionText>
        </MotionVStack>
      </MotionBox>
    </MotionBox>
  );
};

export default UnderConstruction;
