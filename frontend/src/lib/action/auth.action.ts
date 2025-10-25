'use server';

import { cookies } from "next/headers";
import { api } from "../api";
import { loginSchema, TLoginSchema } from "../validation";

export async function signIn(data: TLoginSchema) : Promise<ResponseData<LoginResponse>>  {
    const validateData = loginSchema.safeParse(data)

    if(!validateData.success) return { success: false, code: 400, message: 'Invalid input data.', data: null };

    try{
        const response = await api.post('login', validateData)

        const { user, token, message } = response.data

        ;(await cookies()).set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return {
            success: true, 
            code: 200, 
            message: message, 
            data: user
        }
    } 
    catch (error)
    {
        return {
            success: false, 
            code: 500, 
            message: "Server Error", 
            data: null
        }
    }
}