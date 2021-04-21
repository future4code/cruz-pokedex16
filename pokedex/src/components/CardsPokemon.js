import { Heading, Box, Text, Center } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { Spinner, Tooltip } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import React from 'react'
import { useHistory } from "react-router-dom"
import { useRequestData } from '../hooks/useRequestData'
import { Grid, GridItem } from "@chakra-ui/react"
import { CgPokemon } from 'react-icons/cg'
import { SiPokemon } from 'react-icons/si'

const CardsPokemon = (props) => {
    const {name} = props;
    const pokemon = useRequestData(`/pokemon/${name}`, [])
    console.log(pokemon.name)

    const history = useHistory();   


return (
        <Box bg='white' h='200px' border='5px solid black' templateColumns="repeat(6, 1fr)" borderRadius='15px' >
            {pokemon.sprites && pokemon.sprites.front_default ? (
                <Center marginTop='20px' >
                    <Image boxSize="90px" 
                    src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} />
                </Center>
                    ) : <Spinner
                    marginTop='50px'
                    marginLeft='70px'
                    thickness="5px"
                    speed="0.70s"
                    emptyColor="gray.300"
                    color="#FF0000"
                    size="xl"
                    />}
            <Center>
                <Text>
                    <b>{pokemon.name}</b>
                </Text>
            </Center>
            <Center marginTop='15px' bg='black' justifyContent='space-around' border='1px solid black'>
                <Tooltip 
                hasArrow label="Adicionar á Pokedex" 
                placement="left-end"
                bgGradient="linear(#FF0000 65%, white 25%, white 0%)"
                color='black'
                >
                    <IconButton variant="outline" borderRadius='15px' icon={<CgPokemon size='2em' color='white'/>}
                    _hover={{
                        borderRadius:'full',
                        borderColor:'#FF0000'
                    }}>
                    </IconButton>
                </Tooltip>
                <Tooltip 
                hasArrow label="Detalhes" 
                placement="right-start"
                bgGradient="linear(#FF0000 65%, white 25%, white 0%)"
                color='black'
                >
                    <IconButton 
                        h='35px'
                        w='70px' 
                        bg='white'
                        icon={<SiPokemon size='5em' color='black'/>}
                        _hover={{
                            bgGradient:"linear(#FF0000 55%, white 25%, white 0%)" 
                        }}
                        >
                            Detalhes
                    </IconButton>
                </Tooltip>
            </Center>
        </Box>
    );
  }
  
  export default CardsPokemon;