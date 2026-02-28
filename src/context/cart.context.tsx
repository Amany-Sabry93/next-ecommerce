'use client'
import { getProductFromCart } from '@/actions/addToAction.action'
import {createContext, useEffect, useState} from 'react'
import { CartContextType } from '@/Interfaces/cart.context'
import { CartItemType } from '@/Interfaces/CartInterfaces'

export const cartContext = createContext<CartContextType | null>(null)




export default   function CartProvider({children}:{children: React.ReactNode}){
const [numOfCartItems, setNumOfCartItems] = useState<number | null>(null)
  const [allProducts, setAllProducts] = useState<CartItemType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const[userId,setUserId]=useState('')
  console.log(userId);
  
  
    // Handle Cart Function
async function handleCart() {
    const data = await getProductFromCart()
    setUserId(data?.data?.cartOwner)
    
    
    setAllProducts(data?.data?.products)
    
    let sum = 0
    data?.data?.products.forEach((product: CartItemType) => {
      sum += product.count
    })
    setNumOfCartItems(sum)
    setTotalPrice(data?.data?.totalCartPrice)
    return data
  }


 useEffect(() => {
    handleCart()
  }, [])



    return <cartContext.Provider value={{numOfCartItems,userId,setNumOfCartItems,handleCart,setAllProducts,allProducts,totalPrice,setTotalPrice}} >
        {children}
    </cartContext.Provider>
}