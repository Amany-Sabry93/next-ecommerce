"use client";
import makeOnlinePayment, { makeCashPayment } from "@/api/checkout.api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cartContext } from "@/context/cart.context";
import { checkOutSchema, CheckoutType } from "@/schema/checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";


export default function Checkout() {
  const {cardId}:{cardId:string}=useParams()
  const[paymentFlag,setPaymentFlag]=useState('')
  const context=useContext(cartContext)
  const router=useRouter()

  const myForm = useForm<CheckoutType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver:zodResolver(checkOutSchema),
    mode:'all'



  });

  // Handle Check out Function
 async function handleCheckout(values:CheckoutType) {
  if(paymentFlag=='cash'){
    const data = await makeCashPayment(cardId,values)
    context?.handleCart()
    router.push('/allorders')
    
  }else{

     const data = await makeOnlinePayment(cardId,'https://next-ecommerce-rust-five.versel.app',values)
    if(data.status=='success'){
      window.location.href=data.session.url
    }
  }

 
    
  }

  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto  bg-fuchsia-50   shadow rounded-xl  my-5 pb-5 pt-1">
            <h1 className="text-center text-gray-500 font-bold text-3xl my-7">
              Checkout Now
            </h1>

            <div>
              <Form {...myForm}>
                <form
                  onSubmit={myForm.handleSubmit(handleCheckout)}
                  className="m-5 space-y-6"
                >
                  {/*=========== details======= */}
                  <FormField
                    control={myForm.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500 text-lg">
                          Details:
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* ============================ */}
                  
                  {/*=========== phone======= */}
                  <FormField
                    control={myForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500 text-lg">
                          Phone:
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* ============================ */}

                 
                  {/*=========== city======= */}
                  <FormField
                    control={myForm.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500 text-lg">
                          City:
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* ============================ */}

                  {/* Button */}
                  <div className="flex justify-center gap-5 items-center">
                    <Button onClick={()=>{setPaymentFlag('online')}} className="bg-fuchsia-300 hover:bg-fuchsia-400 hover:text-gray-100 text-gray-500 w-[30%] font-semibold text-lg px-25 md:text-xl">
                      Online Payment
                    </Button>
                     <Button onClick={()=>{setPaymentFlag('cash')}} className="text-fuchsia-300 hover:text-fuchsia-800 hover:bg-gray-300 bg-gray-500 w-[30%] font-semibold text-lg px-25 md:text-xl">
                      Cash Payment
                    </Button>


                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
