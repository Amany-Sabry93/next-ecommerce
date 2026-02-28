'use server'
// All Categories Function
export default async function getAllCategories() {
     const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
  const{ data}=await response.json()
  return data
  }


//   Category Details FUNCTION
export async function getCategoryDetails(categoryId:string) {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`)
   const{data}= await response.json()
   return data

   
}


// Related Categroy Products
export async function getRelatedCategory(categoryId:string) {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
   const {data} = await response.json()
   return data

   
}
