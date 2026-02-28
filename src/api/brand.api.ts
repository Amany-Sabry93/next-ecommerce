// ALL Brands Function
'use server'
export default async function getAllBrands() {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
    const {data} = await response.json()
    return data
    
}

// Brand Details Function
export async function getBrandDetails(brandId:string) {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
    const data = await response.json()
    return data
    
}

// Related Brand Products
export async function getRelatedBrand(brandId:string) {
    const response = await  fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`)
    const data =await response.json()
    return data
    
}
