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

interface ErrorList {
    type: string;
    errorValue: string
}

interface LoginResponse {
    user: User;
    access_token: string;
    token_type: string;
}

interface RegisterResponse {
    user: User;
    token: string;
}

interface ResponseData<T, U> {
    success: boolean;
    code: number;
    message: string;
    data: T | U | null;
}