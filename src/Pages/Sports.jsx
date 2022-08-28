

import React from 'react'
import { NavLink } from 'react-router-dom';
import "./styled.modules.css";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../hoc/action'
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Sports = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <>
    <Heading>SPORTS</Heading><br />
    <div className='mainbusiness'>
      <div className='firstbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655285970.webp" alt="" />  <br />
        <NavLink className={"navlink"} style={{fontSize:"35px", fontWeight:"light"}} to="/
        ">UEFA Nations League: Netherlands Survive Wales Fightback For Dramatic Win - In Pics</NavLink><br />
        
        <p>After leading 2-1, the Netherlands conceded a 92nd-minute penalty with Gareth Bale converting from the spot, then Memphis Depay won it straight from the restart. A 3-2 scoreline at home helped Oranje lead Group A4 after the fourth round with 10 points....</p>
        </div>
      <div className='secbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1655283881.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">Arsene Wenger's Comment On Africa Draws The Ire Of South Americans</NavLink><br />
        <p>Arsene Wenger said that if French striker Kylian Mbappe 'had been born in Cameroon, he wouldn't have become the striker he is today.'</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">SL Vs AUS, 1st ODI: Glenn Maxwell Guides Australia To Nervy Win Over Sri Lanka</NavLink>
        <p>Chasing a revised target of 282 runs from 44 overs, Australia were 189/5 in 30 overs when Glenn Maxwell walked in. He hit 80 not out off 51.</p>
      </div>
      <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655281588.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">UEFA Nations League: Belgium Cement Second Spot With Win Over Poland - In Pics</NavLink><br />
        <p>Michy Batshuayi's header in the first half proved the difference between Belgium and Poland in their UEFA Nations League, Group A4 match. Belgium are second in...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">Darwin Nunez, Uruguayan Striker, Joins Liverpool From Benfica For USD 78 Million</NavLink>
        <p>It is an immediate response by Liverpool to the signing of Erling Haaland by Premier League title rivals Manchester City.</p>
      </div>
    </div>
    <hr />
    <div className='advertisment'><img className='advertismentimg' src="https://tpc.googlesyndication.com/simgad/12297990069957152181" alt="" /></div>


    <Box>
<Stack display={{md:"flex"}} flexDirection={{md:"row"}} p= "0rem 2rem">
<Box>
             
             <Flex flexWrap="wrap" justifyContent="space-around">
                  {articles.map(article=>{
                       return <BlogPostWithImage key={article.id} image={article.urlToImage} 
                        title={article.title} description={article.description} publishedAt={article.publishedAt} source={article.source.name}/>
                  })}
             </Flex>
   
        </Box>
        </Stack>
        </Box>
    </>
  )
}


function BlogPostWithImage({image,title,description,publishedAt,source}) {
  return (
    <Center py={6}>
      <Box
        maxW={'495px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'290px'}
         
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
            <Image
             
            src={image}
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
          {source}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
             <NavLink className={"active"} to={`/fullnews/${title}/${source}/${description}`}>{title}</NavLink>
          </Heading>
          <Text color={'gray.500'}>
           {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}></Text>
            <Text color={'gray.500'}>{publishedAt}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
export default Sports