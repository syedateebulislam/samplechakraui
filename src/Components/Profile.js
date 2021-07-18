import React from 'react'
import {Box, Flex, Heading, useMediaQuery, Text, Icon} from '@chakra-ui/react'
import {DiJava,DiReact,DiMysql } from 'react-icons/di'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
            w="100%" maxWidth={{base: "100vh" , md:"130vh",lg:"130vh",xl:"130vh"}}>

        <Box  alignSelf="center" px="22" py="11">
            <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
                2yr+
            </Heading>
        </Box>

        <Box alignSelf="center" px="32" py="16">
            {/*<Text fontWeight="bold" fontSize="11px">Developer specialized in java technologies</Text>
            */}
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                <Flex rounded="xl" direction="column" mt={4} bg="blue.400"
                h="30vh" w="30vh" justify="flex-end">

                <Icon color="white" p="4" as={DiJava} w="24" h="24"></Icon>
                <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    Backend
                </Text>
                </Flex>
                <Flex ml="2%" rounded="xl" direction="column" mt={4} bg="blue.400"
                h="30vh" w="30vh" justify="flex-end">

                <Icon color="white" p="4" as={DiReact} w="24" h="24"></Icon>
                <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    Frontend
                </Text>
                </Flex>
                <Flex ml="2%" rounded="xl" direction="column" mt={4} bg="blue.400"
                h="30vh" w="30vh" justify="flex-end">

                <Icon color="white" p="4" as={DiMysql} w="24" h="24"></Icon>
                <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                    DataBase
                </Text>
                </Flex>

            </Flex>

        </Box>

        </Flex>
    )
}

export default Profile
