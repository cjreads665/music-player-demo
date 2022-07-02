import React, { useEffect, useState } from 'react'
import { released } from '../../api/api'
import axios from 'axios'
const Released = () => {
  const [list,setList] = useState(null)
  const fetchReleased = async()=>{
    try{
      const {data:{tracks}} = await axios.request(released)
      let list = tracks.map((obj: any)=>{
        console.log(obj);
        
        return <div key={obj.key} className='flex flex-col items-center'>
          <img src={obj.images.coverart} alt="" className='w-[60%] rounded-lg ' />
          <p>{obj.title}</p>
        </div>
        
      })
      setList(list)
      
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchReleased()

    
  },[])
  return (
    <section>
        <div className='flex flex-row'>
        <h6 className='text-xl'>Released </h6>
        <hr />
        </div>
      <div className=' h-[30rem] overflow-scroll flex flex-col items-center'>
{list}
      </div>
    </section>
  )
}

export default Released

function aync<T>() {
  throw new Error('Function not implemented.');
}
