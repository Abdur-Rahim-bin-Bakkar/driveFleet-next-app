import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

const CarCard = ({ car }) => {
    // console.log(car.imageURL)
    return (
        <Card className='relative shadow hover:shadow-2xl hover:scale-103 hover:-translate-y-2 duration-500 p-0'>
            <Image src={`${car?.imageURL}?auto=format&fit=crop&w=800&q=80`} alt='car image' width={500} height={400} className='w-full h-110 md:h-60 object-center rounded-t-2xl' />
            <Chip className='w-20 flex justify-center items-center  absolute top-7 left-7 border'>{car?.availabilityStatus}</Chip>

            <div className="p-5 space-y-4 ">

                <h1 className="font-bold text-xl text-gray-900 tracking-tight">
                    {car?.carName}
                </h1>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {car?.description}
                </p>

                <div className="space-y-2 text-sm text-gray-500">

                    <span className="flex items-center gap-3">
                        <CiLocationArrow1 className="text-[#36ADA3] text-lg" />
                        {car?.pickupLocation}
                    </span>

                    <span className="flex items-center gap-3">
                        <FiUsers className="text-[#36ADA3] text-lg" />
                        {car?.seatCapacity} Seat Capacity
                    </span>

                </div>

                <Link href={`/cars/${car?._id}`}>
                    <Button className="w-full bg-gradient-to-r from-[#36ADA3] to-[#2f8f86] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                        View Details
                    </Button>
                </Link>

            </div>
        </Card>
    );
};

export default CarCard;