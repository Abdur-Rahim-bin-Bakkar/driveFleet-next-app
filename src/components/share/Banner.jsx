import React from 'react';
import image from '@/assets/banner.png'
import Link from 'next/link';
import { Button } from '@heroui/react';
import { FaInternetExplorer } from 'react-icons/fa';

const Banner = () => {
    return (
        <div
            className='
                py-20 px-5 md:px-10
                bg-cover bg-center bg-no-repeat
                relative
            '
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image.src})`
            }}
        >
            <div className="max-w-3xl space-y-5 text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Drive Your Dream Car with Confidence
                </h1>

                <p className='text-sm md:text-lg text-gray-200'>
                    Discover a seamless car booking experience where comfort meets affordability.
                    Explore a wide range of premium and economy vehicles, compare options,
                    and book your perfect ride in just a few clicks. Whether it's a daily
                    commute or a long journey, we make every drive smooth, safe, and reliable.
                </p>

                <Link href="/cars">
                    <Button className='bg-[#36ADA3] text-white rounded-md hover:scale-105 hover:-translate-y-1 duration-700'>
                        <FaInternetExplorer />
                        Explore Cars
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;