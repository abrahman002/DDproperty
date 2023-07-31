import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white " style={{ backgroundColor: '#2c2c2c' }} >
                <h1>Try our mobile apps</h1>
            </footer>
            <footer className="footer p-10  text-white border-t-2  border-b-2" style={{ backgroundColor: '#2c2c2c' }}>

                <div>

                    <a className="link link-hover">PROPERTYGURU GROUP</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Products</a>
                    <a className="link link-hover">Careers</a>
                </div>
                <div>

                    <a className="link link-hover">CONTACT US</a>
                    <a className="link link-hover">Newsroom</a>
                    <a className="link link-hover">Share Feedback</a>

                </div>

                <div>
                    <span className="footer-title">Search</span>
                    <div className="form-control w-80">
                        <div className="relative">
                            <input type="text" placeholder="PropertyGuru Search" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer lg:p-10 p-5 bg-black text-white " style={{ backgroundColor: '#2c2c2c' }}>
                <div className='grid lg:grid-cols-4 grid-cols-2 mx-auto lg:gap-14 '>
                    <Link>thinkofliving.com</Link>
                    <Link>thinkofliving.com</Link>
                    <Link>thinkofliving.com</Link>
                    <Link>thinkofliving.com</Link>

                </div>
            </footer>
            <footer className='footer project-body lg:px-14 pt-5 px-3 '>
                <div>
                    <p><Link className='text-red-500'>DDproperty.com</Link> is the leading Thailand Property website - the best place to start your real estate search whether you are an investor, buying for own use, or looking for a place to rent. In DDproperty, you can find thousands of properties for sale and rent with detailed information about each property, including maps and photos.</p>
                    <Link className='text-red-500'>View More</Link>
                </div>
            </footer>
            <footer className="footer   p-10 project-body text-base-content">
                <div>

                    <a className="link link-hover">DDproperty</a>
                    <a className="link link-hover">AskGuru</a>
                    <a className="link link-hover">Thailand Property News</a>
                    <a className="link link-hover">Property Resources</a>
                </div>
                <div>

                    <a className="link link-hover">Properties For Sale</a>
                    <a className="link link-hover">Condos for Sale</a>
                    <a className="link link-hover">Houses for Sale</a>
                    <a className="link link-hover">Townhouses For Sale</a>
                </div>
                <div>

                    <a className="link link-hover">Properties For Rent</a>
                    <a className="link link-hover">Condos for Rent</a>
                    <a className="link link-hover">Houses for Rent</a>
                    <a className="link link-hover">Townhouses For Rent</a>
                </div>
                <div>

                    <a className="link link-hover">Thailand New Homes</a>
                    <a className="link link-hover">New Property Launches</a>
                    <a className="link link-hover">New Condos</a>
                    <a className="link link-hover">New Houses</a>
                </div>

            </footer>
            <footer className="footer project-body px-10 pb-5  text-base-content">
                <div>

                    <a className="link link-hover">DDproperty</a>
                    <a className="link link-hover">AskGuru</a>
                    <a className="link link-hover">Thailand Property News</a>
                    <a className="link link-hover">Property Resources</a>
                </div>
                <div>

                    <a className="link link-hover">Properties For Sale</a>
                    <a className="link link-hover">Condos for Sale</a>
                    <a className="link link-hover">Houses for Sale</a>
                    <a className="link link-hover">Townhouses For Sale</a>
                </div>
                <div>

                    <a className="link link-hover">Properties For Rent</a>
                    <a className="link link-hover">Condos for Rent</a>
                    <a className="link link-hover">Houses for Rent</a>
                    <a className="link link-hover">Townhouses For Rent</a>
                </div>
                <div>

                    <a className="link link-hover">Thailand New Homes</a>
                    <a className="link link-hover">New Property Launches</a>
                    <a className="link link-hover">New Condos</a>
                    <a className="link link-hover">New Houses</a>
                </div>

            </footer>
            <footer className="footer px-10 py-4  bg-black text-base-content border-base-300">
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 text-xs text-white font-semibold'>
                    <Link>Acceptable Use Policy</Link>
                    <Link>Terms of Service</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms of Purchase</Link>
                </div>
                <p className='text-white '>© 2023 AllProperty Media Co. Ltd. All rights reserved</p>

            </footer>
        </div>
    );
};

export default Footer;