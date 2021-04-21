import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetalhesPokemons from '../pages/DetalhesPokemon'
import Home from '../pages/Home'
import Pokedex from '../pages/Pokedex'




const Router = () => {

    
    
    return(
        <BrowserRouter>
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