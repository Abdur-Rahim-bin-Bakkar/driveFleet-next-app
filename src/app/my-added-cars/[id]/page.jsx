// '"use client";'

import UpdateCar from "@/components/share/UpdateCar";



const MyAddedEdit = async ({ params }) => {
    const { id } = await params;
    console.log(id)
    const res = await fetch(`http://localhost:5000/car/${id}`)
    const data = await res.json()
    // console.log(data)

    return (
        <UpdateCar  data={data}  />
    );
};

export default MyAddedEdit;