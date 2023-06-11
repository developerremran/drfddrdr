import React from 'react';
import useData from '../../../CustomHook/useData';
import SingleLineCard from './SingleLineCard';

const SingleProductLine = () => {
    const [data, loading] = useData()

    const product = data.filter(singleData => singleData.category === 'popular')
    console.log(product);

    return (
        <div className='grid grid-cols-2 gap-10 w-[900px] mx-auto '>
           {
            product.map(perProduct => <SingleLineCard key={perProduct._id} perProduct={perProduct}></SingleLineCard>)
           }
        </div>
    );
};

export default SingleProductLine;