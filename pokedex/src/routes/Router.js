import { Heading, Box } from '@chakra-ui/layout'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetalhesPokemons from '../pages/DetalhesPokemon'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'
import imagem_logo from '../assets/Images/pokemon-png-logo-removebg-preview.png'
import { Image } from '@chakra-ui/image'
import { Button, IconButton } from '@chakra-ui/button'
import { SiPokemon } from 'react-icons/si'
import { useHistory } from "react-router-dom"
import { goToPokedexPage } from "./coodinator"



const Router = () => {

    const history = useHistory();

    return(
        <BrowserRouter>
            <Box
                h='110px' bgGradient="linear(blue.600 30%, #006F80 25%, green.400 100%)">
                <Image h='100px' marginLeft='540px' src={imagem_logo} alt='logo' />
                <IconButton
                onClick={() => goToPokedexPage(history)}
                variant='ghost'
                bgGradient="linear(#FF0000 50%, white 25%, white 100%)"
                _hover={{
                    bg:'null'
                  }}
                _active={{
                    bgGradient:"linear(#FF0000 50%, white 25%, white 100%)"
                }} 
                icon={<SiPokemon size='7em' color='black'/>} 
                marginTop='-120px' marginLeft='20px' 
                >Pokedex</IconButton>
            </Box>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/pokedex'>
                    <Pokedex  />
                </Route>

                <Route exact path='/detalhes-pokemons'>
                    <DetalhesPokemons />
                </Route>

                <Route>
                    <Heading>Error 404: Página não encontrada!</Heading>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;