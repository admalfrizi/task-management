'use client';

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import TextFields from "../TextFields"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"
import { signUp } from "@/lib/action/auth.action";

type RegisterProps = {
    router ?: AppRouterInstance
}

type ErrorCheck = {
    name?: string[] | undefined;
    username?: string[] | undefined;
    email?: string[] | undefined;
    password?: string[] | undefined;
    cpassword?: string[] | undefined;
};

export const RegisterTitle = () => {
    return (
        <div className="text-center mb-3">
            <h1 className="font-poppins font-bold text-white text-5xl">Daftarkan Diri Anda</h1>
            <p className="font-roboto text-subtitle text-white mt-5">
                Untuk bisa mengakses web ini, anda harus membuat akun terlebih dahulu
            </p>
        </div>
    )
}

export const RegisterForm = ({ router } : RegisterProps ) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");

    const [errors, setErrors] = useState<ErrorCheck | undefined>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setErrors(undefined);

        const stateData = {
            name,
            username,
            email,
            password,
            cpassword
        };

        const registerResponse = await signUp(stateData as any);

        if(registerResponse.success)
        {
            setEmail("");
            setUsername("");
            setName("");
            setPassword("");
            setCPassword("");

            console.log("success :", registerResponse)
        }
        else 
        {
            const errorData = registerResponse.data as ErrorList[];
            // setErrors({
            //     email: [ errorData[0].errorValue ],
            //     password: [ errorData[1].errorValue ]
            // });

            console.log("error : ", errorData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-8">
                <TextFields 
                    type="name" 
                    placeholder="Masukan Nama Lengkap" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    label={"Nama Anda"}
                />
                <TextFields 
                    type="name" 
                    placeholder="Masukan Username" 
                    id="username" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    label={"Username Anda"}
                />
                <TextFields 
                    type="email" 
                    placeholder="Masukan Email" 
                    id="email" name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    label={"Email"}
                />
                <div className="flex flex-row justify-between w-full">
                    <TextFields 
                        type="password" 
                        placeholder="Masukan Password" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        label={"Password Anda"}
                    />
                    <TextFields 
                        type="password" 
                        placeholder="Konfirmasi Ulang Password" 
                        id="cpassword" 
                        name="cpassword" 
                        value={cpassword} 
                        onChange={(e) => setCPassword(e.target.value)} 
                        label={"Konfirmasi Password"}
                    />
                </div>
                <div className="flex gap-x-4 w-full mt-5">
                    <Link href="/sign-in" className="flex-1 py-3 px-5 text-center text-xs font-poppins font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Login
                    </Link>
                    <Button type="submit" className="flex-4 py-3 px-5 text-center text-xs font-poppins font-semibold text-white bg-color-auth rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring-0 focus:ring-blue-500">
                        Register
                    </Button>
                </div>
            </div>
        </form>
    )
}