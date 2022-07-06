import axios from 'axios'
import React, { useEffect, useState,useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation,Pagination } from 'swiper';
import { released } from '../api/api'
import "swiper/css";
import "swiper/css/navigation";


SwiperCore.use([Navigation,Pagination])

const Sections = (props:any) => {
    const {api} = props;
    
    const [list,setList] = useState(null)
  const fetchReleased = async()=>{
    try{
      const {data:{tracks}} = await axios.request(api)
      let list = tracks.map((obj: any)=>{
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
    <section className='w-[100%] md:w-[90%] overflow-x-hidden relative'>
    <div className=' m-4 w-full '>
    <h4 className='uppercase mr-[10rem] relative tracking-[0.1rem] text-xs font-bold text-gray-400' >{props.title} <hr className='absolute w-[100%] top-2 left-[12rem] border border-gray-300' /></h4>

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
            navigation
            pagination
          >
            {list}
          </Swiper>
        </section>
  )
}

export default Sections