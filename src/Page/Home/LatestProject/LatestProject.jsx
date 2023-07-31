import React from 'react';
import './project.css'
import { Link } from 'react-router-dom';
import { AiOutlineRight } from "react-icons/ai";


const LatestProject = () => {
    return (
        <div className='mt-10 project-body'>
            <div className='lg:px-24 px-7'>
                <div className='lg:py-14 '>
                    <div className='flex  items-center justify-between mb-5'>
                        <h1 className='text-2xl font-semibold lg:mt-0 mt-5'>latest project</h1>
                        <Link className='lg:flex items-center gap-1 hidden text-red-500 font-medium'>more details <AiOutlineRight className='text-xs'></AiOutlineRight></Link>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <figure><img className='' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                            <div className="mt-3">
                                <h2 className="card-title text-sm">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                <p>Phra Samut Chedi, Samut Prakan</p>
                            </div>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <figure><img className='' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                            <div className="mt-3">
                                <h2 className="card-title text-sm">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                <p>Phra Samut Chedi, Samut Prakan</p>
                            </div>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <figure><img className='' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                            <div className="mt-3">
                                <h2 className="card-title text-sm">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                <p>Phra Samut Chedi, Samut Prakan</p>
                            </div>
                        </div>
                        <div className="card card-compact lg:w-64   rounded-none">
                            <figure><img className='' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                            <div className="mt-3">
                                <h2 className="card-title text-sm">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                <p>Phra Samut Chedi, Samut Prakan</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* More Button Small Device */}
                <button className='lg:hidden btn  mt-5 ml-20 text-white  bg-gray-500'>more details</button>
            </div>
        </div>
    );
};

export default LatestProject;