import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/url'

export const useRequestData = (endpoint, inicialState) => {
    const [data, setData] = useState(inicialState)

    useEffect (() => {
        axios
            .get(`${baseUrl}${endpoint}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [endpoint])
    return data;
}