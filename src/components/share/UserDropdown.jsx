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
  // console.log(error)
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="secondary" className={'flex items-center justify-between h-12 rounded-md'}>
        {
          session&& 
        <Image className="w-10 h-10 rounded-full" src={session?.user?.image} alt="user logo" width={100} height={100} />
        }
        <span className="text-[#36ADA3]">{session?.user?.name}</span>
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
          <Dropdown.Item onClick={handleSignOut} id="delete-file" textValue="Delete file" variant="danger">
            <Label><Button  className={'w-full bg-red-500'}>LogOut</Button></Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}