

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
const Video = ({title,source,description}) => {
  const articles=useSelector((store)=>store.magzineData.articles)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(articles?.length===0){
    dispatch(fetchData())
  }
  },[articles?.length,dispatch])
  return (
    <>
    <Heading>VIDEOS</Heading><br />
    <div className='mainbusiness'>
      <div className='firstbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655268182.webp" alt="" />
      
        <p>"Champions are not born; they prove on the field that they can stake a claim to that title." Outlook Business presents the #Movers&ShakersOfIndianBusiness, to laud some of the best achievers and path-breakers in the country.</p>
        </div>
      <div className='secbusiness'>
<img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1655116278.webp" alt="" />        
<NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to={`/`}>No Matter What, We Will Play Aggressive Cricket Till T20 World Cup: Shreyas Iyer</NavLink><br />
        <p>South Africa beat India by four wickets with almost two overs to spare in their second Twenty20 international in Cuttack on Sunday. The Proteas took a 2-0 lead...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Goa: Past, Present and Future</NavLink>
        <p>How a state known for its idyllic lifestyle and bestowed with Nature’s bounty turned into a metaphor for all that’s wrong with unplanned growth. Find...</p>
      </div>
      <div className='thirdbusiness'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1654949497.webp" alt="" /><br />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/">Art Has Its Reasons</NavLink><br />
        <p>Goa-based artist Miriam Koshy speaks about the gradual loss of green cover in the coastal state and her community project Aamche Mangrove, featured on the...</p><br /><hr />
        <NavLink className={"navlink"} style={{fontSize:"26px", fontWeight:"light"}} to="/fullnews">David Miller Too Good, Never Thought India Would Lose After Scoring 200 Runs: Ishan Kishan</NavLink>
        <p>David Miller smashed 64 not out off 31 balls to lead South Africa to a seven-wicket win over India in the first Twenty20 in Delhi on Thursday. Rassie van der...</p>
      </div>
    </div>
    <hr />
    <div className='advertisment'><img className='advertismentimg' src="https://tpc.googlesyndication.com/simgad/12297990069957152181" alt="" /></div>
   
    <Box>
<Stack display={{md:"flex"}} flexDirection={{md:"row"}} p= "0rem 2rem">
<Box>
             
             <Flex flexWrap="wrap" justifyContent="space-around">
                  {articles?.map(article=>{
                       return (<BlogPostWithImage key={article.id} image={article.urlToImage} 
                        title={article.title} description={article.description} publishedAt={article.publishedAt} source={article.source.name}/>
                     
                        )
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
             {/* <NavLink className={"active"} to={`/fullnews/${title}`}>{title}</NavLink> */}
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
export default Video