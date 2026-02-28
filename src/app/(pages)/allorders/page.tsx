'use client'
import { cartContext } from "@/context/cart.context"
import { Order } from "@/Interfaces/allordersInterface"
import { useContext, useEffect, useState } from "react"

export default function MyOrders() {
const context = useContext(cartContext)
 const[userOrders,setUserOrders]=useState<Order[]|null>([])
 console.log(userOrders);
 
async function getUserOrders(userId:string) {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
  const data =await response.json()
  return data
}

async function handleGetUserOrders(){
  const data:Order[] = await getUserOrders(context?.userId as string)
  return data


}
 useEffect(()=>{
   handleGetUserOrders()
  },[])




  return  <>
  <main>
      <div className="container  bg-fuchsia-100  mx-auto">
          
        <h1 className="text-center text-gray-500 text-3xl font-bold py-5">My Orders</h1>
        
      
      </div>
    </main>
    
    </>
  
}
