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
        <div className="mt-8">

            <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row gap-4"
            >


                <input
                    type="text"
                    placeholder="Search by car name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-4 py-3 rounded-xl w-full outline-none"
                />


                <select
                    defaultValue={searchParams.get("carType") || ""}
                    onChange={handleCategoryChange}
                    className="border px-4 py-3 rounded-xl outline-none"
                >
                    <option value="">All Types</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Hatchback">Hatchback</option>
                </select>


                <button
                    type="submit"
                    className="bg-[#36ADA3] text-white px-6 py-3 rounded-xl"
                >
                    Search
                </button>

            </form>

        </div>
    );
};

export default SearchFilter;