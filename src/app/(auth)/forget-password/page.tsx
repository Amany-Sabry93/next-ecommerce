 "use client"
import { Button } from '@/components/ui/button'
 import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ForgetSchema, ForgetType } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function ForgetPassword() {
  
     const router = useRouter()


 const myForm = useForm<ForgetType>({
  defaultValues:{
    email:"",
  },
  resolver:zodResolver(ForgetSchema),
  mode:'all'
  

})
// Handle Submit Function
 async function handleForget(values:ForgetType){

  const loadingId = toast.loading('loading...')
  try{
 const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
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

 toast.success('code sent to your email')
  router.push('/verify-code')

}catch(error:any){
  
   toast.error(error.message || 'Error occured')
}finally{
  toast.dismiss(loadingId)
}

}


  return  <>
     <main>
      <div className="container mx-auto">
        <div className='w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto  bg-fuchsia-50 shadow rounded-xl my-5 pb-5 pt-1'>
          <h2 className='text-center text-gray-500 font-bold text-3xl my-7'>Forgert Password </h2>

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
          
          
         

          
          {/* Button */}
          <div className=' flex justify-center '>
            <Button className= 'bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500  w-[40%]  font-semibold text-xl'>Forget</Button>
            

          
          </div>
            
          
          
          
          

        </form>

        </Form>
      </div>
        </div>

      </div>


     </main>
    </>
  
}

