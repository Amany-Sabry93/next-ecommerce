 "use server"

import getMyToken from "@/utilities/GetMyToken";

// Add Product To Cart Function
export async function addToCartAction(productId:string) {
     const token = await getMyToken()
     if(!token){
      throw new Error('login to add to cart')


     }


     const response = await fetch(
        "https://ecommerce.routemisr.com/api/v2/cart",
        {
          method: "POST",
          body: JSON.stringify({ productId }),
          headers: {
            token:`${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      return data
}


// Get Product From Cart Function
export  async function getProductFromCart(){
  const token =await getMyToken()
 const response =await fetch('https://ecommerce.routemisr.com/api/v2/cart',{
  headers:{
    token:`${token}`,
    'Content-Type':'application/json'
  }
 })
 const data = await response.json()
 return data
}

//Delete Products From Cart
export async function removeProductsFromCart(productId:string){
  const token =await getMyToken()
  const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,
    {
      method:'DELETE',
      headers:{
        token:`${token}`,
        'Content-Type':'application/json'
      }
    }
  )
  const data = await response.json()
  return data


}


// Update Product Count
export async function updateProductCount(productId:string,newCount:number) {
  const token =await getMyToken()
  const response =await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
    method:'PUT',
    body:JSON.stringify({
      count:String(newCount)
    }),
    headers:{
        token:`${token}`,
        'Content-Type':'application/json'
    }

  })
  const data = await response.json()
  return data
  
}


// Clear User Cart
export async function clearCart() {
  const token =await getMyToken()
  const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
    method:'DELETE',
    headers:{
       token:`${token}`,
        'Content-Type':'application/json'

    }
  })
  const data = await response.json()
  return data
  
}