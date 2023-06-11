import React from 'react';
import css from  './bisro.css'


const BistroInfo = ({img, title, pera}) => {
    return (
        <div>
             <div className='mt-36 '>
            <div className='bg-img py-36'>
                <div className="card md:w-[900px] sm:w-[500px] mx-auto bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className=" text-3xl">{title}</h2>
                        <p className='py-5'>{pera}</p>
                        <div className="card-actions">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BistroInfo;