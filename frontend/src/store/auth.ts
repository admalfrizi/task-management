import { api } from "@/lib/api";
import { deleteCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    [x: string]: any;
    user: User | null;
    token: string | null;
    setUser: (user: User, token: string) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            setUser: (user, token) => {
                set({ user, token });
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
        }),
        {
            name: 'auth-storage', // Key in localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
)