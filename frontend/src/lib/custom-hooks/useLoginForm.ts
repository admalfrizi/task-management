import { useAuthStore } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "../action/auth.action";
import { loginSchema } from "../validation";

type FormErrors = {
  [key: string]: string | undefined;
};

export function useLoginForm() 
{
    const router = useRouter();
    const setAuth = useAuthStore((state) => state.setUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const mutation = useMutation({
        mutationFn: signIn,
        onSuccess: (response) => {
            if (response.success && response.code == 200) {
                setAuth(response.data?.user!!, response.data?.access_token!!);
                router.push('/dashboard');
            }
        },
        onError: (error) => {

        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const validationResult = loginSchema.safeParse({ email, password });

        if (!validationResult.success) {
            const fieldErrors = validationResult.error.flatten().fieldErrors;
            const newErrors: FormErrors = {};
            for (const key in fieldErrors) {
                if (Object.prototype.hasOwnProperty.call(fieldErrors, key)) {
                    const typedKey = key as keyof typeof fieldErrors;
                    
                    if (fieldErrors[typedKey]) {
                        newErrors[key] = fieldErrors[typedKey]![0];
                    }
                }
            }

            setErrors(newErrors);
            return;
        }

        mutation.mutate(validationResult.data);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
        isPending: mutation.isPending,
    };
}