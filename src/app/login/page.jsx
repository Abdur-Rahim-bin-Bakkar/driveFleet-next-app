"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField, Card, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/google.png'
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const LoginPage = () => {
  const goooglesignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const userData = Object.fromEntries(formData)
    console.log(userData)
    const { data, error } = await authClient.signIn.email(userData);
    console.log(data, 'data')
    console.log(error, 'error')
    if (error) {
      toast.error(error.message)
      return
    }
    if (data) {
      redirect('/')
    }

  }
  return (
    <div className='min-h-screen w-full md: justify-center items-center md:flex gap-10 space-y-10 py-15 bg-[#36ADA330]'>
      <div className="text-center md:p-5 space-y-3">
        <h1 className='text-black text-xl md:text-5xl font-bold '>Welcome back to DriveFieet</h1>
        <p className='text-black/70'>Login Out WebSite for gat extra fetcure</p>
      </div>
      <Card className='max-w-110 min-w-100 mx-auto '>
        <h1 className='font-bold text-2xl text-center mb-3'>Login</h1>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="enter email address" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>Must be at least 6 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className={'bg-[#36ADA3] w-full my-2'}>
              <Check />
              Login
            </Button>

          </div>
          <p className="text-center">Not have an account?<Link href={'/reg'} className="font-bold text-[#36ADA3]"> Register</Link> </p>

          <div className="grid grid-cols-3 items-center gap-2 center">
            <Separator variant="default" />
            <span className="text-center font-bold"> OR</span>
            <Separator variant="default" />
          </div>
        </Form>
        <Button onClick={goooglesignIn} type="submit" className={'border bg-transparent text-success font-bold w-full my-2 flex justify-center items-center'}>
          <Image src={logo} className="w-5" alt="google logo"></Image>
          Login With Google
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;