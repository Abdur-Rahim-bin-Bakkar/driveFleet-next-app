"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function UserDropdown() {
  const handleSignOut = async (e) => {
    await authClient.signOut()
    console.log('out')
  }
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  console.log(session)
  console.log(error)
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        <Image src={session?.user?.image}/>
        <span>{session?.user?.name}</span>
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label><Link href={'/'}>ADD Car</Link></Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label><Link href={'/'}>My Bookings</Link></Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label><Link href={'/'}>My Added Cars</Link></Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label><Button>LogOut</Button></Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}