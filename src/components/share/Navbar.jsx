'use client'
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname()
    return (
        <div className='flex justify-between px-3  items-center shadow py-1'>

            <Link href={'/'}>
                <Image src={logo} alt='logo' width={100} height={100} className='w-25 rounded-full hover:scale-110 duration-700 cursor-pointer'></Image>
            </Link>

            <div className='flex gap-6 '>
                <Link className={`${path === '/' && 'underline text-[#36ADA3]'}`} href={'/'}>Home</Link>
                <Link className={`${path === '/cars' && 'underline text-[#36ADA3]'}`} href={'/cars'}>Explore Cars</Link>
                <Link className={`${path === '/add-car' && 'underline text-[#36ADA3]'}`} href={'/add-car'}>Add Car</Link>
                <Link className={`${path === '/bookings' && 'underline text-[#36ADA3]'}`} href={'/bookings'}>My Bookings</Link>
            </div>

            <div className='flex gap-3'>
                <Link href={'/login'}>
                    <Button  className={'rounded-md'}>Login</Button>
                </Link>
                <Link href={'/reg'}>
                    <Button  className={'rounded-md bg-[#36ADA3]'}>Register</Button>
                </Link>
            </div>


        </div>
    );
};

export default Navbar;