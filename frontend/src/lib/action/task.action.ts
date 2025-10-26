import { api } from "../api";

export async function allTaskByUserId(data: string) : Promise<ResponseData<Task>>
{
    try
    {
        const response = await api.get('task');
        console.log("result", response.data)

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