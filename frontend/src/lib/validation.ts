import { z } from 'zod';

const isNotEmptyString = (val: string) => val !== "";

export const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(3, 'Username is too short'),
  username: z.string().min(3, 'Username is too short'),
  email: z.email(),
  password: z.string().min(8),
  cpassword: z.string()
}).refine((data) => data.password === data.cpassword, {
    error: "Your confirm password isn't same with password data",
    path: ['confirmPassword'],
});

// Type inference for type-safety
export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;