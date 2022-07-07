import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { released,featured } from "../api/api";
import { useDispatch } from "react-redux";
import { addToPlaylist,addToFavs } from "../features/playlist";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination]);

const Sections = (props: any) => {
  const { api } = props;
  
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const fetchReleased = async () => {
    try {
      let track
      if(localStorage.getItem(props.title)==null){
        const {
          data: { tracks },
        } = await axios.request(api);
        track = tracks
        localStorage.setItem(props.title,JSON.stringify(track))
      }
      else{
        track = JSON.parse(localStorage.getItem(props.title) || '{}')
      }
      
      let listK = track.map((obj: any) => {
        return (
          <div key={obj.key}>
            <SwiperSlide>
              <div className="flex flex-col items-center relative">
                <button
                  className="absolute top-0 right-0 bg-blue-600 p-1 px-2 rounded-md"
                  onClick={() =>{
                    if(api==featured){
                      dispatch(addToPlaylist(obj))
                    }
                    else{
                      dispatch(addToFavs(obj))
                    }
                    if(localStorage.getItem(props.list)){
                      //if list exists
                 let prev = JSON.parse(localStorage.getItem(props.list) || '{}')
                 prev.push(obj)
                 localStorage.setItem(props.list,JSON.stringify(prev))
                 
                    }
                    else{
                      //if list does not exist
                      localStorage.setItem(props.list,JSON.stringify([obj]))
                    }
                  }}
                >
                  <span className="fa-solid fa fa-plus"></span>
                </button>
                <img
                  src={obj.images.coverart}
                  alt=""
                  className="w-[90%] rounded-lg text-center"
                />
                <p className="text-xs font-bold">{obj.title}</p>
              </div>
            </SwiperSlide>
          </div>
        );
      });
      setList(listK);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReleased();
  }, []);
  return (
    <section className="w-[100%] md:w-[90%] overflow-x-hidden relative">
      <div className=" m-4 w-full ">
        <h4 className="uppercase mr-[10rem] relative tracking-[0.1rem] text-xs font-bold text-gray-400">
          {props.title}{" "}
          <hr className="absolute w-[100%] top-2 left-[12rem] border border-gray-300" />
        </h4>
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
  );
};

export default Sections;
