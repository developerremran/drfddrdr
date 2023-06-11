import React from 'react';
import CoverSEction from '../Components/CoverSection/CoverSEction';


import bgimg from '../assets/shop/banner2.jpg'
import TabsRecepi from '../Tabs/TabsRecepi';
const OurShop = () => {
    return (
        <div >
            <CoverSEction BgCoverPic={bgimg} title={'OUR SHOP'} description={'Would you like to try a dish?'}></CoverSEction>


            <div className='container mx-auto mt-10 mb-10'>
                <TabsRecepi></TabsRecepi>
            </div>
        </div>
    );
};

export default OurShop;