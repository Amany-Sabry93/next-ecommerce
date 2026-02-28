"use client";
import { CardFooter } from "../ui/card"; 
import { Button } from "../ui/button";
import { Heart, Loader2, ShoppingCart } from "lucide-react";
import {  CartRes } from "@/Interfaces/CartInterfaces";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { addToCartAction } from "@/actions/addToAction.action";
import { cartContext } from "@/context/cart.context";
import { useRouter } from "next/navigation";
import { addProductToWishlist } from "@/api/wishlist.api";

export default function AddToCart({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const context =useContext(cartContext)
  const router = useRouter()
  // =====================================
// Handle Add To Cart
  async function addToCart(productId: string) {
     setIsLoading(true);
    try {
     const data:CartRes = await addToCartAction(productId)
      toast.success(data.message + "")
     context?.handleCart()


    } catch (err:any) {
      
      toast.error(err?.message)
      router.push('/login')
    } finally{
         setIsLoading(false);
    }
 
  }
  // ==========================================
  // Handle Add To Wishlist
  async function handleAddToWishlist() {
      setIsLoading(true);
      try{
        const data =await addProductToWishlist(productId )
        console.log(data);
        
         toast.success(data.message + "")

      } catch (err:any) {
      
      toast.error(err?.message)
      router.push('/login')
    } finally{
         setIsLoading(false);
    }

    
  }




  return (
    <>
      <main>
        <CardFooter className="gap-3   ">
          <Button
             disabled={isLoading}
            onClick={() => addToCart(productId)}
            className="grow bg-fuchsia-400 hover:bg-fuchsia-950"
          >
            Add TO Cart{" "}
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <ShoppingCart />
            )}
          </Button>
          {/* wish list  */}
            {isLoading ?
             <Loader2 className="animate-spin" />
            :
                <Heart onClick={handleAddToWishlist} />
            }
         
  
         
        </CardFooter>
      </main>
    </>
  );
}
