import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiCalendarDate, CiLocationArrow1 } from 'react-icons/ci';

const BookingCars = ({ car }) => {
    // console.log(car?.carDetails?.imageURL)
    // const date = new Date(car?.date)
    // console.log(date, 'date')

    // const dateString = "Tue May 19 2026 10:47:50 GMT+0600";

    const date = new Date(car?.date);

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    const finalFormat = `${formattedDate} • ${formattedTime}`;

    // console.log(finalFormat);
    return (
        <Card className='flex-row justify-between items-center rounded-md p-2 px-5 bg-white shadow   hover:shadow-2xl hover:scale-103 hover:-translate-y-2 duration-500'>
            <div className="grid md:grid-cols-2 gap-1">
                <Image src={car?.carDetails?.imageURL} alt='booking car image' width={300} height={256} className='max-w-30 h-20 object-cover' />
                <div className="space-y-3">
                    <h1 className='font-bold text-lg'>{car?.carDetails?.carName}</h1>
                    <p className='flex items-center gap-3'><CiLocationArrow1 /> {car?.carDetails?.pickupLocation}</p>
                    <p className='flex items-center gap-3'><CiCalendarDate />
                        {finalFormat}</p>
                </div>
            </div>
            <Button className={'bg-green-400 rounded-md'}>$ {car?.carDetails?.dailyRentPrice}</Button>
        </Card>
    );
};

export default BookingCars;