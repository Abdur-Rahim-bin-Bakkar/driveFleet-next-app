'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Textarea, Card, Select, TextField, Label, FieldError, TextArea, Description, ListBox } from "@heroui/react";
import { redirect } from "next/navigation";

const UpdateCar = ({ data }) => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const userId = session?.user?.id
    // console.log(session)
    // console.log(data._id, 'user id')
    // console.log(data, 'hya ekahn thekei')
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        const formData = new FormData(e.target);

        const updateData = Object.fromEntries(formData.entries());
        console.log(updateData,'UP Data')
        const {imageURL,availabilityStatus,pickupLocation,description,carType,dailyRentPrice} = updateData

        console.log(availabilityStatus, 'ache naki ki bolo')
        console.log(carType, 'ache naki ki bolo')
        console.log(data, 'etai ki id')
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_API}/add-car/${data?._id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({imageURL,availabilityStatus,pickupLocation,description,carType,dailyRentPrice})
        })
        const resDAta = await res.json()
        console.log(resDAta,'success hoyche naki mama')

        if(resDAta){
            redirect('/my-added-cars')
        }

    }
    return (
        <div className="flex justify-center items-center py-10 px-4 bg-gray-50">
            <Card className="w-full max-w-2xl p-6 shadow-lg rounded-2xl">
                <h2 className="text-2xl font-bold text-center text-[#36ADA3] mb-6">
                    Add New Car
                </h2>

                <form action="" onSubmit={handleSubmit} className="space-y-5">
                    {/* <TextField
                        isRequired
                        name="carName"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your Name" />
                        <FieldError />
                    </TextField> */}
                    <TextField
                        defaultValue={data?.dailyRentPrice}
                        isRequired
                        name="dailyRentPrice"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Daily Rent Price</Label>
                        <Input placeholder="Daily Rent Price" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        defaultValue={data?.imageURL}
                        name="imageURL"
                        type="url"
                    // validate={(value) => {
                    //   const urlPattern =
                    //     /^(https?:\/\/)?([\w\-])+\.{1}[a-zA-Z]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;

                    //   if (!urlPattern.test(value)) {
                    //     return "Please enter a valid image URL";
                    //   }

                    //   return null;
                    // }}
                    >
                        <Label>Image URL</Label>

                        <Input placeholder="Enter Image URL" />

                        <FieldError />
                    </TextField>
                    <div className="md:flex items-center gap-5">

                        <Select
                            defaultValue={data?.carType}
                            name="carType" className="w-full" placeholder="Select one">
                            <Label>Car Type</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="SUV" textValue="SUV">
                                        SUV
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Sedan " textValue="Sedan ">
                                        Sedan
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Hatchback  " textValue="Hatchback  ">
                                        Hatchback
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Luxury  " textValue="Luxury  ">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                </ListBox>
                            </Select.Popover>
                        </Select>
                        <Select
                            defaultValue={data?.availabilityStatus}
                            name="availabilityStatus" className="w-full" placeholder="Select one">
                            <Label>Availability Status</Label>
                            <Select.Trigger>
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Avaible" textValue="Avaible">
                                        Avaible
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Unavaible" textValue="Unavaible">
                                        Unavaible
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                    <TextField
                        defaultValue={data?.pickupLocation}
                        isRequired
                        name="pickupLocation"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Pickup Location</Label>
                        <Input placeholder="Pickup Location" />
                        <FieldError />
                    </TextField>
                    {/* <TextField
                        isRequired
                        name="seatCapacity"
                        // validate={(value) => {
                        //     if (value.length < 0) {
                        //         return "Name must be at least 0 characters";
                        //     }
                        //     return null;
                        // }}
                        defaultValue="5"
                    >
                        <Label>Seat Capacity
                        </Label>
                        <Input placeholder="Seat Capacity
        " />
                        <FieldError />
                    </TextField> */}
                    <TextField defaultValue={data?.description} className="w-full max-w-full" name="description">
                        <Label>Description</Label>
                        <TextArea placeholder="Write your message here..." rows={3} />
                        <Description>Maximum 500 characters</Description>
                    </TextField>






                    <Button type="submit" className={'bg-transparent  w-full font-bold border border-green-500 text-green-500'}>Update</Button>
                </form>

            </Card>
        </div>
    );
};

export default UpdateCar;