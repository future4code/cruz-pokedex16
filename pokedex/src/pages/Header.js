import React from 'react'
import { Box } from '@chakra-ui/layout'
import imagem_logo from '../assets/Images/pokemon-png-logo-removebg-preview.png'
import { Image } from '@chakra-ui/image'


const Header = () => {

return(

    <Box
    w='100%'
    h='110px' bgGradient="linear(blue.600 30%, #006F80 25%, green.400 100%)">
        <Image h='100px' marginLeft='540px' src={imagem_logo} />
    </Box>
)

}
export default Header;