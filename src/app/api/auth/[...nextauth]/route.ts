
import { AuthOption } from "@/auth"
import { Session } from "inspector/promises"
import NextAuth from "next-auth"
import { cookies } from "next/headers"

const handler = NextAuth(AuthOption)

export { handler as GET, handler as POST }
export const authOptions = {
    secret:process.env.AUTH_SECRET,
    session:{
        strategy:"jwt",
        cookies:{
            sessionToken:{
               name: `__Secure-session-token`,
        options: {
          httpOnly: true,
          sameSite:"lax",
          Path:"/",secure:process.env.NODE_ENV ==="production", 
            }
        }
    }
    
}
}
