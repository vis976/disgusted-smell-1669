import React from 'react'
import { Box, Stack,Center } from '@chakra-ui/react';
import { Divider,Modal } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const OutlookLogo = () => {
  return (
    <Stack alignItems={'center'} >
        <Box><img src='https://tpc.googlesyndication.com/simgad/7640233772078457469'/></Box>
        
    <Box  ><NavLink to="/"> <img src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' /></NavLink> </Box>
    <Box display={"flex"} gap={"10px"} color={"#4f4d4d"} fontSize={"13px"}>
        {/* <Box><NavLink to="/login">LOGIN</NavLink></Box> */}
        <Box><NavLink to="/login">LOGIN</NavLink></Box>
       
       
        <Center height='15px' bg={"red"} marginTop={"7px"} >
  <Divider orientation='vertical' />
</Center>
<a  data-bs-toggle="modal" href="#exampleModalToggle" role="button" >SUBSCRIBE</a>
        
    </Box>
    </Stack>
  )
}

export default OutlookLogo