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
        <Card className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 px-5 rounded-2xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">

            <div className="flex items-center gap-4 w-full md:w-auto">

                <Image
                    src={car?.carDetails?.imageURL}
                    alt="booking car image"
                    width={120}
                    height={90}
                    className="w-24 h-20 rounded-xl object-cover shadow-sm"
                />

                <div className="space-y-2">
                    <h1 className="font-bold text-lg text-gray-900">
                        {car?.carDetails?.carName}
                    </h1>

                    <p className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiLocationArrow1 className="text-[#36ADA3]" />
                        {car?.carDetails?.pickupLocation}
                    </p>

                    <p className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiCalendarDate className="text-[#36ADA3]" />
                        {finalFormat}
                    </p>
                </div>

            </div>

            <div className="flex items-center gap-3 mt-3 md:mt-0">

                <Button className="bg-gradient-to-r from-[#36ADA3] to-[#2f8f86] text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                    $ {car?.carDetails?.dailyRentPrice}
                </Button>

            </div>

        </Card>
    );
};

export default BookingCars;