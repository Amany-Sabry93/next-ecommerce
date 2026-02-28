
import * as zod from 'zod'

// Register schema=======================================================================
 export const RegisterSchema = zod.object({
    name:zod.string().nonempty('name is required').min(3,'name minmum 3 chars').max(15,'name maximum 15 chars'),
    email:zod.email('email must be valid').nonempty('email is required'),
    password:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'password must start with capital letter followed by at least 5 chars'),
    rePassword:zod.string().trim().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'password must start with capital letter followed by at least 5 chars'),
    phone:zod.string().nonempty('phone is required').regex(/^01[0125][0-9]{8}$/,'phone must be egyption number')
}).refine((object)=>object.password=== object.rePassword ,{
    path:['rePassword'],
    error:'pass dont match'
})

// ============================================================================================

//Register values Interface
 export type RegisterType = zod.infer <typeof RegisterSchema>

// ============================================================================================

// Login Schema============================================================================
 export const LoginSchema = zod.object({
   
    email:zod.email('email must be valid').nonempty('email is required'),
    password:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'password must start with capital letter followed by at least 5 chars'),
})

//Login values Interface
 export type LoginType = zod.infer <typeof LoginSchema>

// ============================================================================================
// Forget Password Schema ======================================================================
export const ForgetSchema = zod.object({
    email:zod.email('email must be valid').nonempty('email is required'),
})

//Forget values Interface
 export type ForgetType = zod.infer <typeof ForgetSchema>

// ============================================================================================

// Verify Code Schema ======================================================================
export const VerifySchema = zod.object({
    resetCode:zod.string('').nonempty('resetCode is required'),
})
//Verify values Interface
 export type VerifyType = zod.infer <typeof VerifySchema>
// ============================================================================================


// Reset Password Schema ======================================================================
export const ResetSchema = zod.object({
    email:zod.email('email must be valid').nonempty('email is required'),
    newPassword:zod.string().nonempty('password is required').regex(/^[A-Z][A-Za-z0-9]{5,}$/,'password must start with capital letter followed by at least 5 chars'),
    
})
//Verify values Interface
 export type ResetType = zod.infer <typeof ResetSchema>
// ============================================================================================


