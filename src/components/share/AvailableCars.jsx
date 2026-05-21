import React from 'react';
import CarCard from './CarCard';

const AvailableCars =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/available-cars`)
    const cars = await res.json()
    // console.log(cars)
    return (
        <div className='mt-10 max-w-11/12 mx-auto'>
            <h1 className='text-black dark:text-white font-bold text-2xl md:text-4xl text-center'>Available Cars</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                {
                    cars.map(car=> <CarCard key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default AvailableCars;