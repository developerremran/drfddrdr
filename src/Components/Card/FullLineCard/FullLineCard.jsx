import React from 'react';
import CoverSEction from '../../CoverSection/CoverSEction';
import TitleSEction from '../../TitleSection/TitleSEction';
import SingleLineCard from '../SingleProductLine/SingleLineCard';


import img1 from '../../../assets/menu/banner3.jpg'
import { Link } from 'react-router-dom';


const FullLineCard = ({item, title}) => {
    return (
        <div>
            <CoverSEction BgCoverPic={img1} title={'Our Menu'} description={'Would you like to try a dish?'}></CoverSEction>

            <TitleSEction subTitle={'---Dont miss---'} title={'TODAYs OFFER'}></TitleSEction>
            <div className='grid grid-cols-2 gap-5 container mx-auto '>
                {
                    item.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
                }

            </div>
            <div className="card-actions flex  justify-center mt-10">
               <Link to={`/our-shop/${title}`}>
               <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">View all Menu</button>
               </Link>
            </div>
        </div>
    );
};

export default FullLineCard;

