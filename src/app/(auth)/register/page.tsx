 "use client"
import { Button } from '@/components/ui/button'
 import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema, RegisterType } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Register() {
  // navigate variable to login page
     const router = useRouter()


    // password Eye State
    const[isPassword,setIsPassword]=useState(true) 



 const myForm = useForm<RegisterType>({
  defaultValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
  },
  resolver:zodResolver(RegisterSchema),
  mode:'all'
  

})
// Handle Submit Function
 async function handleRegister(values:RegisterType){

  const loadingId = toast.loading('loading...')
  try{
 const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(values)

 })
 const result = await response.json()
 if(!response.ok){
  throw new Error(result.message ||'Something went wrong')

 }

 toast.success('account created successfully')
  router.push('/login')

}catch(error:any){
  
   toast.error(error.message || 'Error occured')
}finally{
  toast.dismiss(loadingId)
}

}


  return  <>
     <main>
      <div className="container mx-auto">
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto   bg-fuchsia-50  shadow rounded-xl pb-5 pt-1 my-5 '>
          <h2 className='text-center text-gray-500 font-bold text-3xl my-7'>Register Now</h2>

      <div className=''>
        <Form {...myForm} >

        <form onSubmit={myForm.handleSubmit(handleRegister)}  className='m-5 space-y-6'>
            {/* name */}
          <FormField
          control={myForm.control}
          name="name"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>Name:</FormLabel>
              <FormControl>
                <Input {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />

           {/* email */}
          <FormField
          control={myForm.control}
          name="email"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>Email:</FormLabel>
              <FormControl>
                <Input {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />
          
           {/* password */}
          <FormField
          control={myForm.control}
          name="password"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>Password:</FormLabel>
              <FormControl>
                <div className='relative'>
                <Input {...field} type={isPassword?'password':'text'}/>
                {isPassword?
                  <Eye onClick={()=>setIsPassword(false)} className= 'absolute top-2 right-2 text-gray-500' />
                  :
                  <EyeOff onClick={()=>setIsPassword(true)} className= 'absolute top-2 right-2 text-gray-500'  />
                }
              
                </div>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />
          {/* rePassword */}
          <FormField
          control={myForm.control}
          name="rePassword"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>confirm Password:</FormLabel>
              <FormControl>
              <div className='relative'>
                  <Input {...field} type={isPassword?'password':'text'}/>
                  {isPassword?
                  <Eye  onClick={()=>setIsPassword(false)} className= 'absolute top-2 right-2 text-gray-500' />
                  :
                  <EyeOff onClick={()=>setIsPassword(true)} className= 'absolute top-2 right-2 text-gray-500'  />
                }
              </div>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />

           {/* phone */}
          <FormField
          control={myForm.control}
          name="phone"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>Phone:</FormLabel>
              <FormControl>
                <Input  {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />
          {/* Button */}
          <Button className= 'bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500 w-full font-semibold text-xl'>Register</Button>
          
          
          

        </form>

        </Form>
      </div>
        </div>

      </div>


     </main>
    </>
  
}
