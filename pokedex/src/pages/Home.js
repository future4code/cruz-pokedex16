import { Heading, Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { useHistory } from "react-router-dom"
import Header from './Header';


const Home = () => {

  const history = useHistory();

  return (
      <Box>
        <Header/>
        <Text>Home</Text>
      </Box>
  );
}

export default Home;