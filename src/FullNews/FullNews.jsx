



import   axios  from 'axios'
import React, { useEffect } from 'react'
import {useState} from "react"
import { useParams } from 'react-router-dom';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const FullNews = () => {
  const[data,setData]=useState()
    
     let {title,source,description,image}=useParams()
    let params=useParams()
     console.log(params);
     useEffect(()=>{
    
      

      axios({
        url:`http://localhost:8080/articles/${params.title}`,
        method:"Get",
      })
      .then(res=>{
    
      setData(res.data)
      })

      
      
    },[params.title])
      console.log(data)
    return (
      <Center py={6}>
        <Box
          maxW={'945px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'650px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image 
              src={
                 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
               
              }
            //  src= {data.urlToImage}
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
             {/* {data.source.name} */}
             {source}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              {/* {data.title} */}
              {title}
            </Heading>
            <Text color={'gray.500'}>
             {/* {data.description} */}
             {description}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Achim Rolle</Text>
              {/* <Text color={'gray.500'}>{data.publishedAt}</Text> */}
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  
}

export default FullNews