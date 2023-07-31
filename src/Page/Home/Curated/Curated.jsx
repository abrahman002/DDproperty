import React from 'react';
import { Link } from 'react-router-dom';

const Curated = () => {
    return (
        <div className='mt-10 '>
            <div className='lg:px-24 px-7'>
                <div className='lg:py-14 '>
                    <div className='flex  items-center justify-between mb-5'>

                        <h1 className='text-2xl font-semibold lg:mt-0 mt-5'>Curated Collections</h1>


                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://i1.wp.com/phuket.thai-sale.com/wp-content/uploads/2015/06/pic24.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">Affordable condo in Thailand</h2>
                                    <p className='text-gray-400'>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://i1.wp.com/phuket.thai-sale.com/wp-content/uploads/2015/06/pic24.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">Affordable condo in Thailand</h2>
                                    <p className='text-gray-400'>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://i1.wp.com/phuket.thai-sale.com/wp-content/uploads/2015/06/pic24.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">Affordable condo in Thailand</h2>
                                    <p className='text-gray-400'>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <Link>
                                <figure><img className='' src="https://i1.wp.com/phuket.thai-sale.com/wp-content/uploads/2015/06/pic24.jpg" alt="" /></figure>
                                <div className="mt-3">
                                    <h2 className="card-title text-sm">Affordable condo in Thailand</h2>
                                    <p className='text-gray-400'>5547 listings</p>
                                </div>
                            </Link>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Curated;