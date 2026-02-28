// CartType 
export interface CartRes {
  status: string
  message?: string
  numOfCartItems: number
  cartId: string
  data: Data
}

// CartDataType
export interface Data {
  _id: string
  cartOwner: string
  products: CartItemType[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

// CartProductType
export interface CartItemType {
  count: number
  _id: string
  product: Product
  price: number
}
// CartProductDetailsType
export interface Product {
  subcategory: Subcategory[]
  _id: string
  title: string
  slug: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
