import React from 'react'
import { Flex, Spacer ,Text,Container,Image} from "@chakra-ui/react"
import { Center, Heading } from '@chakra-ui/layout'
import Link from 'next/link'
import styles from './navbarStyles'
function Navbar() {
    return (
        <React.Fragment>
            
            <Flex bgGradient="linear(to-r, rgba(0,122.5,0,0.2), rgba(0,122.5,122.5,0.2))" direction='row'  alignItems='center'
            >   
                <Image src='/BrandLogo.png' boxSize={styles.brandlogoSize} m={1} alt="BrandLogo" /
                >
                <Heading as="h4" fontSize={styles.logoText}>Weather</Heading>
                <Link href="/" passHref>
                <Text margin="0em 1.5em " style={styles.cursor} fontSize={styles.navbarText}>About Us</Text>
                </Link>
                <Link href="/" passHref>
                <Text margin="0em 1.5em " style={styles.cursor} fontSize={styles.navbarText}>Feedback</Text>
                </Link>
                
            </Flex>
            
        </React.Fragment>
    )
}

export default Navbar
