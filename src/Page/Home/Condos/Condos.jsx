import React from 'react';
import { Link } from 'react-router-dom';

const Condos = () => {
    return (
        <div className='mt-10 '>
            <div className='lg:px-24 px-7'>
                <div className='lg:py-14 '>
                    <div className='flex  items-center justify-between mb-5'>
                        <div className='lg:flex items-center gap-2'>
                            <h1 className='text-2xl font-semibold lg:mt-0 mt-5'>Buy Condos Near BTS/MRT</h1>
                            <p className='text-xs bg-red-500 lg:py-1 lg:px-2 w-1/6 lg:w-10 text-center py-1 rounded-lg'>New</p>
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/Hyderabad-Metro.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">CONDOCard Image Condos Near BTS Silom Line</h2>
                                    <p>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/Hyderabad-Metro.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">CONDOCard Image Condos Near BTS Silom Line</h2>
                                    <p>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/Hyderabad-Metro.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">CONDOCard Image Condos Near BTS Silom Line</h2>
                                    <p>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/Hyderabad-Metro.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">CONDOCard Image Condos Near BTS Silom Line</h2>
                                    <p>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Condos;