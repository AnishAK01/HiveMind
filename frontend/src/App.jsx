import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Dribble from './Pages/Dribble'
import UserProfile from './Pages/UserProfile'
import './App.css'
import PintTab from './Pages/PintTab'
import PostInfo from './Pages/PostInfo'
import Navbar from './Components/Navbar'
import DribbblePostDetail from './Pages/DribblePostInfo'
import Chat from './Pages/Message'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Collab from './Pages/Collab'
import Loader from './Components/Loader'
import ScrollToTop from './Components/ScrolltoTop'
import ImageGallery from './Components/Filteredgallery'
function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }
  return (
    <>
      <BrowserRouter>
<ScrollToTop/>
<Routes>
  <Route path='/profile' element={<UserProfile/>} />
  <Route path='/collabs' element={<Collab/>} />
  <Route path='/' element={<Home/>} />
  <Route path='/dribble' element={<Dribble/>} />
  <Route path='/pinttab' element={<PintTab/>} />
<Route  path = '/postinfo' element ={<PostInfo/>} />
<Route path="/dribble" element={<Dribble />} />
<Route path="/dribble/post" element={<DribbblePostDetail />} />
<Route path="/message" element={<Chat/>} />
<Route path="/gallery" element={<ImageGallery />} />
<Route path="/auth" element={<Auth/>} />
  </Routes>
  </BrowserRouter>
   
    </>
  )
}

export default App
