import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Dribble from './Pages/Dribble'
import UserProfile from './Pages/UserProfile'
import './App.css'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import PostInfo from './Pages/PostInfo'
import Navbar from './Components/Navbar'
import DribbblePostDetail from './Pages/DribblePostInfo'
import Chat from './Pages/Message'
import Auth from './Pages/Auth'
function App() {

  return (
    <>
      <BrowserRouter>

<Routes>
  <Route path='/explore' element={<Explore/>}/>
  <Route path='/profile' element={<UserProfile/>} />
  <Route path='/dribble' element={<Dribble/>} />
  <Route path='/' element={<Home/>} />
<Route  path = '/postinfo' element ={<PostInfo/>} />
<Route path="/dribble" element={<Dribble />} />
<Route path="/dribble/post" element={<DribbblePostDetail />} />
<Route path="/message" element={<Chat/>} />
<Route path="/auth" element={<Auth/>} />
  </Routes>
  </BrowserRouter>
   
    </>
  )
}

export default App
