"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Textarea, Card, Select, TextField, Label, FieldError, TextArea, Description, ListBox } from "@heroui/react";
import { redirect } from "next/navigation";
// import { type } from './../../../.next/dev/types/routes.d';


const AddCarForm = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const userId = session?.user?.id
    // console.log(session)
    // console.log(userId, 'user id')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data: tokenData } = await authClient.token()
        // console.log(formData);
        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());

        console.log(data,'form data');
        // console.log(tokenData,'token Data')
        const addedData = { ...data, userId }
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/add-car`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

                authorization: `Bearer ${tokenData.token}`
            },
            body: JSON.stringify(addedData)
        })
        const result = await res.json()
        console.log(result,'result')
        if (result) {
            redirect('/my-added-cars')
        }
    };

    return (
     <div className="min-h-screen flex justify-center items-center py-10 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <Card className="w-full max-w-3xl p-8 shadow-2xl rounded-3xl border border-gray-100 bg-white/80 backdrop-blur-md">

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-[#36ADA3] to-[#2f8f86] text-transparent bg-clip-text mb-8">
            Add New Car
        </h2>

        <form action="" onSubmit={handleSubmit} className="space-y-6">

            <TextField
                isRequired
                name="carName"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Name must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label className="text-gray-700 font-medium">Car Name</Label>
                <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" placeholder="Enter car name" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="dailyRentPrice"
                validate={(value) => {
                    if (value.length < 1) {
                        return "Price is required";
                    }
                    return null;
                }}
            >
                <Label className="text-gray-700 font-medium">Daily Rent Price</Label>
                <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" placeholder="Enter daily rent price" />
                <FieldError />
            </TextField>

            <TextField isRequired name="imageURL" type="url">
                <Label className="text-gray-700 font-medium">Image URL</Label>
                <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" placeholder="Enter image URL" />
                <FieldError />
            </TextField>

            <div className="md:flex items-center gap-5 space-y-5 md:space-y-0">

                <Select name="carType" className="w-full" placeholder="Select car type">
                    <Label className="text-gray-700 font-medium">Car Type</Label>
                    <Select.Trigger className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3]">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="SUV" textValue="SUV">SUV</ListBox.Item>
                            <ListBox.Item id="Sedan" textValue="Sedan">Sedan</ListBox.Item>
                            <ListBox.Item id="Hatchback" textValue="Hatchback">Hatchback</ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select name="availabilityStatus" className="w-full" placeholder="Select status">
                    <Label className="text-gray-700 font-medium">Availability Status</Label>
                    <Select.Trigger className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3]">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="Available" textValue="Available">Available</ListBox.Item>
                            <ListBox.Item id="Unavailable" textValue="Unavailable">Unavailable</ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

            </div>

            <TextField
                isRequired
                name="pickupLocation"
                validate={(value) => {
                    if (value.length < 3) {
                        return "Pickup location must be at least 3 characters";
                    }
                    return null;
                }}
            >
                <Label className="text-gray-700 font-medium">Pickup Location</Label>
                <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" placeholder="Enter pickup location" />
                <FieldError />
            </TextField>

            <TextField
                isRequired
                name="seatCapacity"
                defaultValue="5"
            >
                <Label className="text-gray-700 font-medium">Seat Capacity</Label>
                <Input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" placeholder="Seat capacity" />
                <FieldError />
            </TextField>

            <TextField className="w-full max-w-full" name="description">
                <Label className="text-gray-700 font-medium">Description</Label>
                <TextArea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#36ADA3] outline-none" rows={4} placeholder="Write description..." />
                <Description className="text-gray-500">Maximum 500 characters</Description>
            </TextField>

            <Button type="submit" className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-[#36ADA3] to-[#2f8f86] text-white shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                Add Car
            </Button>

        </form>

    </Card>
</div>
    );
};

export default AddCarForm;