import React from 'react'
import { Breadcrumb,BreadcrumbItem } from '@chakra-ui/breadcrumb'
import { Stack, HStack, VStack, Heading } from "@chakra-ui/react"
function Weather({response}) {
    if(response=="No data Found"){
        return <h1>No data found</h1>
    }
    else{
        var AMPM=''
        const time = (response.location.localtime).slice(11,)
        const timeData = (time).slice(0,2)
        if(timeData<12){
            AMPM = 'AM';
        }
        else if(timeData>12){
            AMPM="PM"
        }
        else{
            AMPM="AM"
        }
        console.log(timeData)
        return (
            <>
                <Heading m="auto" w="fit-content">Weather Data</Heading>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <p>{response.location.country}</p>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p>{response.location.region}</p>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <p>{response.location.name}</p>
                    </BreadcrumbItem>
                </Breadcrumb>
                <VStack>
            <h4>{response.location.name} ({response.current.condition.text})</h4>
            <p>Time: {time}{AMPM}</p>
            <p>{response.current.is_day?'Day':'Night'}<img src={response.current.condition.icon}/></p>
            <p>Temperature:<br/> Celcius: {response.current.temp_c}C. Farenhit: {response.current.temp_f}F.</p>
            <p>Feels Like: {response.current.feelslike_c}C.  {response.current.feelslike_f}F. </p>
            
            </VStack>
            </>
        )
    }
}

export default Weather
