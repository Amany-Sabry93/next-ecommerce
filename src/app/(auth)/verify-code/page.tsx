 "use client"
import { Button } from '@/components/ui/button'
 import { Form, FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { VerifySchema, VerifyType } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function VerifyCode() {

     const router = useRouter()

 const myForm = useForm<VerifyType>({
  defaultValues:{
    resetCode:"",
  },
  resolver:zodResolver(VerifySchema),
  mode:'all'
  

})
// Handle Submit Function
 async function handleForget(values:VerifyType){

  const loadingId = toast.loading('loading...')
  try{
 const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',{
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

 toast.success('code verified')
  router.push('/reset-password')

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
          <h2 className='text-center text-gray-500 font-bold text-3xl my-7'> Verify Code </h2>

      <div className=''>
        <Form {...myForm} >

        <form onSubmit={myForm.handleSubmit(handleForget)}  className='m-5 space-y-6'>
        
           {/* reset Code */}
          <FormField
          control={myForm.control}
          name="resetCode"
          render={({field})=>
            <FormItem>
              <FormLabel className='text-gray-500 text-lg'>Reset Code:</FormLabel>
              <FormControl>
                <Input {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          }
          />
        
          
          {/* Button */}
          <div className=' flex justify-center '>
            <Button className= 'bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500  w-[40%]  font-semibold text-xl'>Verify</Button>
            
          </div>
            

        </form>

        </Form>
      </div>
        </div>

      </div>


     </main>
    </>
  
}

