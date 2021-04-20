import React from 'react'
import Header from './Header'
import { Box, Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import { useHistory } from "react-router-dom"
import { goToHomePage } from "../routes/coodinator"
import imagem_pokedex_aberta from '../assets/Images/pokedex-aberta-kalos-removebg-preview.png'


const Pokedex = () => {
  const history = useHistory();

  return (
      <Box>
        <Header/>
        <Image
        cursor='pointer' 
        h='50px' 
        marginTop='-75px' 
        marginLeft='30px' 
        src={imagem_pokedex_aberta} 
        onClick={() => goToHomePage(history)}
        />
        <Box marginTop='25px'>
        <Text>Pokedex</Text>
        </Box>
      </Box>
  );
}

export default Pokedex;