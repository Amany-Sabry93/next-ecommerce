import * as zod from 'zod'

// Checkout Schema==================================================
export const checkOutSchema =zod.object({
    details:zod.string('details must be string').nonempty('details is required'),
    phone: zod.string('phone must be string').regex(/^(\+2)?01[0125][0-9]{8}$/,'phone must be egyption number,country code is optional').nonempty('phone is required'),
    city:zod.string('city must be string').nonempty('city is required')
})

// ============================================================================================

//Register values Interface
 export type CheckoutType = zod.infer <typeof checkOutSchema>

// ============================================================================================
