import { Card } from "../ui/card"
import { LoginForm , LoginTitle }from '@/components/forms/LoginForm';
import { RegisterForm, RegisterTitle } from "./RegisterForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from 'next/link';

interface AuthFormProps {
    isLogin: boolean;
    router ?: AppRouterInstance
}

export const AuthForm = ({isLogin, router} : AuthFormProps) => {
    return (
        <div className="flex flex-col items-center">
            {
                isLogin ? <LoginTitle/> : <RegisterTitle/>
            } 
            <Card className="w-full border-0 max-w-md sm:min-w=[520px] sm:p-5 bg-card-auth">
                {
                    isLogin ? <LoginForm /> : <RegisterForm router={router} />
                }
            </Card>
            { isLogin 
                ? <div className="w-full text-center mt-8">
                    <Link href="/sign-up">
                        <p className="font-roboto font-medium text-sm text-blue-400">
                            Sudah punya akun sebelumnya ? Daftar Disini
                        </p>
                    </Link>
                </div>
                : ""
            }
        </div>
    )
}