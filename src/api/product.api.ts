'use server'

// ALL Products functions
export default async function getAllProducts() {
     const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products",
  );
  const {data} = await response.json();
  return data

    
}


// Product Details Function
export  async function getProductDetails(productId:string) {
    const response = await fetch( `${process.env.BASE_URL}/products/` + productId );
  const { data} = await response.json();
  return data
    
}
// Rlated Products Function
export async function getRelatedProducts(productId:string) {
  const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${productId}`)
  const {data} =await response.json()
  return data
  
}