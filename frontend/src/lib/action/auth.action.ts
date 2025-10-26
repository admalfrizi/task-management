'use server';

import { cookies } from "next/headers";
import { api } from "../api";
import { loginSchema, registerSchema, TLoginSchema, TRegisterSchema } from "../validation";

export async function signIn(data: TLoginSchema) : Promise<ResponseData<LoginResponse, ErrorList[]>>  {
    const validateData = loginSchema.safeParse(data);
    const errorList: ErrorList[] = [];

    if(!validateData.success) 
    {
        validateData.error?.issues.forEach((data) => {
            const errorData = {
                type: data.path[0].toString(),
                errorValue: data.message
            }

            errorList.push(errorData)
        })

        return { 
            success: false, 
            code: 400, 
            message: 'Invalid input data.', 
            data: errorList 
        };
    }

    try
    {
        const { email, password } = validateData.data;
        const response = await api.post('login', { email, password });

        // (await cookies()).set('auth_token', access_token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict',
        //     path: '/',
        //     maxAge: 60 * 60 * 24 * 7, // 7 days
        // });

        return {
            success: true, 
            code: 200, 
            message: response.data.message, 
            data: response.data
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

export async function signUp(data: TRegisterSchema) : Promise<ResponseData<RegisterResponse, ErrorList[]>> {
    const validateData = registerSchema.safeParse(data);
    const errorList: ErrorList[] = [];

    if(!validateData.success) 
    {
        validateData.error?.issues.forEach((data) => {
            const errorData = {
                type: data.path[0].toString(),
                errorValue: data.message
            }

            errorList.push(errorData)
        })

        return { 
            success: false, 
            code: 400, 
            message: 'Invalid input data.', 
            data: errorList 
        };
    }

    try
    {
        const response = await api.post('register', validateData.data);

        console.log("result", response.data)

        // (await cookies()).set('auth_token', access_token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: 'strict',
        //     path: '/',
        //     maxAge: 60 * 60 * 24 * 7, // 7 days
        // });

        return {
            success: true, 
            code: 200, 
            message: response.data.message, 
            data: response.data
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