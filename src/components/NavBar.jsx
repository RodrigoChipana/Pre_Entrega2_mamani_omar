import CartWidget from "./CartWidget";
import { Heading, Box, Flex, Spacer,Container, Menu,MenuButton, MenuList,MenuItem,Button,Avatar,Center, Square, Circle} from '@chakra-ui/react';
import React from "react";
import{Link,NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <Container maxW="100%" bg='black' color='white'  h='85'>
            <Flex alignContent={"center"} gap="2" >
                <Center w='60px' h='60px' bg='tomato' color='white'marginTop={"13px"}>
                        < CartWidget/>
                </Center>
                
                <Spacer/>
                <Box p="4" marginLeft={"12%"}>
                     
                     <Link to={"/"}><Heading size={"2xl"}>UNIQUE </Heading></Link>
                </Box>
                <Spacer/>
                <Box>
                    <Menu>
                        <Link to ={"/catalogue"}>
                            <MenuButton 
                                as={Button}
                                size="lg"
                                variant="outline"
                                colorScheme="orange"
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
                        colorScheme="orange"
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