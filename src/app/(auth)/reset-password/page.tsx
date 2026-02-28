 "use client"
import { Button } from '@/components/ui/button'
 import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetSchema, ResetType } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function ResetPassword() {
        const[isPassword,setIsPassword]=useState(true) 

     const router = useRouter()

 const myForm = useForm<ResetType>({
  defaultValues:{
    email:"",
    newPassword: ""
  },
  resolver:zodResolver(ResetSchema),
  mode:'all'
  

})
// Handle Submit Function
 async function handleForget(values:ResetType){

  const loadingId = toast.loading('loading...')
  try{
 const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',{
  method:'PUT',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(values)

 })
 const result = await response.json()
 if(!response.ok){
  throw new Error(result.message ||'Something went wrong')

 }

 toast.success('password changed successfully')
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
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto   bg-fuchsia-50  shadow rounded-xl my-5 pb-5 pt-1'>
          <h2 className='text-center text-gray-500 font-bold text-3xl my-7'> Reset Password </h2>

      <div className=''>
        <Form {...myForm} >

        <form onSubmit={myForm.handleSubmit(handleForget)}  className='m-5 space-y-6'>
        
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
           {/* new Password */}
                    <FormField
                    control={myForm.control}
                    name="newPassword"
                    render={({field})=>
                      <FormItem>
                        <FormLabel className='text-gray-500 text-lg'> New Password:</FormLabel>
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

       
        
          
          {/* Button */}
          <div className=' flex justify-center '>
            <Button className= 'bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500  w-[40%]  font-semibold text-xl'>Submit</Button>
            
          </div>
            

        </form>

        </Form>
      </div>
        </div>

      </div>


     </main>
    </>
  
}

