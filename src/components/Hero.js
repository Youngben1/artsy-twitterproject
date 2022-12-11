import React from "react";

// import Swiper core and required modules
import { Navigation, EffectFade, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import glassesdude from "../assets/glassesdude.jpg";
import flowerhand from "../assets/flowerhand.jpg";
import weirdlady from "../assets/weirdlady.jpg";
import kangaroo from "../assets/kangaroo.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Hero() {
  return (
    <div className="items-center place-items-center text-center">
      <div className=" max-w-[70%] m-auto py-1">
        <h1 className="text-6xl font-bold my-3">Photography is poetry and</h1>
        <h2 className="text-6xl font-bold my-7">beautiful untold stories</h2>

        <p className="font-base max-w-[45%] m-auto py-1 my-10">
          Flip through more than 10,000 vintage shots, old photographs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>

        <div className="max-w-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            speed={100}
            loop
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img className="w-30" src={glassesdude} alt="glasses" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={flowerhand} alt="flower" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={weirdlady} alt="lady" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={kangaroo} alt="animal" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
