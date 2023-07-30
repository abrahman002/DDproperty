import React from 'react';

const HomeBegin = () => {
    return (
        <div className='lg:grid grid-cols-2 gap-4 lg:px-24 px-7 mt-10'>
            {/*  We'll See You Home*/}
            <div className=''>
                <h1 className='text-2xl font-semibold mb-3'>We'll See You Home</h1>
                <div className='bg-red-500 p-10'>
                    <h1 className='text-white text-2xl'>Buy, sell, rent with confidence & <br /> the right agents</h1>
                    <button className='btn  text-red-500 mt-3 normal-case'>Verified Agent</button>
                </div>
                <div className='lg:grid grid-cols-2  gap-4 mt-5'>
                    <div className='p-7 bg-gray-600'>
                        <h1 className='text-2xl text-white '>Check out hot deals from TH’s leading property developers</h1>
                        <button className='btn  btn-error text-white mt-3 normal-case'>EasyOwn</button>
                    </div>
                    <div className='p-7 bg-red-300 mt-5'>
                        <h1 className='text-2xl text-black '>Thailand Property Market Outlook 2023</h1>
                        <button className='btn  btn-error text-white mt-3 normal-case'>Read More</button>
                    </div>
                </div>
            </div>
            {/* DDproperty EasyOwn */}
            <div className=''>
                <h1 className='text-2xl font-semibold mb-3 mt-5 lg:mt-0'>DDproperty EasyOwn</h1>
                <div className="hero lg:h-[456px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-error">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBegin;