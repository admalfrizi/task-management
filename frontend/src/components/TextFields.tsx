import { ChangeEventHandler, MouseEventHandler } from "react";
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";

interface TextFieldParams {
    type: string;
    id: string;
    name: string; 
    isShowPass?: boolean;
    label: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    onShowPass?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface IconHidePassParams {
    type: string;
    isShow?: boolean;
    onShowPass?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconHidePass = ({type, isShow, onShowPass}:IconHidePassParams) => {
    return (
        <div className="absolute bottom-1 right-2"> 
            { type === "password" 
                ? <Button size="icon-sm" onClick={onShowPass} className="text-gray-600 bg-transparent hover:bg-transparent">
                    {
                        isShow 
                        ? <Eye/> 
                        : <EyeOff size={20}/>
                    }
                </Button> 
                : null
            }
        </div>
    )
}

const TextFields = ({type, id, name, placeholder, onShowPass, isShowPass, label, value, onChange} :TextFieldParams ) => {
    
    return (
        <div className="relative mt-6">
            <Input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="bg-white peer h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm
                        placeholder-white placeholder:font-normal
                        focus-visible:ring-1 focus-visible:ring-blue-500 focus:outline-none "
                placeholder={placeholder}
            />
            <Label
                htmlFor={id}
                className="absolute -top-6 left-2 bg-transparent px-1 text-xs text-white
                        transition-all
                        font-normal
                        peer-focus:text-blue-500 peer-focus:bg-transparent" 
            >
                {label}
            </Label>
            <IconHidePass type={type} isShow={isShowPass} onShowPass={onShowPass}/>
        </div>
    )
}

export default TextFields