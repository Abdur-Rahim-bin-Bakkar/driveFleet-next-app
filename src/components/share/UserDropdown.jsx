"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CiFaceMeh } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoIosAddCircleOutline, IoIosLogOut } from "react-icons/io";

export function UserDropdown() {
  const handleSignOut = async (e) => {
    await authClient.signOut()
    redirect('/login')
    console.log('out')
  }
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  // console.log(session)
  // console.log(error)
  return (
    <Dropdown>
      <Button aria-label="Menu" variant="secondary" className={'flex items-center justify-between h-12 rounded-md'}>
        {
          session?.user?.image ?
            <Image className="w-10 h-10 rounded-full" src={session?.user?.image} alt="user logo" width={100} height={100} /> :
            <span className='border rounded-full w-10 h-10 flex justify-center items-center text-xl'>{session?.user?.name[0]?.toUpperCase()}</span>
        }
        {
          session &&
          <span className="text-[#36ADA3]">{session?.user?.name}</span>
        }
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu aria-label="User Menu">

          <Dropdown.Item key="add-car">
            <Link href="/add-car" className="w-full flex items-center gap-2 underline">
             <IoIosAddCircleOutline />
              Add Car
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="my-bookings">
            <Link href="/bookings" className="w-full flex items-center gap-2 underline">
             <CiFaceMeh />
              My Bookings
            </Link>
          </Dropdown.Item>

          <Dropdown.Item key="my-added-cars">
            <Link href="/my-added-cars" className="w-full  underline flex items-center gap-2">
            <FaHandHoldingMedical />

              My Added Cars
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            key="logout"
            className="text-red-500 flex items-center gap-2"
            color="danger"
            onPress={handleSignOut}

          >
            <IoIosLogOut />
            Logout
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown >
  );
}