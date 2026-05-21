import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
import BookingCars from '@/components/share/BookingCars';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token,'token')

    console.log(session?.user?.id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/bookings/${session?.user?.id}` ,{
       headers:{
         authorization:`Bearer ${token}`
       }
    })
    const bookinsCar = await res.json()
    console.log(bookinsCar,'bookings')
    if (bookinsCar.length < 1) {
        return (
            <div className="flex items-center justify-center py-20 px-4">

                <div className="max-w-md w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-10 text-center">


                    <div className="flex justify-center">
                        <div className="bg-blue-100 p-5 rounded-full">
                            <FaBoxOpen className="text-5xl text-blue-600" />
                        </div>
                    </div>


                    <h2 className="text-2xl font-bold text-gray-800 mt-6">
                        Nothing Here Yet
                    </h2>


                    <p className="text-gray-500 mt-3 leading-relaxed">
                        This section is currently empty. Once new data is added,
                        it will appear here automatically.
                    </p>

                    <Link href={'/'}>
                        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white rounded-xl shadow-md">
                            Go To Home
                        </button>
                    </Link>

                </div>

            </div>
        )
    }
    return (
        <div className='max-w-11/12 mx-auto mt-15 bg-[#36ADA330] p-5'>
            <h1 className='text-3xl md:text-4xl font-bold text-center my-4'>My Bookings</h1>
            <div className='mt-10 space-y-4'>
                {
                    bookinsCar.map(car => <BookingCars key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default BookingPage;