import React from 'react'
import Header from './Header'
import { Box, Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import { Tooltip } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToHomePage } from "../routes/coodinator"
import imagem_pokedex_aberta from '../assets/Images/pokedex-aberta-kalos-removebg-preview.png'


const Pokedex = () => {
  const history = useHistory();

  return (
      <Box>
        <Header/>

        <Tooltip 
        hasArrow label="Início" 
        placement="right-start"
        bgGradient="linear(#FF0000 60%, white 25%, white 0%)"
        color='black'
        >
          <Image
          cursor='pointer' 
          h='70px' 
          marginTop='-95px' 
          marginLeft='25px' 
          src={imagem_pokedex_aberta} 
          onClick={() => goToHomePage(history)}
          />
        </Tooltip>

        <Box marginTop='25px'>
        <Text>Pokedex</Text>
        </Box>
      </Box>
  );
}

export default Pokedex;