import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    if(!session){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    console.log(session,'eitai khujchi')
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: ['/add-car','/bookings','/my-added-cars','/cars/:path'],
}