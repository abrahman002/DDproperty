import React from 'react';
import { Link } from 'react-router-dom';


const MoreDetails = () => {

  

    return (
        <div className='lg:px-28 p-5'>
            {/* Show individual items on larger devices */}
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 text-center mt-20 mb-20 items-center'>
                {/* Individual Items */}
                <div className="more-details-item">
                    <img
                        className='w-20 mb-5 lg:ml-24 ml-10'
                        src='https://cdn.pgimgs.com/hive-ui/static/v0.1.3/images/most-properties-red.svg'
                        alt=''
                    />
                    <h1 className='lg:text-xl font-bold mb-2'>Most Properties</h1>
                    <p className='text-gray-600 lg:text-base text-sm'>
                        Either you are looking to <Link className='text-red-500'>Sell, Buy</Link> or Rent a Property, our listing database is the most comprehensive one that you can find in Thailand.
                    </p>
                </div>
                <div className="more-details-item">
                    <img
                        className='w-20 mb-5 lg:ml-24 ml-10'
                        src='https://cdn.pgimgs.com/hive-ui/static/v0.1.3/images/user-reviews-red.svg'
                        alt=''
                    />
                    <h1 className='lg:text-xl font-bold mb-2'>Most Condo Details</h1>
                    <p className='text-gray-600 lg:text-base text-sm'>
                        On our <Link className='text-red-500'>Condo Directory</Link>, you can find Thailand's most popular condominium projects and information.
                    </p>
                </div>
                <div className="more-details-item">
                    <img
                        className='w-20 mb-5 lg:ml-24 ml-10'
                        src='https://cdn.pgimgs.com/hive-ui/static/v0.1.3/images/latest-launches-red.svg'
                        alt=''
                    />
                    <h1 className='lg:text-xl font-bold mb-2'>Latest Launches</h1>
                    <p className='text-gray-600 lg:text-base text-sm'>
                        Interested in <Link className='text-red-500'>New Condo, House, or Project Launches</Link> in Thailand? We provide comprehensive detail and our own review on these new launches.
                    </p>
                </div>
                <div className="more-details-item">
                    <img
                        className='w-20 mb-5 lg:ml-24 ml-10'
                        src='https://cdn.pgimgs.com/hive-ui/static/v0.1.3/images/overseas-property-red.svg'
                        alt=''
                    />
                    <h1 className='lg:text-xl font-bold mb-2'>Overseas Property</h1>
                    <p className='text-gray-600 lg:text-base text-sm'>
                        Looking to <Link className='text-red-500'>Purchase or Invest on Overseas Property</Link>? On our overseas property section, we cover listings from around the world including the US and UK.
                    </p>
                </div>
            </div>

            {/* Show the slider on small devices */}
        </div>
    );
};

export default MoreDetails;
