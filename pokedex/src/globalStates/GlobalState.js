import GlobalStateContext from "./GlobalStateContexts"
import { useState} from "react"
import axios from "axios"
import { baseUrl } from "../constants/url"

const GlobalState = (props) => {

    // const pokemon = useRequestData(`/pokemon/${name}`, [])

    const [pokemon, setPokemon] = useState([])
    
    const getDetailPokemon = () => {
        axios
        .get(`${baseUrl}/pokemon/pikachu`)
        .then((res) => {
            setPokemon(res.data)
        })
        .catch((err) => console.log(err.response))
    }
    
    const states = {pokemon}
    const setters = {setPokemon}
    const requests = { getDetailPokemon}
    const data = { states, setters, requests}
    console.log(data)
    
    return(
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;