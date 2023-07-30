import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import { GiSelfLove } from "react-icons/gi";



const Navber = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const menu = <>
        <Link className='ml-5 font-bold text-gray-600 '>Buy</Link>
        <Link className='ml-5 font-bold text-gray-600 '>Rent</Link>
        <Link className='ml-5 font-bold text-gray-600 '>Condos</Link>
        <Link className='ml-5 font-bold text-gray-600 '>New Projects</Link>
        <Link className='ml-5 font-bold text-gray-600 '>Commercial</Link>
        <Link className='ml-5 font-bold text-gray-600 '>Guides</Link>
        <Link className='ml-5 font-bold text-gray-600 '>Find Agent</Link>

        <li tabIndex={0}>
            <details>
                <summary className='ml-5 font-bold text-gray-600'>More</summary>
                <ul className="p-2 w-48">
                    <li className=''><Link>News</Link></li>
                    <li><Link>Home Loon Tools</Link></li>
                    <li><Link>AskGuru</Link></li>
                    <hr />
                    <li className='text-gray-400'><Link>For Agent</Link></li>
                    <li><Link>Agent Offerings</Link></li>
                    <li><Link>AgentNet</Link></li>
                </ul>
            </details>
        </li>

    </>



    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };




    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a className="lg:w-[165px] w-[124px]  lg:mr-0 mr-32 "><img src="https://www.agentofferings.ddproperty.com/wp-content/uploads/2022/11/DDProperty_Logo_Full_Colour_Horizontal_W_Endorsement.png" alt="" /></a>
                </div>
                <div className="navbar hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 z-10">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex gap-5 ">
                    <div className="relative border-none z-10">
                        <button
                            className="border-black border-2 px-2 py-2 rounded-lg text-base font-bold"
                            onClick={toggleDropdown}
                        >
                            <TfiMenuAlt></TfiMenuAlt>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-10 right-0 bg-white border border-white rounded-lg px-4 py-2 shadow-xl">
                                <Link className='flex items-center gap-2 font-bold text-gray-600 '><GiSelfLove></GiSelfLove>ShortList</Link>
                            </div>
                        )}
                    </div>
                    <button className="border-black border-2 px-5 py-1 rounded-lg text-base font-bold ">Login</button>

                </div>
            </div>
        </div>
    );
};

export default Navber;