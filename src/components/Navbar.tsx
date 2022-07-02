import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props:any) => {
    const {open} = props
  return (
    <nav className={`float-left ${open? 'block absolute' : 'hidden'} md:w-[30%]  md:block w-[50%] transition-all bg-[#323fd1] h-[100vh]`}>
    <ul className='h-[50%] flex flex-col justify-evenly items-center mt-[49%] text-white'>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/search">Search</Link>
             </li>
             <li>
               <Link to="/favourites">Favourites</Link>
             </li>
             <li>
               <Link to="/playlist">Playlist</Link>
             </li>
           </ul>
    </nav>
  )
}

export default Navbar