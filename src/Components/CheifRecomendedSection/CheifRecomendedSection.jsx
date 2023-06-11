import React from 'react';
import TitleSEction from '../TitleSection/TitleSEction';
import useData from '../../CustomHook/useData';
import SaladChefCard from '../Card/SaladRecomdedCard/SaladChefCard';

const CheifRecomendedSection = () => {

    const [data, loading] = useData();
    const saladRecepi = data.filter(salad => salad.category === 'salad')

    return (
        <div>
            <TitleSEction subTitle={'---Should Try---'} title={'CHEF RECOMMENDS'}></TitleSEction>

            <div className='grid grid-cols-3 gap-5'>
                {
                    saladRecepi.slice(0,3).map(singleSalad => <SaladChefCard key={singleSalad._id} singleSalad={singleSalad}></SaladChefCard>)
                }
            </div>

        </div>
    );
};

export default CheifRecomendedSection;