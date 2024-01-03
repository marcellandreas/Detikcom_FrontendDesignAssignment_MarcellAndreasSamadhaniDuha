import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "./style.css";

const PhotoImageGallery = (props) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="slider images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-image-slider-thumbs-wrapper">
              <img src={item} alt="slider images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PhotoImageGallery;
