 
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";


export const AuthOption: NextAuthOptions = {
  pages:{
    signIn:'/login'

  },
  providers: [
    Credentials(
    {
      name: "credentials",
      credentials: {
        email: {},
        password: {}
      },
      authorize: async(values) => {
     const response  = await fetch(`${process.env.BASE_URL}/auth/signin`,{
        method: 'POST',
        body:JSON.stringify(values),
        headers:{
            'Content-Type':"application/json"
        }

     })
     const payload = await response.json()
     console.log('payload',payload)

     if(payload.message == 'success'){
     const decodedToken:{id:string} = jwtDecode(payload.token)
     
    
      return {
        id:decodedToken.id,
        user:payload.user ,
        token:payload.token
      }
     }else{
      console.log('fy moshkela')
       throw new Error ('email or password is incorrect')
     }


     
     

      }
    }
    )
  ],

  callbacks:{
     async jwt({ token, user}) {

      if(user){
      token.user = user.user
      token.token = user.token
      }
      return token   
      //  object encrypted used in server only

    },


      async session({ session, token }) {
        
      
        
        if(token){
        session.user =token.user 
        }         
      return session
      // object encrypted used in client only
    }
  }



};
