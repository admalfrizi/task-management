interface ResponseData<T> {
    content?: T | null;
    message: string;
    errors: string[]
}