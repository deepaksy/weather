import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import theme from '../webisteTheme/theme'
import Layout from './layout'
function MyApp({ Component, pageProps, router }) {
  return <ChakraProvider theme={theme}>
    <Layout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
}

export default MyApp
