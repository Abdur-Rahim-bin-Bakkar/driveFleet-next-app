import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const CarCard = ({ car }) => {
    console.log(car.imageURL)
    return (
        <Card className='relative shadow hover:shadow-2xl hover:scale-103 hover:-translate-y-2 duration-500'>
            <Image src={`${car?.imageURL}?auto=format&fit=crop&w=800&q=80`} alt='car image' width={500} height={400} className='w-full h-110 md:h-60 object-center rounded-2xl' />
            <Chip className='w-20 flex justify-center items-center  absolute top-7 left-7 border'>{car?.availabilityStatus}</Chip>
        </Card>
    );
};

export default CarCard;