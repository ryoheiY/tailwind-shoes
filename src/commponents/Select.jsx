import { AiOutlineDown } from "react-icons/ai";
import { twMerge } from "tw-merge";
function Select({
    title,
    options,
    className,
    defaultValue,
    onChange
}) {
    return <div className="relative dark:text-black ">
        <select 
            onChange={(e)=>{onChange(e.target.value)}}
            defaultValue={defaultValue || ""}
            className={twMerge(
                `w-24 appearance-none border border-gray-300 bg-white p-4 
              ${className}`
            )}>
            <option value="" disabled hidden>{title}</option>
            {options.map(opt => {
                return <option key={opt}>{opt}</option>
            })}

        </select>
        <div className=" pointer-events-none flex-center pr-3 absolute inset-y-0 right-0">
            <AiOutlineDown />
        </div>
    </div>
}

export default Select;