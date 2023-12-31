import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='lg:mb-44'>
            <div className=' flex justify-center p-5 search-field lg:rounded-lg z-10 lg:absolute lg:top-[450px] lg:w-[500px] lg:left-[450px]'>
                <div className="form-control">
                    <div className='flex flex-row justify-center mb-5 gap-5'>
                        <h1 className='text-center text-xl font-bold text-white'>Buy</h1>
                        <h1 className='text-center text-xl font-bold text-white'>Rent</h1>
                    </div>
                    <div className="input-group  ">
                        <input type="text" placeholder="Search Location" className="input input-bordered" />
                        <button className="btn btn-squarep-2 bg-red-500 text-white normal-case">
                            <h1>Search</h1>
                        </button>
                    </div>
                    <div className='mt-3' >
                        <ul className='menu menu-horizontal px-1 gap-5'>
                            <li className='text-center text-md font-bold text-white'>All Residential</li>
                            <li className='text-center text-md font-bold text-white'>Any Price</li>
                            <li className='text-center text-md font-bold text-white'>Bedroom</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img  src="https://www.pc-lux.com/images/banner/crop-1675659777597.jpg" alt="" />
        </div>
    );
};

export default Banner;