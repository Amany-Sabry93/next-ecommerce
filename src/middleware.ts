import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request:NextRequest){
   const token= await getToken({
      req:request,
      secret:process.env.AUTH_SECRET,
      secureCookie:process.env.NODE_ENV==="production",
      cookieName:process.env.NODE_ENV === "production"?
      "__Secure-next-auth.session-token"
      :"next-auth.session-token"

   })
   const {pathname} = request.nextUrl
   if(!token&&( pathname==='/cart' || pathname.startsWith( '/allorders'))){
      return NextResponse.redirect(new URL('/login',request.url))

   }

   if(token && (pathname==='/login' ||pathname==='/register')){

     return NextResponse.redirect(new URL('/',request.url))

   }



 return NextResponse.next()

 
}

 export const  config ={
    matcher :['/cart','/allorders/:path*','/login','/register']
 }