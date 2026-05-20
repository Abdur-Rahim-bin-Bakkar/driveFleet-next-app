"use client";

import { authClient } from "@/lib/auth-client";
import { Rocket } from "@gravity-ui/icons";
import { Button, Label, Modal, Select, ListBox, Description, TextField, TextArea } from "@heroui/react";
import { redirect } from "next/navigation";
// import { date } from "better-auth";
import { useState } from "react";
import { FaCarAlt } from "react-icons/fa";

export function BookModal({ session, carDetails }) {
    const [driver, setDriver] = useState('yes')
    const [message, setMessage] = useState('')
    console.log(driver)
    console.log(message)
    console.log(carDetails?._id, 'ami koro kichu ki')
    const id = carDetails?._id

    const hangleBooking = async (e) => {
            // const {
            //     data: session,
            //     isPending, //loading state
            //     error, //error object
            //     refetch //refetch the session
            // } = authClient.useSession()
            if(!session){
                redirect('/login')
            }
        const userId = await session?.user?.id
        const date = new Date()
        const bookingData = await { userId, driver, message, carDetails, date }
        const res = await fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)

        })
        const result = await res.json()

        const res2 = await fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            // body:JSON.stringify({name,age,email,role})
        })
        const result2 = await res2.json()
        console.log(result2, 'this is result 2')
        console.log(result, 'submiting result')
        if (result) {
            redirect('/bookings')
        }
    }
    return (
        <Modal>
            <Button variant="secondary" className={'w-full my-2 text-white font-bold bg-green-500'}>Book Now</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[390px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <FaCarAlt />

                            </Modal.Icon>
                            <Modal.Heading>Welcome to DriveFieet</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Please provide additional details about your booking, including any special requests, pickup location, or preferences. This information will help us serve you better.
                            </p>
                            <div className="px-2 space-y-3 mt-5">
                                <Select onChange={setDriver} className="w-full" placeholder="Select one">
                                    <Label>Driver Needed (Yes/No)</Label>
                                    <Select.Trigger>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="no" textValue="no">
                                                No
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                            <ListBox.Item id="yes" textValue="ues">
                                                Yes
                                                <ListBox.ItemIndicator />
                                            </ListBox.Item>

                                        </ListBox>
                                    </Select.Popover>

                                </Select>
                                <TextField onChange={setMessage} className="w-full max-w-full" name="message">
                                    <Label>Special Note</Label>
                                    <TextArea placeholder="Write your message here..." rows={4} />
                                    <Description>Maximum 500 characters</Description>
                                </TextField>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={hangleBooking} className="w-full" slot="close">
                                Continue Book The Car
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}