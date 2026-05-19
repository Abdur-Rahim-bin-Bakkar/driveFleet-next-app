import CarCard from '@/components/share/CarCard';
import React from 'react';

const AllCarsPage = async () => {
    const res = await fetch('http://localhost:5000/all-cars')
    const cars = await res.json()
    return (
        <div className='mt-10 max-w-11/12 mx-auto'>
            <h1 className='text-black dark:text-white font-bold text-2xl md:text-4xl text-center'>All Cars</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                {
                    cars.map(car => <CarCard key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default AllCarsPage;