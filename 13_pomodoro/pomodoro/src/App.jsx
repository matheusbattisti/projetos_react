import React from "react";
import { ChakraProvider, CSSReset, Box, Text } from "@chakra-ui/react";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <PomodoroTimer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
