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
            <h1 className="font-poppins font-bold text-white text-5xl">Daftarkan Diri Anda</h1>
            <p className="font-roboto text-subtitle text-white mt-5">
                Untuk bisa mengakses web ini, anda harus membuat akun terlebih dahulu
            </p>
        </div>
    )
}

export const RegisterForm = ({ router } : RegisterProps ) => {
    return (
        <form>
            <div className="flex flex-col space-y-8">
                <TextFields type="name" placeholder="Masukan Nama Lengkap" id="firstName" name="firstName" value={""} onChange={undefined} label={"Nama Anda"}/>
                <TextFields type="name" placeholder="Masukan Username" id="firstName" name="firstName" value={""} onChange={undefined} label={"Username Anda"}/>
                <TextFields type="email" placeholder="Masukan Email" id="email" name="email" value={""} onChange={undefined} label={"Email"}/>
                <div className="flex flex-row justify-between w-full">
                    <TextFields type="password" placeholder="Masukan Password" id="password" name="password" value={""} onChange={undefined} label={"Password Anda"}/>
                    <TextFields type="password" placeholder="Konfirmasi Ulang Password" id="cpassword" name="cpassword" value={""} onChange={undefined} label={"Konfirmasi Password"}/>
                </div>
                <div className="flex gap-x-4 w-full mt-5">
                    <Link href="/sign-in" className="flex-1 py-3 px-5 text-center text-xs font-poppins font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Login
                    </Link>
                    <Button className="flex-4 py-3 px-5 text-center text-xs font-poppins font-semibold text-white bg-color-auth rounded-lg hover:bg-cyan-900 focus:outline-none focus:ring-0 focus:ring-blue-500">
                        Register
                    </Button>
                </div>
            </div>
        </form>
    )
}