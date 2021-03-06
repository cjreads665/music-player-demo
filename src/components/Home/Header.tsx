import React from 'react'
import manmusic from '../../images/man-music.svg'

const Header = () => {
  return (
    <section className='bg-[#e092b7] h-[12rem] overflow-hidden w-full md:w-[90%] flex justify-between'>
    <div>
    <img src={manmusic} alt="man-listening-to-music" className='w-[100%]' />
    </div>
    <div className='text-right p-2 mx-[20%] mt-6'>
    <h1 className='font-black text-white leading-tight text-5xl'>Your favourite tunes</h1>
    <h2 className='font-black text-white leading-tight text-2xl'>All
     <i className="fa-solid fa-sun text-yellow-500 ml-2"></i> and all <i className="fa-solid fa-moon text-black "></i></h2>
    </div>
  </section>
  )
}

export default Header