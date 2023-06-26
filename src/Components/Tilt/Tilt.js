import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import tilt1 from '../../assets/images/found_trip/Tilt/1.svg'
import tilt2 from '../../assets/images/found_trip/Tilt/2.svg'
import tilt3 from '../../assets/images/found_trip/Tilt/3.svg'
import tilt4 from '../../assets/images/found_trip/Tilt/4.svg'
import tilt5 from '../../assets/images/found_trip/Tilt/5.svg'
import "./Tilt.css";
import { ReactSVG } from 'react-svg'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        initialSlide={4}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{position: 'relative'}} >
          <div className="show-button-hover">
            <ReactSVG src={tilt1}/>
            <span className="header-images-text">Enjoy beautiful sunset at famous beaches</span>
            <div class="overlay2"></div>
            <div class="button"><a href="#"> BUTTON </a></div>
          </div>
          {/* <img src= /> */}
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <ReactSVG src={tilt2} />
          <span className="header-images-text">Heart warming party at cruise</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <ReactSVG src={tilt3} />
          <span className="header-images-text">Explore the most tricky adventures</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <ReactSVG src={tilt4} />
          <span className="header-images-text">Give your eyes a break, enjoy greenary</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <ReactSVG src={tilt5} />
          <span className="header-images-text">Stay on lake house</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          <span className="header-images-text">Beautiful lands of europe</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          <span className="header-images-text">Enjoy beautiful sunset at famous beaches</span>
        </SwiperSlide>
        <SwiperSlide style={{position: 'relative'}}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          <span className="header-images-text">Enjoy beautiful sunset at famous beaches</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
