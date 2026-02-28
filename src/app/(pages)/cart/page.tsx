 'use client'
import { clearCart } from "@/actions/addToAction.action"
import CartItem from "@/components/CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { cartContext } from "@/context/cart.context";
import { CartRes } from "@/Interfaces/CartInterfaces";


 
 export default   function Cart () {
  const[isLoading,setIsLoadng]=useState(true)
 const context = useContext(cartContext)
 const[cartData,setCartData]=useState<CartRes|undefined>(undefined)
 
   
   


// Handle Getting Product From Cart=====================
  async function handleGetProductFromCart() {
 const data:CartRes|undefined= await context?.handleCart()
   setIsLoadng(false)
   setCartData(data)
   
  }
  useEffect(()=>{
   handleGetProductFromCart()
  },[])
// ====================================================

  // Handle loading===============
  if(isLoading){
    return  <div className='min-h-[80vh] flex items-center justify-center bg-fuchsia-100'>
        <div className='flex flex-col justify-between items-center'>
            {/* Trendy Buy Logo */}
            <div className='flex items-center justify-center mb-8'>
                <div className='w-12 h-12 bg-gray-600 flex items-center justify-center mr-3 rounded-xl'>
                    <span className='text-white font-bold text-2xl'>T</span>

                </div>
                <span className='font-bold text-3xl text-gray-500'>TrendyBuy</span>


            </div>
            {/* Spinner */}
            <div className='relative w-16 h-16 flex items-center justify-center'>
                <div className='w-16 h-16 border-4 border-fuchsia-200 border-t-fuchsia-950 rounded-full animate-spin mx-auto absolute inset-0'>
                <div className='w-12 h-12 border-4 border-fuchsia-100 border-b-fuchsia-700 rounded-full animate-spin-slow absolute inset-1 transform -translate-0.5'></div>

                </div>
            </div>

        </div>

    </div>

  }
  // ============================
  // Handle Clear Cart Function
  async function handleClearCart() {
    try{
    const data = await clearCart()
    context?.setAllProducts(data.data.products)
     context?.setTotalPrice(data.data.totalCartPrice||0)
     context?.setNumOfCartItems(data.data.products.length)
   toast.success(' cart cleared successfully')
    }catch(err){
      toast.error('error occurred')
    }
      
  }
  
  
   return <>
   <main>
    
     <div className="container mx-auto">
      <div className="bg-fuchsia-100 my-10 p-10 rounded-xl">
      <div className="flex justify-between items-center ">
         <div>
         <h2 className="flex items-center gap-3 text-3xl text-gray-500">
          <ShoppingCart className="text-3xl text-gray-500"/>
          Shopping Cart
        </h2>
        {/* Total Cart Price */}
        <h3 className="text-fuchsia-400 my-2"> Total Cart Price:{context?.totalPrice} EGP</h3>
       </div>
        {/* Clear Cart Button  */}
        <Button onClick={handleClearCart} className="bg-fuchsia-400 hover:bg-fuchsia-700">Clear Cart</Button>

      </div>
      {context?.allProducts?.length==0 ?
      <div className="flex justify-center items-center  py-10 ">
        <h2 className="text-gray-500 mr-3    ">
        Cart cleared ,New adventure begins! Lets go shopping ..... 
      
      </h2>
      <Link className="px-5 py-2 rounded-lg text-white bg-fuchsia-500 " href={'/products'}> Happy Shopping</Link>
    
      </div>
      
      :
      <>
           
      { context?.allProducts?.map((product)=>  <CartItem key={product.product._id} product={product} />)}

       <div className="flex justify-center items-end my-10 ">
      <Link href={`/checkout/${cartData?.cartId}`}> <Button className="w-full bg-fuchsia-400 hover:bg-white hover:text-fuchsia-500 hover:outline-fuchsia-500 hover:outline-solid py-7 px-30  text-2xl">Go to Checkout</Button></Link>
       </div>

       </>
      }

      
      </div>

    </div>
    
   </main>
  
    
   </>
 }
 