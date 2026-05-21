import CarCard from '@/components/share/CarCard';
import SearchFilter from '@/components/share/SearchAndFilter';
import React from 'react';

const AllCarsPage = async ({searchParams}) => {
    const params =await searchParams
    const search = params?.search || "";
    const carType = params?.carType || "";

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_API}/all-cars?search=${search}&carType=${carType}`,
        {
            cache: "no-store"
        }
    );
    const cars = await res.json()
    return (
        <div className='mt-10 max-w-11/12 mx-auto'>
            <h1 className='text-black dark:text-white font-bold text-2xl md:text-4xl text-center'>All Cars</h1>

            <SearchFilter/>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                {
                    cars.map(car => <CarCard key={car?._id} car={car} />)
                }
            </div>
        </div>
    );
};

export default AllCarsPage;