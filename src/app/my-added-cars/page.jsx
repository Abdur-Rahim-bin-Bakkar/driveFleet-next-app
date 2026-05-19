import AddCarCard from '@/components/share/AddCarCard';
import React from 'react';

const MyAddedPage = async () => {
    const res = await fetch('http://localhost:5000/add-car/6a0c2480f3f29f65c6a6f308')
    const myAddCars = await res.json()
    console.log(myAddCars)
    return (
        <div className='max-w-11/12 mx-auto mt-15 bg-[#36ADA330] p-5'>
            <h1 className='text-3xl md:text-4xl font-bold text-center my-4'>My Bookings</h1>
            <div className='mt-10 space-y-4'>
                {
                    myAddCars.map(car => <AddCarCard key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default MyAddedPage; 