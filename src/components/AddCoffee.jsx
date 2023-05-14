import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h3>Add Coffee</h3>
            <form>
                <div className='flex gap-5 w-50'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;