import { BookModal } from '@/components/share/BookModal';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdEventAvailable, MdOutlinePriceChange } from 'react-icons/md';

const CarDetailsPage = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const { id } = await params;
    console.log(id)
    const res = await fetch(`http://localhost:5000/car/${id}`)
    // console.log(carDetails)
    if (!res.ok) {
        notFound()
    }
    const carDetails = await res.json()
    if (!carDetails) {
        notFound();
    }
    return (
        <div className='grid md:grid-cols-2 gap-5 max-w-11/12 mx-auto mt-10 shadow p-5'>
            <Image src={`${carDetails?.imageURL}?auto=format&fit=crop&w=800&q=80`} alt='car image' width={500} height={400} className='w-full object-center rounded-2xl' />
            <div className="space-y-3">
                <h1 className='font-bold text-lg'>{carDetails?.carName}</h1>
                <p className='text-black/70'>{carDetails?.description}</p>

                <span className='flex items-center gap-4 text-gray-500 bg-gray-200 hover:bg-gray-300 duration-500 rounded-md px-2 py-1'><CiLocationArrow1 /><span>Location:  </span>     {carDetails?.pickupLocation}</span>
                <span className='flex items-center gap-4 text-gray-500  bg-gray-200 hover:bg-gray-300 duration-500 rounded-md px-2 py-1'><FiUsers /> {carDetails?.seatCapacity} Seat Capacity</span>
                <span className='flex items-center gap-4 text-gray-500  bg-gray-200 hover:bg-gray-300 duration-500 rounded-md px-2 py-1'><FaCar />{carDetails?.carType} Seat Capacity</span>
                <span className={`flex items-center gap-4 text-gray-500  bg-gray-200 hover:bg-gray-300 duration-500 rounded-md px-2 py-1 ${carDetails?.availabilityStatus === 'Unavailable' ? 'text-red-600' : 'text-green-600'}`}><MdEventAvailable />{carDetails?.availabilityStatus}  </span>
                <span className='flex items-center gap-4 text-gray-500  bg-gray-200 hover:bg-gray-300 duration-500 rounded-md px-2 py-1'><MdOutlinePriceChange />{carDetails?.dailyRentPrice} Dollar  </span>

                <BookModal session={session} carDetails={carDetails} />


            </div>
        </div>
    );
};

export default CarDetailsPage;