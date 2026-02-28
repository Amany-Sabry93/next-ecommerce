'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { CartItemType, CartRes} from "@/Interfaces/CartInterfaces";
import { removeProductsFromCart, updateProductCount } from "@/actions/addToAction.action";
import {  useContext, useState } from "react";
import toast from "react-hot-toast";
import { cartContext } from "@/context/cart.context";

export default function CartItem({product }:{product:CartItemType }) {
    const[isLoading,setIsLoading]=useState(false)

   const context= useContext(cartContext)



// Handle Delete From Cart Function
async function handleDeleteFromCart(){
  setIsLoading(true)
  try{
    const data:CartRes= await removeProductsFromCart(product.product._id)

if(data.status == 'success'){
 toast.success('product removed successfully')
 context?.handleCart()

}
  }catch(error){
    toast.error('errror occured')

  }finally{
    setIsLoading(false)
  }

}

// Handle Update Count Function
async function handleUpdateCount(newCount:number) {
  setIsLoading(true)
 try{
 const data  =await updateProductCount(product.product._id,newCount)
if(data.status == 'success'){
toast.success('product updated successfully')
context?.handleCart()
}

 }catch(error){
  toast.error('error occurred')
  
 }finally{
  setIsLoading(false)
 }
}






  return <>
  <main>
     <div className="flex justify-between items-center border-b-2 py-5 ">
          {/* left side of cart product */}
          <div className=" flex  gap-3 items-center ">
            <Image src={product.product.imageCover} alt={product.product.title} width={200} height={150} className="w-25"/>
           <div className="space-y-1">
             <h3 className="text-gray-500 ">{product.product.title}</h3>
            <h4 className="text-gray-500 my-5"> Price: <span className="mr-2 bg-fuchsia-200 p-1 rounded-xl">{product.price} EGP </span>*<span>{product.count}</span>=<span className="ml-2 rounded-xl p-1 bg-fuchsia-200">{product.price*product.count} EGP </span> </h4>
            <Button disabled={isLoading} onClick={handleDeleteFromCart} className="bg-fuchsia-400 text-white hover:bg-fuchsia-500">
               {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Trash/>
            )}
              
               Remove 
               </Button>
           </div>
          </div>
          {/*right side of cart product  */}
          <div className="flex gap-3 items-center">
            <Button disabled={isLoading} onClick={()=> handleUpdateCount(product.count+1)} className=" disabled:bg-fuchsia-300 border-2 border-fuchsia-400 bg-transparent hover:bg-fuchsia-500 hover:text-white text-fuchsia-400 font-semibold  text-xl">+</Button>
            <h4 className="text-gray-500 font-semibold text-lg">{isLoading? <i className="fa-solid fa-spinner fa-spin text-fuchsia-600 "></i> :product.count}</h4>
             <Button disabled={isLoading}  onClick={()=> handleUpdateCount(product.count-1)} className="disabled:bg-fuchsia-300 border-2 border-fuchsia-400 bg-transparent hover:bg-fuchsia-500 hover:text-white text-fuchsia-400 font-semibold  text-xl">-</Button>

          </div>
        </div>

  </main>
  
  
  
  </>
}
