

import React from 'react'

import { NavLink } from 'react-router-dom'
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
const Others = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    //  <Stack display={{md:"flex"}} flexDirection={{md:"row"}} p= "0rem 2rem">
    <>
    <div className='mainlook'>
    <div className='firstlook'>
      <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655265518.webp" alt="" />
   <p>Pall of gloom in J&K amid continued targeted attacks on minorities and slew of militant killings     -Getty Images</p><br />
   <NavLink className={"navlink"} style={{fontSize:"35px", fontWeight:"light"}} to="/">Targeted Attacks On Minority, Migrant Workers In J&K Pose Biggest Challenge To Govt</NavLink>
   <div id='imagpara'>
              <p>Youths across the country have taken to the streets and are protesting against the new short-term recruitment scheme 'Agnipath' for entry in the armed forces. There have been violent protests in several places and irate youths have torched trains and damaged public property at various places.</p>
            <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655548553.webp" alt=""  width="250px" height="190px" className='imglef'/>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"20px",border:"1px solid red",}}>
            <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655281588.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">UEFA Nations League: Belgium Cement Second Spot With Win Over Poland - In Pics</NavLink><br />
       </div>
       <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1655277120.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">Asian Stocks Mixed Ahead Of Fed Rate Hike Decision</NavLink><br />
       </div>
       <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655209595.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/
        ">WTO Meet Likely To Be Extended For One Day</NavLink><br />
       </div>
            </div>
      
    </div>
    <div className='secondlook'>
      <img src="https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/300-120_2022_06_13_080305.jpg" alt="" />
      <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655268214.webp" alt="" />
      <br />
      <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">From Naya Dawn To Daily Violence, Kashmir Post-August 5, 2019</NavLink><br />
      <p>Three years after the abrogation of Article 370, there is no elected government in Jammu and Kashmir and targeted killings have gained pace despite frequent encounters.</p>
    <br />
    <h6>NASEER GANAI/ last updated at 8:58 am</h6><br />
    <br />
    ADVERTISMENT
    <img src="https://imgnew.outlookindia.com/uploadimage/library/free_files/gif/300x25_2022_06_07_020134.gif" alt="" />
  <br />
  <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1650862677.webp" alt="" />
    <br />
    <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">An Ode to Ladakh: A Pristine And Beautiful Region In Transition</NavLink><br />
    <p>The hope is that Ladakh remains a region that while reaping the benefits of economic development and modernisation retains its essential character.</p>
    </div>
   
  </div>
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
  {/* </Stack> */}
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
export default Others