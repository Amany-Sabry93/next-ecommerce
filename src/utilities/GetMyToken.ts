'use server'
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";



export default async function getMyToken(){

 const data =await cookies()
 const encryptedToken= data.get('next-auth.session-token')?.value||data.get('__Secure-next-auth.session-token')?.value
 if(!encryptedToken){
    return null
 }

const token=  await decode({token:encryptedToken,secret:process.env.AUTH_SECRET!  })
return token?.token


}