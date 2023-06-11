import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bgImg1 from '../../assets/home/01.jpg'
import bgImg2 from '../../assets/home/02.jpg'
import bgImg3 from '../../assets/home/03.png'
import bgImg4 from '../../assets/home/04.jpg'

const Banner = () => {
    return (
        <div >
           
             <Carousel className='w-full h-4/6'  axis='horizontal' showArrows={true} >
                <div>
                    <img src={bgImg1} />
                   
                </div>
                <div>
                    <img src={bgImg2} />
                
                </div>
                <div>
                    <img src={bgImg3} />
                   
                </div>
                <div>
                    <img src={bgImg4} />
                
                </div>
               
            </Carousel>
        </div>
    );
};

export default Banner;