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

interface Task {
    id : integer,
    title : string,
    description: string,
    status : string,
    deadline : string
}

interface ResponseData<T, U = void> {
    success: boolean;
    code: number;
    message: string;
    data: T | ?U | null;
}