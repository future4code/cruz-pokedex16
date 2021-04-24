import React, { useContext, useEffect } from 'react'
import { Box, Text, Center } from "@chakra-ui/react"
import Header from './Header'
import GlobalStateContext from '../globalStates/GlobalStateContexts'
import { Spinner } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'



const DetalhesPokemons = (props) => {
  const { requests, states } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getDetailPokemon()
  }, [])



  return (
      <Box>
        <Box
          bg='white'
          h='200px'
          border='5px solid black'
          templatecolumns="repeat(6, 1fr)"
          borderRadius='15px'>
          <Header/>
        {states.pokemon.sprites && states.pokemon.sprites.front_default ? (
          <Center
            marginTop='-17px' >
            <Image
              boxSize="90px"
              src={states.pokemon.sprites.versions['generation-v']
              ['black-white'].animated.front_default} />
          </Center>
        ) :
          <Spinner
            marginTop='50px'
            marginLeft='70px'
            thickness="5px"
            speed="0.70s"
            emptyColor="gray.300"
            color="#FF0000"
            size="xl"
          />}
        </Box>
      </Box>
  );
}

export default DetalhesPokemons;
