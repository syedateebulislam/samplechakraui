import { Button, HStack , Icon} from '@chakra-ui/react'
import React from 'react'
import {FaFacebookF,FaGoogle,FaMediumM,FaMedium} from 'react-icons/fa'

function Social() {
    return (
            <HStack spacing="20">

                <Button>
                <Icon as={FaMediumM} boxSize="7" 
                onClick={() => window.open("https://syedateebulislam.medium.com")}/>
                </Button>    

                <Button>
                <Icon as={FaFacebookF} boxSize="7"
                onClick={() => window.open("https://m.facebook.com/people/Syed-Ateebul-Islam/100007216245323/")}/>
                </Button>
                
                <Button>
                <Icon as={FaGoogle} boxSize="7"
                onClick={() => window.open("https://www.google.co.in/search?q=syed+ateebul+islam&source=hp&ei=uVr0YILXIbG-3LUPubq70AY&iflsig=AINFCbYAAAAAYPRoyQThTnTHrEV5GWHh8WRFGKPkgEhb&oq=syed+ateebul+islam&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEAoQoAE6CggAEOoCELQCEEM6DQgAEOoCELQCEEMQiwM6CAgAELEDEIMBOggILhCxAxCDAToFCAAQsQM6AggAOgsILhCxAxDHARCjAjoFCC4QsQM6CAguEMcBEK8BOgUILhCTAjoCCC46CAguELEDEJMCOgYIABAWEB46CAgAEBYQChAeOgYIABANEB46CAgAEAgQDRAeOggIABANEAoQHlCod1jwlQFgj5gBaAFwAHgAgAHAAogBuBaSAQgwLjE2LjEuMZgBAKABAaoBB2d3cy13aXqwAQq4AQI&sclient=gws-wiz&ved=0ahUKEwjCl-fqiO3xAhUxH7cAHTndDmoQ4dUDCAg&uact=5")}/>
                </Button>

            </HStack>
        )
}

export default Social
