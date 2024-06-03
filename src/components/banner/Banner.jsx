import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.scss";
import banner from "../../assets/image/banner.png";
const Banner = () => {
  return (
    <div className="container">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="sviper__slide">
          <div className="sviper-card">
            {/* <h2 className="sviper__title">
              Fresh Vegetables Big discount
            </h2> */}
            {/* <p className="sviper__text">
              Save up to 50% off on your first order
            </p> */}
            <div className="sviper__input">
              {/* <img src={banner} alt="" /> */}
              {/* <input type="text" placeholder="Your emaill address" /> */}
              {/* <button>Subscribe</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sviper__slide"></SwiperSlide>
        <SwiperSlide className="sviper__slide"></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
