import React from 'react'
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
function TitleBox({content}) {
    return (
        <>
           <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="gray"
      >
        {content}
      </Box>
        </>
    )
}

export default TitleBox
