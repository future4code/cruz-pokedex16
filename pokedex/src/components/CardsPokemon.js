import React from 'react'
import { Box, Text, Center } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { Spinner, Tooltip } from "@chakra-ui/react"
import { Image } from '@chakra-ui/image'
import { useHistory } from "react-router-dom"
import { goToPokemonDetail } from "../routes/coodinator"
import { useRequestData } from '../hooks/useRequestData'
import { CgPokemon } from 'react-icons/cg'
import { SiPokemon } from 'react-icons/si'
import {textoShiny} from '../constants/Textos'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
  } from "@chakra-ui/react"

const CardsPokemon = (props) => {
    const {name} = props;
    const pokemon = useRequestData(`/pokemon/${name}`, [])
    
    const history = useHistory();   
    
    return (
        <Box 
        bg='white' 
        h='200px' 
        border='5px solid black' 
        templatecolumns="repeat(6, 1fr)" 
        borderRadius='15px'>
            {pokemon.sprites && pokemon.sprites.front_default ? (
                <Popover>
                    <PopoverTrigger>
                        <Center 
                        role="button"
                        children="Click" 
                        w='60px' 
                        marginLeft='120px'>
                            <Tooltip
                            hasArrow label={`Shiny ${name}`}
                            placement="right-start"
                            bg="#FF0000"
                            color='white'
                            >
                                <Image marginLeft='10px' 
                                boxSize="40px" 
                                src={pokemon.sprites.versions['generation-v']
                                ['black-white'].animated.front_shiny}/>
                            </Tooltip>
                        </Center>
                    </PopoverTrigger>
                    <PopoverContent bgGradient='linear(blue.600 30%, #006F80 25%, green.400 70%)'>
                        <PopoverArrow />
                        <PopoverCloseButton />
                            <PopoverHeader><Center><b>Shiny {name}</b></Center></PopoverHeader>
                            <PopoverBody>
                                    <Image
                                    marginTop='30px' 
                                    marginLeft='230px' 
                                    boxSize="50px" 
                                    src={pokemon.sprites.versions['generation-v']
                                    ['black-white'].animated.back_shiny}/>
                                <Center>
                                    <Image
                                    marginTop='-80px' 
                                    marginLeft='10px' 
                                    boxSize="150px" 
                                    src={pokemon.sprites.versions['generation-v']
                                    ['black-white'].animated.front_shiny}/>
                                </Center>
                            </PopoverBody>
                            <PopoverFooter borderRadius='10px' bg='gray.300' margin='5px'><b>Shiny:</b> {textoShiny}</PopoverFooter>
                    </PopoverContent>
                </Popover>
                    ) : 
                    <Spinner
                    marginLeft='120px'
                    thickness="5px"
                    speed="0.70s"
                    emptyColor="gray.300"
                    color="#FF0000"
                    size="xl"
                    />}
            {pokemon.sprites && pokemon.sprites.front_default ? (
                <Center 
                marginTop='-17px' >
                    <Image 
                    boxSize="90px" 
                    src={pokemon.sprites.versions['generation-v']
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
            <Center>
                <Text>
                    <b>{pokemon.name}</b>
                </Text>
            </Center>
            <Center marginTop='15px' bg='black' justifyContent='space-around'>
                <Tooltip
                borderRadius='15px'
                border='1px solid black' 
                hasArrow label={`Adicionar ${name} ?? Pokedex`}
                placement="bottom"
                bgGradient="linear(#FF0000 65%, white 25%, white 0%)"
                color='black'
                >
                    <IconButton 
                    variant="outline" 
                    borderRadius='15px' 
                    icon={<CgPokemon size='2em' color='white'/>}
                    _hover={{
                        borderRadius:'full',
                        borderColor:'#FF0000'
                    }}>
                    </IconButton>
                </Tooltip>
                <Tooltip 
                borderRadius='15px'
                border='1px solid black'
                hasArrow label="Detalhes" 
                placement="right-start"
                bgGradient="linear(#FF0000 65%, white 25%, white 0%)"
                color='black'
                >
                    <IconButton
                        margin='0'
                        padding='0'
                        h='35px'
                        w='70px' 
                        bg='white'
                        icon={<SiPokemon size='5em' color='black'/>}
                        onClick={() => goToPokemonDetail(history)}
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
