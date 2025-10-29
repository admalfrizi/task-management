"use client";

import { ReactNode, useEffect, useState } from "react"
import Navbar from './../../components/Navbar';
import { getUserAuthenticated } from "@/lib/action/auth.action";
import { allTaskByUserId } from "@/lib/action/task.action";

const MainLayout = ({children}: {children: ReactNode}) => {
    const [ user, setUser ] = useState<User>()

    useEffect(() => {
        const getTaskData = async () => {
            const taskData = await allTaskByUserId();

            console.log("response : ", taskData)
        }

        getTaskData();
    },[user])

    return (
        <main className="relative min-h-screen bg-color-auth flex items-center justify-center">
            <Navbar />
            <div className="relative z-10 w-full">
                {children}
            </div>
            
        </main>
    )
}

export default MainLayout