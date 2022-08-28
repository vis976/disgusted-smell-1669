

import React from 'react';
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

const Entertainment = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <>
    <Heading>ENTERTAINMENT</Heading><br />
    <div className='mainbusiness'>
      <div className='firstbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1642786543.jpg" alt="" />
        <NavLink className={"navlink"} style={{fontSize:"35px", fontWeight:"light"}} to="/fullnews">Lagaan Team To Reunite At Aamir's Residence To Celebrate 21 Years Of Film</NavLink><br />
        
        <p>Bollywood superstar Aamir Khan's cricket drama 'Lagaan' is all set to complete 21 years of its release on June 15 and to commemorate that the star is all set to get together with the cast of the film at his house on Wednesday.</p>
        </div>
      <div className='secbusiness'>
<img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1646914781.webp" alt="" />        
<NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/fullnews">Malaika Arora To Turn An Author With Her Book On Fitness, Wellness, Nutrition</NavLink><br />
        <p>Actress Malaika Arora is set to turn into an author with her debut book on nutrition, which is currently in progress. The book will offer an understanding of...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/fullnews">Raghava Lawrence To Play Lead In P Vasu's 'Chandramukhi 2'</NavLink>
        <p>Lyca Productions has announced that it is to produce the sequel to director P Vasu's 'Chandramukhi', which had Rajinikanth and Nayanthara playing the lead.</p>
      </div>
      <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/Squid_Game_1655286158.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/fullnews">Netflix Announces 'Squid Game: The Challenge' Reality Series With Open Casting Call</NavLink><br />
        <p>Netflix has greenlit 'Squid Game: The Challenge', a reality competition series based on the hit 2021 South Korean drama.</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/fullnews">BTS Are Going Their Separate Ways On A 'Temporary Hiatus'</NavLink>
        <p>K-Pop band BTS broke down in tears as they revealed plans to pursue solo careers and "grow", but promised to return "someday".</p>
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
export default Entertainment