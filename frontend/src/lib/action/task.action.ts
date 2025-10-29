'use server';

import { cookies } from "next/headers";
import { api } from "../api";

export async function allTaskByUserId() : Promise<ResponseData<Array<Task>>>
{
    try
    {
        const response = await api.get("task");

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

export async function getTask(id: string) : Promise<ResponseData<Task>> {
    try
    {
        const dataCookies = await cookies();
        const response = await api.get(`task/${id}`);

        return {
            success: true, 
            code: 200, 
            message: response.data.message, 
            data: response.data
        }
    }
    catch (err)
    {
        return {
            success: false, 
            code: 500, 
            message: "Server Error", 
            data: null
        }
    }
}