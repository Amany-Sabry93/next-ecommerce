import { CheckoutType } from "@/schema/checkout.schema"
import getMyToken from "@/utilities/GetMyToken"




// Handle online payment function
export default async function makeOnlinePayment(cardId:string,domain:string ,formValues:CheckoutType) {
         const token = await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${domain}`,{
     
        method:'POST',
         body: JSON.stringify({
            shippingAddress:formValues
         }
         ),
        headers: {
            token:`${token}`,
            "Content-Type": "application/json",
          },

    })
    const data = await response.json()
    return data
    
}

// Handle Cash Payment Function

export  async function makeCashPayment(cardId:string,formValues:CheckoutType) {
         const token = await getMyToken()
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cardId}`,{
     
        method:'POST',
         body: JSON.stringify({
            shippingAddress:formValues
         }
         ),
        headers: {
            token:`${token}`,
            "Content-Type": "application/json",
          },

    })
    const data = await response.json()
    return data
    
}
