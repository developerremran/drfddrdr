import React from 'react';

const TabsCard = ({item}) => {

    const { name, image, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="text-[#BB8506] btn  border-b-4 border-x-0 border-t-0 border-[#BB8506] ">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabsCard;