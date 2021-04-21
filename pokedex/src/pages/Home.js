import { Heading, Box, Text } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { Tooltip, Grid } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import React from 'react'
import { useHistory } from "react-router-dom"
import Header from './Header'
import imagem_pokedex_fechada from '../assets/Images/pokedex-fechada-kalos-removebg-preview.png'
import { goToPokedexPage } from "../routes/coodinator"
import CardsPokemon from '../components/CardsPokemon'
import { useRequestData } from '../hooks/useRequestData'


const Home = () => {

  const history = useHistory();
  const pokemonList = useRequestData('/pokemon?limit=100', [])

  const pokemonsCards = pokemonList.results && pokemonList.results.length > 0 && pokemonList.results.map((pokemon) => {
    return <CardsPokemon key={pokemon.name} name={pokemon.name} />
            })

  return (
      <Box bg='gray.300'>
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

        <Grid marginTop='50px' templateColumns="repeat(6, 1fr)" gap={6}>
          {pokemonsCards}
        </Grid>
      </Box>
  );
}

export default Home;