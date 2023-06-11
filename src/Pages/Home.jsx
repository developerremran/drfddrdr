import React from 'react';
import Banner from '../Components/Banner/Banner';
import TitleSEction from '../Components/TitleSection/TitleSEction';
import HomeSlide from '../Components/HomeSlide/HomeSlide';
import BistroInfo from '../Components/BistroInfoBox/BistroInfo';
import SingleProductLine from '../Components/Card/SingleProductLine/SingleProductLine';
import Action from '../Components/Action]/Action';
import CheifRecomendedSection from '../Components/CheifRecomendedSection/CheifRecomendedSection';
import FetureSection from '../Components/FetureSection/FetureSection';
import Testimonial from '../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div >
            <Banner></Banner>


            <div className='container mx-auto'>

           

            <TitleSEction title={'Order Online'} subTitle={'---From 11:00am to 10:00pm---'}></TitleSEction>
            <div className='mt-10 mb-28'>
                <HomeSlide></HomeSlide>
            </div>
            <BistroInfo title={'Bistro Boss'} pera={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}></BistroInfo>

            <>
                <TitleSEction subTitle={'---Check it out---'} title={'FROM OUR MENU'}>

                </TitleSEction>
            </>
            <div className='mb-16'>
                <SingleProductLine></SingleProductLine>

            </div>
            <Action></Action>
            <CheifRecomendedSection></CheifRecomendedSection>
            <FetureSection></FetureSection>

            
            <div>
                <Testimonial></Testimonial>
            </div>










            </div> 

        </div>
    );
};

export default Home;