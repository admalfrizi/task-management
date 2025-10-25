'use client'
import { AuthForm } from "@/components/forms/AuthForm"
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();

    return (
        <AuthForm isLogin={false} router={router}/>
    )
}

export default SignUp