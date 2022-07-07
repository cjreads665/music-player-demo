import React, { useEffect, useState } from 'react'
import { released } from '../../api/api'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Sections from '../Sections';
const Released = () => {
  const props={
    api: released,
    title: 'RELEASED THIS WEEK',
    list : 'released'
   }
  return (
    <section className=''>
<Sections {...props} />
    </section>
  )
}

export default Released
