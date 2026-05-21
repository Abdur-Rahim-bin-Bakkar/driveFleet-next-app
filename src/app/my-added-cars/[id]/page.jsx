// '"use client";'

import UpdateCar from "@/components/share/UpdateCar";
import { auth } from "@/lib/auth";
// import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";



const MyAddedEdit = async ({ params }) => {
    const { token } = await auth.api.getToken({
            headers: await headers()
        })
    const { id } = await params;
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/car/${id}`, {
        headers: {
            "Content-Type": "application/json",

            authorization: `Bearer ${token}`
        },
    })
    const data = await res.json()
    console.log(data, 'data go')
    console.log(token, 'token go')

    return (
        <UpdateCar data={data} />
    );
};

export default MyAddedEdit;