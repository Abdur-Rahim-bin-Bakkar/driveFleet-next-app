import React from 'react';
import image from '@/assets/banner.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className=' py-15 p-5 grid md:grid-cols-2 gap-5 bg-[#36ADA330]'>
            <div className="space-y-3">
                <h1 className='text-3xl md:text-5xl'>Drive Your Dream Car with Confidence</h1>
                <p>Discover a seamless car booking experience where comfort meets affordability. Explore a wide range of premium and economy vehicles, compare options, and book your perfect ride in just a few clicks. Whether it's a daily commute or a long journey, we make every drive smooth, safe, and reliable.</p>

                <Link href={''}><Button className={'bg-[#36ADA3] border rounded-md hover:scale-101 hover:-translate-y-1 duration-700'}>Explore Cars button</Button></Link>
            </div>
            <div className="">
                <Image className='w-full hover:shadow-lg hover:scale-101 hover:-translate-y-2 duration-700' src={image} alt='banner image'/>
            </div>

        </div>
    );
};

export default Banner;