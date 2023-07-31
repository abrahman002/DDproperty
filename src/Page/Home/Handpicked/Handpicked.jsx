import React from 'react';
import { Link } from 'react-router-dom';
import './handpicked.css';
import { BiBed, BiBath } from "react-icons/bi";

const Handpicked = () => {
    return (
        <div className='mt-10 project-body'>
            <div className='lg:px-24 px-7'>
                <div className='lg:py-14  pb-10'> 
                    {/* Section title */}
                    <h1 className='text-2xl font-semibold lg:mt-0 mt-5 mb-5'>Handpicked For You</h1>
                       {/* Card */}
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                        <div className="card card-compact lg:w-64 shadow-xl card-hover ">
                            <Link>
                                <figure><img className='rounded' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                                <div className=" card-body">
                                    <p>B19,999,999</p>
                                    <p className='flex items-center gap-2 text-lg'>4 <BiBed></BiBed>4<BiBath></BiBath></p>
                                    <h2 className="card-title text-xs">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                    <p>Phra Samut Chedi, Samut Prakan</p>
                                </div>
                                <button className='ml-2 border-2 p-1 rounded-md mb-2 text-xs border-sky-200 text-sky-400 font-semibold'>Detached House</button>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64 shadow-xl card-hover ">
                            <Link>
                                <figure><img className='rounded' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                                <div className=" card-body">
                                    <p>B19,999,999</p>
                                    <p className='flex items-center gap-2 text-lg'>4 <BiBed></BiBed>4<BiBath></BiBath></p>
                                    <h2 className="card-title text-xs">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                    <p>Phra Samut Chedi, Samut Prakan</p>
                                </div>
                                <button className='ml-2 border-2 p-1 rounded-md mb-2 text-xs border-sky-200 text-sky-400 font-semibold'>Detached House</button>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64 shadow-xl card-hover ">
                            <Link>
                                <figure><img className='rounded' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                                <div className=" card-body">
                                    <p>B19,999,999</p>
                                    <p className='flex items-center gap-2 text-lg'>4 <BiBed></BiBed>4<BiBath></BiBath></p>
                                    <h2 className="card-title text-xs">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                    <p>Phra Samut Chedi, Samut Prakan</p>
                                </div>
                                <button className='ml-2 border-2 p-1 rounded-md mb-2 text-xs border-sky-200 text-sky-400 font-semibold'>Detached House</button>
                            </Link>
                        </div>
                        <div className="card card-compact lg:w-64 shadow-xl card-hover ">
                            <Link>
                                <figure><img className='rounded' src="https://th1-cdn.pgimgs.com/project-listing-project/10835725/PLPHO.115699893.V800/Supalai-ParkVille-Prachauthit-suksawat-%E0%B8%A8%E0%B8%B8%E0%B8%A0%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2-%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%8C-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%B4%E0%B8%A8-%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B4%E0%B9%8C-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%97%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C-Thailand.jpg" alt="" /></figure>
                                <div className=" card-body">
                                    <p>B19,999,999</p>
                                    <p className='flex items-center gap-2 text-lg'>4 <BiBed></BiBed>4<BiBath></BiBath></p>
                                    <h2 className="card-title text-xs">NEW PROJECTCard Image Supalai ParkVille Prachauthit-suksawat:</h2>
                                    <p>Phra Samut Chedi, Samut Prakan</p>
                                </div>
                                <button className='ml-2 border-2 p-1 rounded-md mb-2 text-xs border-sky-200 text-sky-400 font-semibold'>Detached House</button>
                            </Link>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Handpicked;