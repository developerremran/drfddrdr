import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";



// / Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import slideImg1 from '../../assets/home/slide1.jpg'
import slideImg2 from '../../assets/home/slide2.jpg'
import slideImg3 from '../../assets/home/slide3.jpg'
import slideImg4 from '../../assets/home/slide4.jpg'
import slideImg5 from '../../assets/home/slide5.jpg'

const HomeSlide = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
              
                modules={[FreeMode]}
                className="mySwiper text-center"
         >
                <SwiperSlide><img src={slideImg1} alt="" />
                <p className='-mt-12 text-2xl font-bold'>Salad</p>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg2} alt="" />
                 <p className='-mt-12 text-2xl font-bold'>Soup</p>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg3} alt="" />
                 <p className='-mt-12 text-2xl font-bold'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg4} alt="" />
                 <p className='-mt-12 text-2xl font-bold'>Desert</p>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg5} alt="" />
                 <p className='-mt-12 text-2xl font-bold'>Drink</p>
                </SwiperSlide>
                <SwiperSlide><img src={slideImg2} alt="" />
                 <p className='-mt-12 text-2xl font-bold'>Popular</p>
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default HomeSlide;