'use client'
import Image from 'next/image'
import  { useState } from 'react'
import { Button } from '../ui/button'
import { Loader2, Trash } from 'lucide-react'
import { Product } from '@/Interfaces/wishlist'
import { removeProductFromWishlist } from '@/api/wishlist.api'
import toast from 'react-hot-toast'

export default function WishlistItem({product }:{product:Product }) {
    const[isLoading,setIsLoading]=useState(false)
    // Handle Delete From Cart Function
    async function handleDeleteFromWishlist(){
      setIsLoading(true)
      try{
        const data= await removeProductFromWishlist(product._id)
    console.log(data)
    if(data.status == 'success'){
     toast.success('product removed successfully')
     let sum =0
     
     
    
    }
      }catch(error){
        toast.error('errror occured')
    
      }finally{
        setIsLoading(false)
      }
    
    }

  return <>
   <main>
       <div className="flex justify-between items-center border-b-2 py-5 ">
            {/* left side of cart product */}
            <div className=" flex  gap-3 items-center ">
              <Image src={product.imageCover} alt={product.title} width={200} height={150} className="w-25"/>
             <div className="space-y-1">
               <h3 className="text-gray-500 ">{product.title}</h3>
              <h4 className="text-gray-500 my-5"> Price: {product.price} EGP   </h4>
              <Button disabled={isLoading} onClick={handleDeleteFromWishlist} className="bg-fuchsia-400 text-white hover:bg-fuchsia-500">
                 {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Trash/>
              )}
                
                 Remove 
                 </Button>
             </div>
            </div>
            
            
          </div>
  
    </main>
    
  
  
  
  
  </>
}
