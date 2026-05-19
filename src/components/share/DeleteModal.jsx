"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

export function DeleteModal({ id }) {
    console.log(id, 'aimito ai id i khoji')
    const haldleDelete = async () => {
        const res = await fetch(`http://localhost:5000/add-car/${id}`, {
            method: "DELETE"
        })
        const result = await res.json()
        if (result) {
         redirect('/my-added-car')   
        }
    }
    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={haldleDelete} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}