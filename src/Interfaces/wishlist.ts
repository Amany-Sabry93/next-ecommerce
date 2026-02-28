export type ProductsResponse = Product[];
 




export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  sold: number;
  imageCover: string;
  images: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
  subcategory: SubCategory[];
  brand: Brand;
  __v: number;
}



   export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}