'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import TextFields from "../TextFields"
import { TLoginSchema } from "@/lib/validation"
import { signIn } from "@/lib/action/auth.action"
import { useAuthStore } from "@/store/auth"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useLoginForm } from "@/lib/custom-hooks/useLoginForm"

export const LoginTitle = () => {
    return (
        <div className="text-center mb-10">
            <h1 className="font-poppins font-bold text-gray-700 text-5xl">Sign In</h1>
            <p className="font-roboto text-subtitle mt-5">
                Just sign in if you have an account in here. Enjoy our Website
            </p>
        </div>
    )
}

const errorStyle = 'text-red-500 text-sm mt-1';

export const LoginForm = () => {
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
            <div className="flex flex-col gap-6">
                <TextFields 
                    type="email" 
                    placeholder="Email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className={errorStyle}>{errors.email}</p>}
                <TextFields 
                    type="password" 
                    placeholder="Password" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className={errorStyle}>{errors.password}</p>}
                <div className="flex flex-row justify-between">
                    <div className="flex items-center gap-3 font-normal">
                        <Checkbox id="fpCheck" className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
                        <Label htmlFor="fpCheck" className="font-normal text-remember-me text-xs">Remember Me</Label>
                    </div>
                    <Link href="/forgot-pass">
                        <p className="text-xs text-fp font-roboto font-medium">
                            Forgot Password ?
                        </p>
                    </Link>
                </div>
                <Button type="submit" className="bg-blue-600 text-white" variant="outline" size="lg">
                    Login
                </Button>
            </div>
        </form>
    )
}

