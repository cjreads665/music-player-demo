import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { released } from '../api/api'

const Sections = (props:any) => {
    const {api} = props;
    console.log(api);
    
    const [list,setList] = useState(null)
  const fetchReleased = async()=>{
    try{
      const {data:{tracks}} = await axios.request(api)
      let list = tracks.map((obj: any)=>{
        console.log(obj);
        
        return <div key={obj.key}>
        <SwiperSlide>
          <div className='flex flex-col items-center'>
        <img src={obj.images.coverart} alt="" className='w-[90%] rounded-lg text-center' />
        <p className='text-xs font-bold'>{obj.title}</p>
        </div>
        </SwiperSlide>
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
    <section className='w-[100%] md:w-[90%] overflow-x-hidden'>
    <div className=' m-4 w-full '>
    <h4 className='uppercase mr-[10rem] relative tracking-[0.1rem] text-xs font-bold text-gray-300' >Released this week <hr className='absolute w-[100%] top-2.5 left-[12rem]' /></h4>
        
    </div>
       
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 9,
              },
            }}
          >
            {list}
          </Swiper>
    
        </section>
  )
}

export default Sections