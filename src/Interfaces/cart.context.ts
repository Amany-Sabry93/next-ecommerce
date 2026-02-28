import { CartItemType, CartRes } from "./CartInterfaces"


export interface CartContextType {
  numOfCartItems: number | null
  setNumOfCartItems: React.Dispatch<React.SetStateAction<number | null>>

  allProducts: CartItemType[]
  setAllProducts: React.Dispatch<React.SetStateAction<CartItemType[]>>

  totalPrice: number
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>

  handleCart: () => Promise<CartRes>
  userId:string
}
