import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'okay'
                    })
                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] p-24'>
            <h1 className='text-4xl font-extrabold text-black mb-3'>Add Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name='supplier' placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <label className="input-group">
                            <span>Taste</span>
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Category</span>
                        </label>
                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" name='category' placeholder="Category Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group">
                            <span>Details</span>
                            <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-black">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <span>Photo_URL</span>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className="btn btn-block mt-5 bg-[#D2B48C] text-black hover:bg-yellow-100" value='Add Coffee' />
            </form>
        </div>
    );
};

export default AddCoffee;