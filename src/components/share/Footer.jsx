'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className='bg-black text-white mt-20 text-center md:text-start'>

            <div className='max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

                {/* Logo & Description */}
                <div>

                    <Image
                        src={logo}
                        alt='logo'
                        width={130}
                        height={130}
                        className='mb-4'
                    />

                    <p className='text-gray-400 leading-7'>
                        DriveFleet is a modern car rental platform where users can
                        explore, book, and manage premium cars easily and quickly.
                    </p>

                    {/* Social Icons */}


                </div>


                {/* Quick Links */}
                <div>

                    <h2 className='text-2xl font-bold mb-5'>
                        Quick Links
                    </h2>

                    <div className='flex flex-col gap-3 text-gray-400'>

                        <Link
                            href={'/'}
                            className='hover:text-[#36ADA3] duration-300'
                        >
                            Home
                        </Link>

                        <Link
                            href={'/cars'}
                            className='hover:text-[#36ADA3] duration-300'
                        >
                            Explore Cars
                        </Link>

                        <Link
                            href={'/add-car'}
                            className='hover:text-[#36ADA3] duration-300'
                        >
                            Add Car
                        </Link>

                        <Link
                            href={'/bookings'}
                            className='hover:text-[#36ADA3] duration-300'
                        >
                            My Bookings
                        </Link>

                    </div>

                </div>


                {/* Services */}
                <div>

                    <h2 className='text-2xl font-bold mb-5'>
                        Services
                    </h2>

                    <div className='flex flex-col gap-3 text-gray-400'>

                        <p>Luxury Car Rental</p>
                        <p>Business Travel</p>
                        <p>Airport Pickup</p>
                        <p>Long Drive Support</p>
                        <p>24/7 Customer Service</p>

                    </div>

                </div>


                {/* Contact */}
                <div>

                    <h2 className='text-2xl font-bold mb-5'>
                        Contact Info
                    </h2>

                    <div className='flex flex-col gap-3 text-gray-400'>

                        <p>📍 Dhaka, Bangladesh</p>
                        <p>📞 +8801873135444</p>
                        <p>📧 webdesignrahim4061@gmail.com</p>

                    </div>

                </div>

            </div>


            {/* Bottom Footer */}
            <div className='flex gap-4 mt-6 justify-center mb-5'>

                <Link
                    href={'https://facebook.com'}
                    target='_blank'
                    className='bg-[#36ADA3] p-3 rounded-full hover:scale-110 duration-300'
                >
                    <FaFacebookF />
                </Link>

               

                <Link
                    href={'https://linkedin.com'}
                    target='_blank'
                    className='bg-[#36ADA3] p-3 rounded-full hover:scale-110 duration-300'
                >
                    <FaLinkedinIn />
                </Link>

                <Link
                    href={'https://github.com'}
                    target='_blank'
                    className='bg-[#36ADA3] p-3 rounded-full hover:scale-110 duration-300'
                >
                    <FaGithub />
                </Link>

            </div>
            <div className='border-t border-gray-800 py-5 text-center text-gray-500 px-4'>

                <p>
                    © {new Date().getFullYear()} DriveFleet Rental Club. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
};

export default Footer;