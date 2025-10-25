interface LoginParams {
    email : string;
    password: string
}

interface User {
    id: string;
    fullname: string;
    email: string;
    role: string
}

interface LoginResponse {
    user: User;
    access_token: string;
    token_type: string;
}

interface ResponseData<T> {
    success: boolean;
    code: number;
    message: string;
    data?: T | null;
}