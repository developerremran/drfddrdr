import React from 'react';

const TitleSEction = ({title, subTitle}) => {
    return (
        <div className='text-center uppercase my-16'>
            <p className=' font-semibold text-[#D99904]'>{subTitle}</p>
            <hr className='w-[300px] mx-auto my-2 h-1 bg-gray'></hr>
            <p className='text-2xl font-semibold'>{title}</p>
            <hr className='w-[300px] mx-auto my-2 h-1 bg-gray'></hr>

        </div>
    );
};

export default TitleSEction;