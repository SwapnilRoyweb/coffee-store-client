import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log('deleted');
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-yellow-200 text-black shadow-xl p-3 flex items-center justify-center">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-evenly w-full">
                <div className='flex flex-col justify-center'>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn btn-active">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button className="btn bg-red-500" onClick={() => handleDelete(_id)}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;