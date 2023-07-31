import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";


const AskGuru = () => {
    return (
        <div className='project-body lg:w-1/2  lg:p-7  lg:ml-28 lg:m-0 m-10 pb-5'>
            <div className=' text-center lg:w-[350px] w-[250px]  mx-auto'>

                <img className='lg:ml-24 ml-10' src="https://cdn.pgimgs.com/hive-ui/static/v0.1.23/images/ask-guru.svg" alt="" />
                <h1 className='text-xl font-semibold mb-2 ' >AskGuru</h1>

                <p className='lg:text-sm text-xs '>Make confident property decisions with advice <br /> from our PropertyGuru community of experts</p>
                <button className='btn btn-neutral btn-sm  text-white mr-5 mt-5 normal-case'>Ask a Question</button>
                <button className='btn  btn-sm btn-outline btn-primar normal-case mb-5 mt-2'>Browse Questions</button>
                <p className='text-md font-semibold'>Trending Categories</p>
                <div className='lg:grid grid-cols-3  mt-2 font-bold  '>
                    <Link className=' flex items-center text-xs lg:mb-0 mb-1  text-red-500'>Home buying <AiOutlineRight className=' text-xs'></AiOutlineRight></Link>
                    <Link className=' flex items-center text-xs lg:mb-0 mb-1  text-red-500'>Condo Questions <AiOutlineRight className='text-xs '></AiOutlineRight></Link>
                    <Link className=' flex items-center text-xs lg:mb-0 mb-1 text-red-500'>General Questions<AiOutlineRight className='text-xs '></AiOutlineRight></Link>
                    <Link className=' flex items-center  text-xs text-red-500 lg:mt-2'>Home Selling <AiOutlineRight className='text-xs '></AiOutlineRight></Link>


                </div>
            </div>
        </div>
    );
};

export default AskGuru;