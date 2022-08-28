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
const Travel = () => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <>
    <Heading>TRAVEL</Heading><br />
    <div className='mainbusiness'>
      <div className='firstbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655284127.webp" alt="" />
        <NavLink className={"navlink"} style={{fontSize:"35px", fontWeight:"light"}} to="/fullnews">Bali Offers 5-Year Digital Nomad Visas For Remote Workers With A Passion For Travel</NavLink><br />
        
        <p>Travellers can not only work remotely but they can also stay on the island for half a decade, without paying any taxes

15 June 2022</p>
        </div>
      <div className='secbusiness'>
<img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1655279045.webp" alt="" />        
<NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Singapore Airlines Launches Two New Flagship Lounges</NavLink><br />
        <p>The project was announced in 2019 and received a 36 million (Rs. 2,80,94,05,800) upgrade </p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Raiganj Wildlife Sanctuary: Weekending With Birds</NavLink>
        <p>Forex traders said lacklustre domestic markets, elevated crude oil prices and persistent foreign capital outflows weighed on the local unit.</p>
      </div>
      <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1655218680.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">UK Witnesses World’s Biggest Four-Day Work Week Pilot</NavLink><br />
        <p>The researchers will oversee and observe the productivity and health of the worker, environmental impact and gender norms</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Thailand Aims At Removing Covid-19 Related Travel Ban And To Restore Visa-On-Arrival For International Travellers</NavLink>
        <p>Goyal said that it is possible to find the solution as there are well-established and proven mechanisms available and documents are on the table which can be...</p>
      </div>
    </div>
    <hr />

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
export default Travel