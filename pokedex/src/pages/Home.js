import { Heading, Box, Text } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { Tooltip } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import React from 'react'
import { useHistory } from "react-router-dom"
import Header from './Header'
import imagem_pokedex_fechada from '../assets/Images/pokedex-fechada-kalos-removebg-preview.png'
import { goToPokedexPage } from "../routes/coodinator"


const Home = () => {

  const history = useHistory();

  return (
      <Box>
        <Header/>

        <Tooltip 
        hasArrow label="Pokedex" 
        placement="right-start"
        bgGradient="linear(#FF0000 65%, white 25%, white 0%)"
        color='black'
        >
          <Image
          cursor='pointer' 
          h='50px' 
          marginTop='-75px' 
          marginLeft='30px' 
          src={imagem_pokedex_fechada} 
          onClick={() => goToPokedexPage(history)}
          />
        </Tooltip>

        <Box  marginTop='25px'>
          <Text>Home</Text>
        </Box>
      </Box>
  );
}

export default Home;