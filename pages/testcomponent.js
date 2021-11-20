import React from 'react'
import Navbar from '../components/navbar'
import TitleBox from '../components/TitleBox'
import API from '../components/api'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
function testcomponent() {
    const title = "Test Components"
    return (
        <>
        <Head>
            <title>{title} - Deepak suryawanshi</title>
        </Head>
        <Navbar/>
        <br/>
        <Container>
        <TitleBox content="Welcome to weather Application"/>
        </Container>
         <API/>
        </>
    )
}

export default testcomponent
