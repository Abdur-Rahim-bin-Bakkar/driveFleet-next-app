"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Label, Modal, Select, ListBox, Description, TextField, TextArea } from "@heroui/react";
import { useState } from "react";
import { FaCarAlt } from "react-icons/fa";

export function BookModal() {
    const [driver, setDriver] = useState('yes')
    const [message,setMessage] = useState('')
    console.log(driver)
    console.log(message)
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
                                    <Label>Need Driver</Label>
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
                                    <Label>Message</Label>
                                    <TextArea placeholder="Write your message here..." rows={4} />
                                    <Description>Maximum 500 characters</Description>
                                </TextField>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="w-full" slot="close">
                                Continue Book The Car
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}