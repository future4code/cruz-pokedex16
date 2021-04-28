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
      <Box minH='625px' bg='gray.300'>
        <Header/>
        <Center marginTop='100px'>
          <Box
          w='500px'
          bg='white'
          h='300px'
          border='5px solid black'
          templatecolumns="repeat(6, 1fr)"
          borderRadius='15px'>
            {states.pokemon.sprites && states.pokemon.sprites.front_default ? (
              <Box>
                <Image
                marginLeft='25px'
                  marginTop='20px'
                  boxSize="90px"
                  src={states.pokemon.sprites.versions['generation-v']
                  ['black-white'].animated.front_default} />
              </Box>
              ) :
              <Spinner
                marginTop='10px'
                marginLeft='70px'
                thickness="5px"
                speed="0.70s"
                emptyColor="gray.300"
                color="#FF0000"
                size="xl"
            />}
                <Text marginLeft='30px'>
                  <b>{states.pokemon.name}</b>
                </Text>
            {states.pokemon.sprites && states.pokemon.sprites.front_default ? (
              <Box>
                <Image 
                marginLeft='25px'
                marginTop='35px'
                boxSize="90px"
                src={states.pokemon.sprites.versions['generation-v']
                ['black-white'].animated.back_default} />
              </Box>
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
        </Center>
      </Box>
  );
}

export default DetalhesPokemons;
