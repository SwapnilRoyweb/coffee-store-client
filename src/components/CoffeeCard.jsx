import React from 'react';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl p-3 flex items-center justify-center">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-evenly w-full pr-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn btn-active">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;