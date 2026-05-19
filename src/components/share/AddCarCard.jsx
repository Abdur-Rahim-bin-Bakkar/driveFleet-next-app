import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa';

const AddCarCard = ({car}) => {
    console.log(car,'a car')
    return (
        <Card className='flex-row justify-between items-center rounded-md p-2 px-5 bg-white shadow   hover:shadow-2xl hover:scale-103 hover:-translate-y-2 duration-500'>
            <div className="grid md:grid-cols-2 gap-3">
                <Image src={car?.imageURL?.trim()} alt='booking car image' width={300} height={256} className='max-w-30 h-20 object-cover' />
                <div className="space-y-3">
                    <h1 className='font-bold text-lg'>{car?.carName}</h1>
                    <p className='flex items-center gap-3 text-green-500'><CiLocationArrow1 /> {car?.availabilityStatus}</p>
                   
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <Button className={'bg-transparent border border-red-500 text-red-500'}>Delete</Button>
                <Button className={'bg-transparent border border-green-500 text-green-500'}>Update</Button>
            </div>
        </Card>
    );
};

export default AddCarCard;