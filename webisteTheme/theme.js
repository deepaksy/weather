import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props =>({
        body: {
            bg: mode('#202023' , '#202023')(props)
        }
    })
}



const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({config})

export default theme