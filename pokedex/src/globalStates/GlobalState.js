import GlobalStateContext from "./GlobalStateContexts"
import { useState} from "react"
import axios from "axios"
import { baseUrl } from "../constants/url"
// import { baseUrl } from '../constants/url'
// import axios from "react"

const GlobalState = (props) => {

    // const pokemon = useRequestData(`/pokemon/${name}`, [])

    const [pokemon, setPokemon] = useState({})
    
    const getDetailPokemon = () => {
        axios
        .get(`${baseUrl}/pokemon/bulbasaur`)
        .then((res) => {
                console.log(res.data)
                setPokemon(res.data)
            })
            .catch((err) => console.log(err.response))
        }
        
        console.log(pokemon)
        
        const states = {pokemon}
        const setters = {setPokemon}
        const requests = { getDetailPokemon}
        const data = { states, setters, requests}
        
    return(
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;