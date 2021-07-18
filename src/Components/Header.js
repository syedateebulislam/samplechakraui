//import { useColorMode } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Stack, useMediaQuery, Box, Text, Button, Image } from '@chakra-ui/react';
import React from 'react'


function Header() {
      
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack >
            
            <Flex direction={isNotSmallerScreen ? "row" :"column"}
            spacing="200px" p={isNotSmallerScreen ? "30" : "0"}
            alignSelf="flex-start">

            <Box  mr="20px" spacing="14" mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                <Text fontSize="2xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="4xl" fontWeight="bold" 
                bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" 
                bgClip="text"> Syed Ateebul Islam</Text>
                
                <Text fontSize="14px">
                Java Developer with More than 2-year background in building
                and implementing functionalities</Text>

                <Text fontSize="14px"> within TCS Bancs product.</Text>
                
                
                <Button mt={8} colorScheme="blue" 
                onClick={() => window.open("https://www.dropbox.com/s/5f7btdot9skjvw9/syed_ateebul_islam.pdf?dl=0")}>
                    See Full Resume
                </Button>

                


            </Box>

            <Image  alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="200px"
                    src="https://avatars.githubusercontent.com/u/32341313?s=400&u=e5125184b98c7d9d9f727d555d6982a108affed4&v=4"
            />

            </Flex>

        </Stack>
    )
}

export default Header