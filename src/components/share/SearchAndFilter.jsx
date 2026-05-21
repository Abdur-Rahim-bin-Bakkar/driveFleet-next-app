"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchFilter = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );


    const handleCategoryChange = (e) => {

        const params = new URLSearchParams(searchParams.toString());

        params.set("carType", e.target.value);

        router.push(`/cars?${params.toString()}`);
    };


    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        params.set("search", search);

        router.push(`/cars?${params.toString()}`);
    };

    return (
        <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 bg-white p-5 rounded-2xl shadow-md border border-gray-100">

            
            <div className="flex-1">
                <h1 className="mb-3 font-semibold text-gray-700">
                    Search By Car Name
                </h1>

                <form
                    onSubmit={handleSearch}
                    className="flex items-center bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-[#36ADA3] transition"
                >
                    <input
                        type="text"
                        placeholder="Search by car name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700"
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#36ADA3] to-[#2f8f86] text-white px-6 py-3 font-medium hover:opacity-90 transition"
                    >
                        Search
                    </button>
                </form>
            </div>

          
            <div className="min-w-[220px]">
                <h1 className="mb-3 font-semibold text-gray-700">
                    Filter by Car Type
                </h1>

                <select
                    defaultValue={searchParams.get("carType") || ""}
                    onChange={handleCategoryChange}
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-2xl outline-none text-gray-700 focus:ring-2 focus:ring-[#36ADA3] transition"
                >
                    <option value="">All Types</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Hatchback">Hatchback</option>
                </select>
            </div>

        </div>
    );
};

export default SearchFilter;