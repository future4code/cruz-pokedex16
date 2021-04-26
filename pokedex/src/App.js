import React from 'react'
import { Box, ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router'
import GlobalState from './globalStates/GlobalState';

const App = () => {
  return (
    <GlobalState>
      <ChakraProvider>
        <Box minH='750px'>
          <Router />
        </Box>
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
