import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../hoc/action'
// import { NavLink,Link } from 'react-router-dom'
import "./styled.modules.css";


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
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Outlook = ({title}) => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  // console.log(articles)
  // const handleLogout = () =>{
  //   alert("Logout Successfully")
  // }
  //  const [data,setData] =useState([])
  // function getData () {
  //   axios("https://newsapi.org/v2/top-headlines?country=in&apiKey=5b870d7f92444a90996f968c7d0e6c96&q=in")
  // }
  // useEffect(()=>{
  //  getData().then((res)=> console.log(res))
  // },[])
  return (
    <>
    {/* <button onClick={handleLogout}>Logout</button> */}
    {/* <Heading>OUTLOOK</Heading><br /> */}
    <div className='mainlook'>
      <div className='firstlook'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1661636180.webp" alt="" />
     <p>A game of cricket at Lal Maidan in Mumbai's Parel.     -Dinesh Parab/Outlook</p><br />
     <NavLink className={"navlink"} style={{fontSize:"45px", fontWeight:"Dark"}} to={`/`}>Mumbai’s Chawl Cricket, The Love Of Common People</NavLink><br />
     <p>More players from chawls can make it as pros but reasons such as getting satisfied with tennis ball prize money and not seeing sports as a career don't allow it, says tennis ball cricketer Parag Ambekar.</p>
     <div className='listtag'>
     <ul ><li>Here Is Why ‘Agniveers’ Recruitment In Central Armed Police Forces Would Be A Daunting Task</li><br />
     <li>Explained: The Agnipath Military Recruitment Policy, The Idea Behind It, What Critics Are Saying</li></ul></div>
     <hr />
     <div className='MainDiv'>
            <div className='child1'>
              <p className='head1'>From Fighting Modern AI Warfare To Providing Better Citizens: Top Defence Officials Bat For Agnipath And Agniveers</p>
            <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655538565.webp" alt="" />
            <p>The government has defended the radical scheme, saying it will give the armed forces an enhanced youthful profile i.e., a reduction in average age from 32 to 26 years, to be achieved over a period of time. </p>

            <br /><br />
            <h3>Agnipath: Maharashtra's 'Village Of Warriors' Serving The Army For Ages Support Recruitment Scheme</h3>
            </div>
            <div className='child2'>
              <p className='head1'>In Pics: Agnipath Protests Spread Across India</p>
              <div id='imagpara'>
              <p>Youths across the country have taken to the streets and are protesting against the new short-term recruitment scheme 'Agnipath' for entry in the armed forces. There have been violent protests in several places and irate youths have torched trains and damaged public property at various places.</p>
            <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655548553.webp" alt=""  width="250px" height="190px" className='imglef'/>
            </div>
            <div id='lastdiv'>
              <p id="head3">Agnipath Is A Hurried Decision, Say Northeast Defence Veterans</p>
              <br/>
              <br />
              
              <p id='head4'>Ranjit Borthakur, a retired Brigadier from Assam and former chairman of the Assam Public Service Commission, said that the scheme that seeks to induct 46,000 Agniveers into the armed forces, is a decision implemented in a hurry. </p>
            </div>
            </div>

     </div>
      </div>
      <div className='secondlook'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/free_files/jpg/300-120_2022_06_13_080305.jpg" alt="" />
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1654151729.webp" alt="" />
        <br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to={`/`}>From Naya Dawn To Daily Violence, Kashmir Post-August 5, 2019</NavLink><br />
        <p>Three years after the abrogation of Article 370, there is no elected government in Jammu and Kashmir and targeted killings have gained pace despite frequent encounters.</p>
      <br />
      <h6>NASEER GANAI/ last updated at 8:58 am</h6><br />
      <br />
      ADVERTISMENT
      <img src="https://imgnew.outlookindia.com/uploadimage/library/free_files/gif/300x25_2022_06_07_020134.gif" alt="" />
    <br />
    <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1650862677.webp" alt="" />
      <br />
      <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to={`/`}>An Ode to Ladakh: A Pristine And Beautiful Region In Transition</NavLink><br />
      <p>The hope is that Ladakh remains a region that while reaping the benefits of economic development and modernisation retains its essential character.</p>
      </div>
     
    </div>
<hr style={{width:"100%",color:"red",height:"4px"}}/>
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
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
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
               
            <Link className={"active"} to={`/fullnews/${title}/${source}/${description}`} >{title}</Link>
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

export default Outlook