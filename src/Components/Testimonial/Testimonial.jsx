
import TitleSEction from '../TitleSection/TitleSEction';

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
 

// import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaRegArrowAltCircleDown } from 'react-icons/fa';


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTestimonials(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <TitleSEction subTitle={'---What Our Clients Say---'} title={'TESTIMONIALS'}></TitleSEction>

            <section className='mt-10 text-center'>
                <Swiper
                    pagination={{
                        // type: "progressbar",
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id} testimonial={testimonial}>
                            <div className='text-center w-2/3 mx-auto'>
                                <div className='text-center '>
                                <div className='flex justify-center'>
                             
                                </div>
                                <span className='text-3xl flex justify-center py-4 '><FaRegArrowAltCircleDown /></span>
                                    
                                    <p className='py-5'>{testimonial.details}</p>
                                    <h2 className='text-2xl text-yellow-700'>{testimonial.name}</h2>

                                </div>
                            </div>
                        </SwiperSlide>)
                    }


                </Swiper>
            </section>

        </div>
    );
};

export default Testimonial;