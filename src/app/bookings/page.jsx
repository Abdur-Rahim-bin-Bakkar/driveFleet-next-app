import BookingCars from '@/components/share/BookingCars';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    console.log(session?.user?.id)
    const res = await fetch(`http://localhost:5000/bookings/${session?.user?.id}`)
    const bookinsCar =await res.json()
    console.log(bookinsCar)
    return (
        <div className='max-w-11/12 mx-auto mt-15 bg-[#36ADA330] p-5'>
            <h1 className='text-3xl md:text-4xl font-bold'>My Bookings</h1>
            <div className='mt-5 space-y-4'>
                {
                    bookinsCar.map(car=> <BookingCars key={car?._id} car={car}  />)
                }
            </div>
        </div>
    );
};

export default BookingPage;