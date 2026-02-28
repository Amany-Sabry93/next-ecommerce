// All SubCategories Function
export default async function getAllSubcategories() {
    const response =await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)
    const { data} = await response.json()
    return data
    
}


//   Sub Category Details FUNCTION
export async function getSubCategoryDetails(subcategoryId:string) {
   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${subcategoryId}`)
   const{data}= await response.json()
   return data

   
}
