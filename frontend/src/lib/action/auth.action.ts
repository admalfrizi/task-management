// export async function signIn(data: TLoginSchema) : Promise<ResponseData<LoginResponse>>  {
//     const validateData = loginSchema.safeParse(data)

//     if(!validateData.success) return { content: null, message: validateData.error.message, errors: [ 'Invalid input data.'] };

//     try{
//         const response = await api.post('login', validateData)

//         const { user, token, message } = response.data

//         ;(await cookies()).set('auth_token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'strict',
//             path: '/',
//             maxAge: 60 * 60 * 24 * 7, // 7 days
//         });

//         return {
//             content: user,
//             message: message,
//             errors: []
//         }
//     } 
//     catch (error)
//     {
//         return {
//             content: null,
//             message: "Server Error",
//             errors: [
                
//             ]
//         }
//     }
// }