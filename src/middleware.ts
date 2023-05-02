import { NextResponse } from "next/server";
export function middleware(request: Request) {
  //  console.log('middleware', request)
    return NextResponse.next()
}