import CartWidget from "./CartWidget";
import { Heading, Box, Flex, Spacer,Container, Menu,MenuButton, MenuList,MenuItem,Button,Avatar} from '@chakra-ui/react';
import React from "react";
import{Link,NavLink} from 'react-router-dom';
//falta importar icon chakra

const NavBar = () => {
    return (
    <>
        <Container maxW="100%" bg='black' color='white'  h='85'>
            <Flex alignContent={"center"} gap="2" >
                <Box p="3" h='50'bg='tomato'borderRadius='5%'>
                    <CartWidget/>
                </Box>
                <Spacer/>
                <Box p="4">
                     
                     <Link to={"/"}><Heading size={"xl"}>UNIQUE </Heading></Link>
                </Box>
                <Spacer/>
                <Box>
                    <Menu>
                        <Link to ={"/catalogue"}>
                            <MenuButton 
                                as={Button}
                                size="lg"
                                variant="outline"
                                colorScheme="pink"
                                m="5"
                            >
                            Catalogue  
                            </MenuButton>   
                        </Link>
                    </Menu>
                <Menu>
                    <MenuButton 
                        as={Button}
                        size="lg"
                        variant="outline"
                        colorScheme="pink"
                        m="5"
                    >
                    Categories  
                    </MenuButton>
                    <MenuList className="menu-list" color={"black"}>
                        <Link to={`/category/${"Zapatilla"}`}>
                            <MenuItem >Zapatilla</MenuItem>
                        </Link>    
                        <Link to={`/category/${"Remera"}`}>
                            <MenuItem>Remera</MenuItem>
                        </Link> 
                        <Link to={`/category/${"Campera"}`}>
                            <MenuItem>Campera</MenuItem>
                        </Link> 
                    </MenuList> 
                </Menu>
                </Box>
            </Flex>
        </Container>
    </>
    )
};

export default NavBar;