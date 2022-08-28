
import React from 'react'
import Home from '../Pages/Home'
import Business from '../Pages/Business'
import Crypto_Corner from '../Pages/Crypto_Corner'
import Entertainment from '../Pages/Entertainment'
import Hindi from '../Pages/Hindi'
import Magzine from '../Pages/Magzine'
import Money from '../Pages/Money'
import Others from '../Pages/Others'
import Outlook from '../Pages/Outlook'
import Photo from '../Pages/Photo'
import Poshan from '../Pages/Poshan'
import Sports from '../Pages/Sports'
import Travel from "../Pages/Travel"
import Video from "../Pages/Video"
import FullNews from '../FullNews/FullNews'
import Login from '../login/Login'
import {Route, Routes} from 'react-router-dom'

const AllRoutes = () => {
  return (
   
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/business" element={<Business/>}/>
  <Route path="/crypto" element={<Crypto_Corner/>}/>
  <Route path="/entertainment" element={<Entertainment/>}/>
  <Route path="/hindi" element={<Hindi/>}/>
  <Route path="/magzine" element={<Magzine/>}/>
  <Route path="/money" element={<Money/>}/>
  <Route path="/others" element={<Others/>}/>
  <Route path="/outlook" element={<Outlook/>}/>
  <Route path="/photos" element={<Photo/>}/>
  <Route path="/poshan" element={<Poshan/>}/>
  <Route path="/sports" element={<Sports/>}/>
  <Route path="/travel" element={<Travel/>}/>
  <Route path="/videos" element={<Video/>}/>
  <Route  path="/fullnews/:title/:source/:description" element={<FullNews/>}/>
  {/* <Route  path="/fullnews/:title" element={<FullNews/>}/> */}
  <Route path='/login' element={<Login/>}/>

 </Routes>
  )
}

export default AllRoutes