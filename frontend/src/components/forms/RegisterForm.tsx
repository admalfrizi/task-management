import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import TextFields from "../TextFields"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import Link from "next/link"

type RegisterProps = {
    router ?: AppRouterInstance
}

export const RegisterTitle = () => {
    return (
        <div className="text-center mb-3">
            <h1 className="font-poppins font-bold text-gray-700 text-5xl">Register</h1>
            <p className="font-roboto text-subtitle mt-5">
                Let’s Sign up first for enter into Square Website. Uh She Up!
            </p>
        </div>
    )
}

export const RegisterForm = ({ router } : RegisterProps ) => {
    return (
        <form>
            <div className="flex flex-col space-y-8">
                <div className="flex flex-row space-x-4 w-full">
                    <TextFields type="name" placeholder="First Name" id="firstName" name="firstName" value={""} onChange={undefined}/>
                    <TextFields type="name" placeholder="Last Name" id="lastName" name="lastName" value={""} onChange={undefined}/>
                </div>
                <div className="flex flex-row space-x-4">
                    <TextFields type="phone" placeholder="Phone Number" id="phoneNumber" name="phoneNumber" value={""} onChange={undefined}/>
                    
                </div>
                <div className="w-full">
                    <TextFields type="email" placeholder="Email" id="email" name="email" value={""} onChange={undefined}/>
                </div>
                <div className="flex flex-row space-x-4">
                    <TextFields type="password" placeholder="Password" id="password" name="password" value={""} onChange={undefined}/>
                    <TextFields type="password" placeholder="Confirm Password" id="cpassword" name="cpassword" value={""} onChange={undefined}/>
                </div>
                <div>
                    <p className="font-roboto text-sm font-normal pb-3">Tell us about yourself</p>
                    <Textarea className="placeholder-roboto-subtitle" placeholder="Hello my name..."/>
                </div>
                <div className="flex gap-x-4 w-full mt-5">
                    <Link href="/sign-in" className="flex-1 py-3 px-5 text-center text-xs font-poppins font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Login
                    </Link>
                    <Button className="flex-4 py-3 px-5 text-center text-xs font-poppins font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Register
                    </Button>
                </div>
            </div>
        </form>
    )
}