import React, { Children } from 'react'
import { useSelector } from 'react-redux'

const Favourite = () => {
  const play = useSelector((state:any)=>state.playlist.favs)
  return (
    <div>
    <h1 className='text-6xl m-6 font-black'>Your Favourite Songs ✨</h1>
  <div className='grid grid-cols-1 md:grid-cols-4'>
    {
    Children.toArray(play.map((obj: any)=>{
      return <div className="flex flex-col items-center relative">
              <button
                className="absolute top-0 right-0 bg-blue-600 p-1 px-2 rounded-md"
              >
                <span className="fa-solid fa fa-minus"></span>
              </button>
              <img
                src={obj.images.coverart}
                alt=""
                className="w-[50%] rounded-lg text-center"
              />
              <p className="text-xs font-bold">{obj.title}</p>   
      </div>
    }))}
  </div>

  </div>
  )
}

export default Favourite