import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';

const CarCard = ({ car }) => {
    console.log(car.imageURL)
    return (
        <Card className='relative shadow hover:shadow-2xl hover:scale-103 hover:-translate-y-2 duration-500'>
            <Image src={`${car?.imageURL}?auto=format&fit=crop&w=800&q=80`} alt='car image' width={500} height={400} className='w-full h-110 md:h-60 object-center rounded-2xl' />
            <Chip className='w-20 flex justify-center items-center  absolute top-7 left-7 border'>{car?.availabilityStatus}</Chip>

            <h1 className='font-bold text-lg'>{car?.carName}</h1>
            <p className='text-black/70'>{car?.description}</p>

            <span className='flex items-center gap-4 text-gray-500'><CiLocationArrow1 />{car?.pickupLocation}</span>
            <span className='flex items-center gap-4 text-gray-500'><FiUsers /> {car?.seatCapacity} Seat Capacity</span>
            <Link href={`/`}>
                <Button className={'bg-[#36ADA3] w-full'}>View Details</Button>
            </Link>
        </Card>
    );
};

export default CarCard;