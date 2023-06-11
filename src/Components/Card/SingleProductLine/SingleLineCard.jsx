/* eslint-disable react/prop-types */
import React from 'react';

const SingleLineCard = ({perProduct}) => {
    const { name, recipe, image, price } = perProduct;
    
    return (
        <div>
             <div className='flex space-x-5'>
                <img className='w-[100px]' style={{ borderRadius: '0px 200px 200px 200px' }} src={image} alt="" />
                <div>
                    <p className='font-semibold text-xl'>{name} ------------------</p>
                    <p className='text-sm'>{recipe}</p>
                </div>
                <p className='text-yellow-700'>${price}</p>
            </div>
        </div>
    );
};

export default SingleLineCard;