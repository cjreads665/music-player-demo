import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { featured } from '../../api/api'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Sections from '../Sections'
const Featured = () => {
 const props={
  api: featured,
  title: 'featured playlists'
 }
  return (
   <section className=''>
   <Sections {...props} />
   </section>
  )
}

export default Featured