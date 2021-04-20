import React from 'react'
import { Box, ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router'

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
