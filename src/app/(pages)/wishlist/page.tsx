'use client'

import { getProductFromWishlist } from "@/api/wishlist.api"
import { Button } from "@/components/ui/button"
import WishlistItem from "@/components/WishlistItem/WishlistItem"
import { ProductsResponse } from "@/Interfaces/wishlist"
import { Heart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Wishlist() {
    const[isLoading,setIsLoadng]=useState(true)
    const[allProducts,setAllProducts]=useState<ProductsResponse|[]>([])

  // Handle  get products frm wishlist============
  async function handleGetProductsFromWishlist() {
  const data=  await getProductFromWishlist()
    console.log(data);
    setAllProducts(data.data)
    setIsLoadng(false)
    
  }
  useEffect(()=>{
    handleGetProductsFromWishlist()
  },[])
  // ============================================
   // Handle loading
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
  // ==================================================

  return <>
   <main>
    
     <div className="container mx-auto">
      <div className="bg-fuchsia-100 my-10 p-10 rounded-xl">
      <div className="flex justify-between items-center ">
         <div>
         <h2 className="flex items-center gap-3 text-3xl text-gray-500">
          <Heart className="text-3xl text-gray-500"/>
          Wishlist Cart
        </h2>
      
        
       </div>
       
      </div>
      {allProducts?.length==0 ?
      <div className="flex justify-center items-center  py-10 ">
        <h2 className="text-gray-500 mr-3    ">
        Wishlist cleared ,New adventure begins! Lets go shopping ..... 
      
      </h2>
      <Link className="px-5 py-2 rounded-lg text-white bg-fuchsia-500 " href={'/products'}> Happy Shopping</Link>
    
      </div>
      
      :
      <>
           
      { allProducts?.map((product)=><WishlistItem key={product._id} product={product} />  )}

      
       </>
      }

      
      </div>

    </div>
    
   </main>
  
  
  
  
  
  </>
}
