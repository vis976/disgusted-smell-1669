import "./Footer.Module.css";

import React from "react";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,

  useColorModeValue,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text
        fontWeight={"450"}
        fontSize={"1g"}
        mb={5}
        color={useColorModeValue("#C2C2C2", "gray.200")}
      >
        {children}
      </Text>
    );
  };
  return (
    <Box
      bg={useColorModeValue("#212020")}
      color={useColorModeValue("gray", "gray.200")}
    >
      <div className="Box1">
        <Container as={Stack} maxW={"6xl"} py={10} >
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 5 }}
            spacing={8}
            marginLeft={"25px"}
          >
            <Stack align={"flex-start"}>
              <ListHeader className="contain">Main Stories</ListHeader>
              <NavLink to={"/"}>Maganize</NavLink>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <NavLink to={"/"} className="contain">NATIONAL</NavLink>
             
              </Stack>
              <NavLink to={"/international"} className="contain">INTERNATIONAL</NavLink>
              <NavLink to={"/business"}className="contain">BUSINESS</NavLink>
              <NavLink to={"/opinions"}className="contain">OPINIONS</NavLink>
              <NavLink to={"/look reviews"}className="contain">LOOK REVIEWS</NavLink>
              <NavLink to={"/"} className="contain">THE NEWS</NavLink>
              <NavLink to={"/"} className="contain">SPORTS</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader className="contain">Traveller</ListHeader>
              <NavLink to={"/"} className="contain">TRAVELOGUES</NavLink>
              <NavLink to={"/"} className="contain">WEEKEND BREAKS</NavLink>
              <NavLink to={"/"} className="contain">HOLYDAYS WITH </NavLink>
              <NavLink to={"/"} className="contain">PHOTO FEATURES</NavLink>
              <NavLink to={"/"} className="contain">HOTELS</NavLink>
              <NavLink to={"/"}className="contain">GUIDEBOOKS</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader className="contain">Money</ListHeader>
              <NavLink to={"/"} className="contain">MUTUAL FUNDS </NavLink>
              <NavLink to={"/"} className="contain">INSURANCE </NavLink>
              <NavLink to={"/"} className="contain">EQUILTY</NavLink>
              <NavLink to={"/"}>FIXED ASSETS</NavLink>
              <NavLink to={"/"} className="contain">BANKING</NavLink>
              <NavLink to={"/"} className="contain">ASK</NavLink>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader className="contain">Follow Us</ListHeader>
              <NavLink to={"/"} className="contain">Facebook</NavLink>
              <NavLink to={"/"} className="contain">Twitter</NavLink>
              <NavLink to={"/"} className="contain">Dribbble</NavLink>
              <NavLink to={"/"} className="contain">Instagram</NavLink>
              <NavLink to={"/"} className="contain">NavLinkedIn</NavLink>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader className="contain">Follow Us</ListHeader>
              <NavLink to={"/"}className="contain">Facebook </NavLink>
              <NavLink to={"/"}className="contain">Twitter</NavLink>
              <NavLink to={"/"}className="contain">Dribbble</NavLink>
              <NavLink to={"/"}className="contain">Instagram</NavLink>
              <NavLink to={"/"} className="contain">NavLinkedIn</NavLink>
            </Stack>
          </SimpleGrid>
        </Container>
      </div>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        ></Flex>
      </Box>
          <div className="masaimyfoot">
               <Link to="/home">About Us</Link>
               <Link to="/home">Contact Us</Link>
               <Link to="/home">Subscribe</Link>
               <Link to="/home">Copyright@Disclimer</Link>
               <Link to="/home">Osm Awards</Link>
               <Link to="#">Comliance</Link>
               <Link to="#">Poshan</Link>
              
          </div>
    </Box>
  );
};

export default Footer;
