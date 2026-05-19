"use client";

import { useRouter } from "next/navigation";


const NotFound = () => {
    const router = useRouter();


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">

            <div className="text-center max-w-md">

                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold text-blue-500">404</h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-2">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Button */}
                <button
                    onClick={() => router.push("/")}
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full shadow-lg"
                >
                    Go Back Home
                </button>

            </div>
        </div>
    );

};

export default NotFound;