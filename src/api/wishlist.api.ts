'use server'

import getMyToken from "@/utilities/GetMyToken"

// Add Product To Wishlist Function=====================================
export   async function addProductToWishlist(productId:string){
 const token=await getMyToken()
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist',{
        method:'POST',
        body: JSON.stringify({ 
            productId:productId

         }),
        headers:{
             token:`${token}`,
            "Content-Type": "application/json",

        },

    })
    const data =await response.json()
    return data

}
// =====================================================================


// Get Product from Wishlist function
export  async function getProductFromWishlist() {
    const token=await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers:{
           token:`${token}`,
            "Content-Type": "application/json", 
        }
    })
    const data = await response.json()
    return data
    
}

// =========================================================================
// Remove Product From Wishlist function
export async function removeProductFromWishlist(productId:string) {
        const token=await getMyToken()
    const response =await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        method:'DELETE',
        headers:{
               token:`${token}`,
            "Content-Type": "application/json", 
        }
    })
    const data = await response.json()
    return data
    
}