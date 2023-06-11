import React from 'react';
import CoverSEction from '../Components/CoverSection/CoverSEction';

import TitleSEction from '../Components/TitleSection/TitleSEction';
import useData from '../CustomHook/useData';
import SingleLineCard from '../Components/Card/SingleProductLine/SingleLineCard';

// image 
import img2 from '../assets/home/chef-service.jpg'
import FullLineCard from '../Components/Card/FullLineCard/FullLineCard';



const OurMenu = () => {

    const [data, loading] = useData()

    const populars = data.filter(popularRecepi => popularRecepi.category === 'popular')
    const desserts = data.filter(popularRecepi => popularRecepi.category === 'dessert')
    const pizzas = data.filter(popularRecepi => popularRecepi.category === 'pizza')
    const salads = data.filter(popularRecepi => popularRecepi.category === 'salad')
    const soups = data.filter(popularRecepi => popularRecepi.category === 'soup')

    return (
        <div>
            {/* <CoverSEction BgCoverPic={img1} title={'Our Menu'} description={'Would you like to try a dish?'}></CoverSEction>

            <TitleSEction subTitle={'---Dont miss---'} title={'TODAYs OFFER'}></TitleSEction>
            <div className='grid grid-cols-2 gap-5 container mx-auto '>
                {
                    item.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                }
                
            </div>
            <div className="card-actions flex  justify-center">
                    <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
                </div> */}

                <FullLineCard item={populars} title={"populars"}></FullLineCard>

            {/* 2 */}

            <div className='mt-28'>

                    <FullLineCard item={desserts}  title={"desserts"}></FullLineCard>

            </div>


            {/* 3 */}
            <div className='mt-28'>
                
            <FullLineCard item={pizzas} title={'pizzas'}></FullLineCard>

            </div>
            {/* 4 */}

            <div className='mt-28'>
            <FullLineCard item={salads} title={"salads"}></FullLineCard>
                

            </div>
            {/* 5 */}

            <div className='mt-28'>
            <FullLineCard item={soups} title={"soups"}></FullLineCard>
                

            </div>

        </div>
    );
};

export default OurMenu;



