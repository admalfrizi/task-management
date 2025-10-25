'use client'
import { Button } from "../ui/button"
import TextFields from "../TextFields"
import { useLoginForm } from "@/lib/custom-hooks/useLoginForm"
import { useState } from "react"

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
    const [showPassword, setShowPassword] = useState(false);
    const {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
        isPending,
    } = useLoginForm();

    return (
        <form onSubmit={handleSubmit}>
            <div className={`flex flex-col ${errors.email && errors.password ? "gap-0" : "gap-6" }`}>
                <TextFields 
                    type="email"
                    placeholder="Masukan Nama Anda"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} label={"Nama"}                
                />
                {errors.email && <p className={errorStyle}>{errors.email}</p>}
                <TextFields 
                    type="password"
                    placeholder="Masukan Password Anda"
                    id="password"
                    name="password"
                    isShowPass={showPassword}
                    onShowPass={() => setShowPassword(!showPassword) }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} label={"Password"}                
                />
                {errors.password && <p className={errorStyle}>{errors.password}</p>}
                <Button type="submit" className="bg-color-auth mt-3 border-0 hover:bg-amber-100 text-white" variant="outline" size="lg">
                    Login
                </Button>
            </div>
        </form>
    )
}

