import AddCarCard from '@/components/share/AddCarCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyAddedPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/add-car/${session?.user?.id}`,{
           headers:{
             authorization:`Bearer ${token}`
           }
        })
    const myAddCars = await res.json()
    console.log(myAddCars)
    return (
        <div className='max-w-11/12 mx-auto mt-15 bg-[#36ADA330] p-5'>
            <h1 className='text-3xl md:text-4xl font-bold text-center my-6'>My Added Cars</h1>
            <div className='mt-10 space-y-4'>
                {
                    myAddCars.map(car => <AddCarCard key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default MyAddedPage; 