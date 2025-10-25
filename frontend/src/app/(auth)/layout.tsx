import { ReactNode } from "react";
import Image from 'next/image';

const AuthLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className="relative min-h-screen bg-color-auth flex items-center justify-center">
            <div className="relative z-10">
                {children}
            </div>
            
        </main>
    )
}

export default AuthLayout