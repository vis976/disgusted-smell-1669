

import React from 'react'

import Outlook from './Outlook'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../hoc/action'
import { NavLink } from 'react-router-dom'
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
const Magzine = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <Box>
             
    <Flex flexWrap="wrap" justifyContent="space-around">
         {articles.map(article=>{
              return <BlogPostWithImage key={article.id} image={article.urlToImage} 
               title={article.title} description={article.description} publishedAt={article.publishedAt} source={article.source.name}/>
         })}
    </Flex>

</Box>
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

export default Magzine