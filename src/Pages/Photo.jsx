

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
const Photo = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <>
    <Heading>PHOTOS</Heading><br />
    <div className='mainbusiness'>
      <div className='firstbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655281588.webp" alt="" />
        <NavLink className={"navlink"} style={{fontSize:"35px", fontWeight:"light"}} to="/">Cabinet Gives Nod For 5G Auctions; 72,097.8 MHz Spectrum To Be Put On Block By July-End</NavLink><br />
        
        <p>A total of 72,097.85 MHz of spectrum with a validity period of 20 years will be put to auction to be held by the end of July, 2022</p>
        </div>
      <div className='secbusiness'>
<img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655275576.webp" alt="" />        
<NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Asian Stocks Mixed Ahead Of Fed Rate Hike Decision</NavLink><br />
        <p>The Shanghai Composite Index gained 1.1% to 3,323.64 after the Chinese government reported factory output rebounded into positive territory in May as...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Rupee Inches 5 Paise Higher To 77.99 Against US Dollar In Early Trade</NavLink>
        <p>Forex traders said lacklustre domestic markets, elevated crude oil prices and persistent foreign capital outflows weighed on the local unit.</p>
      </div>
      <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655275647.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">WTO Meet Likely To Be Extended For One Day</NavLink><br />
        <p>Member countries of the organization have gathered here to finalize an agreement on disciplining subsidies to promote sustainable fishing, and a package in...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">One Cannot Tread The Path Of Trade On An Empty Stomach: Piyush Goyal At WTO Meet</NavLink>
        <p>Goyal said that it is possible to find the solution as there are well-established and proven mechanisms available and documents are on the table which can be...</p>
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
export default Photo