
'use client'

import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {

    const path = usePathname();
    const [open, setOpen] = useState(false);

    const links = <>
        <Link
            onClick={() => setOpen(false)}
            className={`${path === '/' ? 'text-[#36ADA3] underline' : ''} hover:text-[#36ADA3] duration-300`}
            href={'/'}>
            Home
        </Link>

        <Link
            onClick={() => setOpen(false)}
            className={`${path === '/cars' ? 'text-[#36ADA3] underline' : ''} hover:text-[#36ADA3] duration-300`}
            href={'/cars'}>
            Explore Cars
        </Link>

        <Link
            onClick={() => setOpen(false)}
            className={`${path === '/add-car' ? 'text-[#36ADA3] underline' : ''} hover:text-[#36ADA3] duration-300`}
            href={'/add-car'}>
            Add Car
        </Link>

        <Link
            onClick={() => setOpen(false)}
            className={`${path === '/bookings' ? 'text-[#36ADA3] underline' : ''} hover:text-[#36ADA3] duration-300`}
            href={'/bookings'}>
            My Bookings
        </Link>
    </>

    return (
        <nav className='sticky top-0 z-50 bg-white shadow-md'>

            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>

                {/* Logo */}
                <Link href={'/'}>
                    <Image
                        src={logo}
                        alt='logo'
                        width={120}
                        height={120}
                        className='w-28 md:w-32 cursor-pointer hover:scale-105 duration-500 rounded-full'
                    />
                </Link>


                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-7 font-medium'>
                    {links}
                </div>


                {/* Desktop Buttons */}
                <div className='hidden md:flex items-center gap-3'>
                    <Link href={'/login'}>
                        <Button className='rounded-md  '>
                            Login
                        </Button>
                    </Link>

                    <Link href={'/reg'}>
                        <Button className='rounded-md bg-[#36ADA3] text-white'>
                            Register
                        </Button>
                    </Link>
                </div>


                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    {
                        open ?
                            <RxCross2
                                onClick={() => setOpen(false)}
                                className='text-3xl cursor-pointer'
                            />
                            :
                            <GiHamburgerMenu
                                onClick={() => setOpen(true)}
                                className='text-3xl cursor-pointer'
                            />
                    }
                </div>

            </div>


            {/* Mobile Menu */}
            <div className={`
                md:hidden
                overflow-hidden
                duration-500
                ${open ? 'max-h-[500px] py-5' : 'max-h-0'}
                bg-white
                px-4
            `}>

                <div className='flex flex-col gap-5 font-medium'>
                    {links}
                </div>


                <div className='flex flex-col gap-3 mt-6'>
                    <Link href={'/login'}>
                        <Button className='w-full rounded-md '>
                            Login
                        </Button>
                    </Link>

                    <Link href={'/reg'}>
                        <Button className='w-full rounded-md bg-[#36ADA3] text-white'>
                            Register
                        </Button>
                    </Link>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;
