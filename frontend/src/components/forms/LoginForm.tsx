'use client';

import { Button } from "../ui/button"
import TextFields from "../TextFields"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signIn } from "@/lib/action/auth.action";
import { loginSchema, TLoginSchema } from "@/lib/validation";
import router from "next/router";

type ErrorCheck = {
  email?: string[] | undefined;
  password?: string[] | undefined;
};

export const LoginTitle = () => {
    return (
        <div className="text-center mb-10">
            <h1 className="font-poppins font-bold text-white text-5xl">Silahkan Login</h1>
            <p className="font-roboto text-subtitle text-white mt-5">
                Silahkan masuk dengan data anda yang telah di daftarkan
            </p>
        </div>
    )
}

const errorStyle = 'text-red-500 text-sm my-3';

export const LoginForm = () => {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<ErrorCheck | undefined>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrors(undefined);

        const stateData = {
            email,
            password,
        };

        const loginResponse = await signIn(stateData as any);

        if(loginResponse.success)
        {
            setEmail("");
            setPassword("");

            console.log("success :", loginResponse)
        }
        else 
        {
            const errorData = loginResponse.data as ErrorList[];
            setErrors({
                email: [ errorData[0].errorValue ],
                password: [ errorData[1].errorValue ]
            });

            console.log("error : ", errors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={`flex flex-col ${errors?.email && errors?.password ? "gap-0" : "gap-6" }`}>
                <TextFields 
                    type="email"
                    placeholder="Masukan Nama Anda"
                    id="email"
                    name="email"
                    label={"Email"} 
                    value={email} onChange={(e) => setEmail(e.target.value)}                
                />
                {errors?.email && <p className={errorStyle}>{errors?.email}</p>}
                <TextFields 
                    type="password"
                    placeholder="Masukan Password Anda"
                    id="password"
                    name="password"
                    label={"Password"} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}                
                />

                {errors?.password && <p className={errorStyle}>{errors?.password}</p>}
                <Button type="submit" className="bg-color-auth mt-3 border-0 hover:bg-amber-100 text-white" variant="outline" size="lg">
                    Login
                </Button>
            </div>
        </form>
    )
}

