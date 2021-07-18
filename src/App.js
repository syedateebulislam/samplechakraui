import { Flex, Heading, VStack } from "@chakra-ui/layout";
import { IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import {FaSun ,FaMoon,  FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa';
import Header from "./Components/Header";
import Social from "./Components/Social";
import Profile from "./Components/Profile"


function App() {

  const {colorMode , toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            Portfolio in Chakra UI
        </Heading>
      
      <Spacer></Spacer>
      <IconButton  icon= {<FaLinkedin/>} isRound="true" 
      onClick={() => window.open("https://in.linkedin.com/in/syedateebulislam")}></IconButton>

      <IconButton ml={8} icon= {<FaGithub/>} isRound="true" 
      onClick={() => window.open("https://github.com/syedateebulislam")}></IconButton>

      <IconButton ml={8} icon= {isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>

      </Flex>

      <Header></Header>
      <Profile></Profile>
      <Social></Social>
      
    </VStack>
  );
}

export default App;
