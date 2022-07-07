import { useState } from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import './App.css'
import Favourite from './components/Favourites/Favourite';
import Home from './components/Home/Home'
import Navbar from './components/Navbar';
import Playlist from './components/Playlist/Playlist';
import Search from './components/Search/Search';
function App() {
  const [open,setOpen] = useState<boolean>(false);
  const props = {
    open:open
  }
  return (
    <div className='flex min-h-screen w-full overflow-hidden'>
    <BrowserRouter>
    <i 
    onClick={()=>setOpen(!open)}
    className={`fa-solid fa-${open?'xmark':'bars'} absolute z-20 text-3xl top-2 left-4 md:hidden`}></i>
    <Navbar {...props} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favourites' element={<Favourite/>}/>
      <Route path='/playlist' element={<Playlist/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
