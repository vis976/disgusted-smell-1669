import React from 'react'
import "../Pages/styled.modules.css";
// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  
  HStack,
  
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  color,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}> 
                  
           
            <HStack
            className='nav'
              as={'nav'}
              margin={"auto"}
              spacing={2}
              fontSize={"16px"}
              color={"#red"}
              alignItems={'center'}
              fontWeight={"bold"}
              padding={"8px 50px"}
              display={{ base: 'none', md: 'flex' }} 
                 px={1.5}
                 py={1}
                 rounded={'md'}
                 justifyContent={'space-around'} 
                 gap={"3px"}
                 marginLeft={"20px"}
                
                //  _focus={{ boxShadow: "outline" }}
                  >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
                
              ))} */}
              <NavLink className={"active"} to="/">HOME</NavLink>
              <NavLink className={"active"}   to="/outlook" >OUTLOOK</NavLink>
              <NavLink className={"active"}  to="/BUSINESS">BUSINESS</NavLink>
              <NavLink className={"active"}  to="/MONEY">MONEY</NavLink>
              <NavLink className={"active"}  to="/crypto ">CRYPTO CORNER</NavLink>
              <NavLink className={"active"}  to="/TRAVEL">TRAVEL</NavLink>
              <NavLink className={"active"}  to="/SPORTS">SPORTS</NavLink>
              <NavLink className={"active"}  to="/VIDEOS">VIDEOS</NavLink>
              <NavLink className={"active"}  to="/ENTERTAINMENT">ENTERTAINMENT</NavLink>
              <NavLink className={"active"}  to="/PHOTOS">PHOTOS</NavLink>
              <NavLink className={"active"}  to="/MAGZINE">MAGZINE</NavLink>
              <NavLink className={"active"}  to="/HINDI">ESG BHARAT</NavLink>
              <NavLink className={"active"}  to="/OTHERS">OTHERS</NavLink>
              <NavLink className={"active"}  to="/POSHAN">AGRITECH</NavLink>
              
             <img src='https://www.outlookindia.com/images/home_new_v4/search_in_nav.svg' style={{height:"15px",cursor:"pointer"}}/>

             
            </HStack>
          </HStack>
         
          <Flex alignItems={'center'}>
            <Menu>
             
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4} fontSize={"14px"}
              color={"#4f4d4d"}
              
             textAlign={"start"}
              fontWeight={"medium"}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
                 <NavLink to="/">HOME</NavLink><hr/>
              <NavLink className={"active"}  to={"/outlook"}>OUTLOOK  </NavLink><hr/>
              <NavLink className={"active"}  to="/BUSINESS">BUSINESS</NavLink><hr/>
              <NavLink className={"active"}  to="/MONEY">MONEY</NavLink><hr/>
              <NavLink className={"active"}  to="/crypto corner">CRYPTO CORNER</NavLink><hr/>
              <NavLink className={"active"}  to="/TRAVEL">TRAVEL</NavLink><hr/>
              <NavLink className={"active"}  to="/SPORTS">SPORTS</NavLink><hr/>
              <NavLink className={"active"}  to="/VIDEOS">VIDEOS</NavLink><hr/>
              <NavLink className={"active"}  to="/ENTERTAINMENT">ENTERTAINMENT</NavLink><hr/>
              <NavLink className={"active"}  to="/PHOTOS">PHOTOS</NavLink><hr/>
              <NavLink className={"active"}  to="/MAGZINE">MAGZINE</NavLink><hr/>
              <NavLink className={"active"}  to="/HINDI">HINDI</NavLink><hr/>
              <NavLink className={"active"}  to="/POSHAN">POSHAN</NavLink><hr/>
              <NavLink className={"active"}  to="/OTHERS">OTHERS</NavLink><hr/>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Divider orientation='horizontal' bg={useColorModeValue('red', 'gray.900')}/>
     
    </>
  );
}

export default Navbar