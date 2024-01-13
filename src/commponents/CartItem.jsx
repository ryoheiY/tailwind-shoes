import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";
export function CartItem({ item, size, qty, onClickTrash }) {
    return (
        <div 
        className=" space-y-2 cursor-pointer
         hover:bg-[#DAFFA2] bg-gray-50 
         dark:bg-transparent dark:hover:bg-night-50
          m-2 p-2 ">
            <div className=" space-x-2 flex ">
                <img className="  h-24" src={item.src} />
                <div className=" space-y-2">
                    <div className=" font-bold dark:text-white">{item.title}</div>
                    <div className=" text-sm text-gray-400">{item.description}</div></div>
                <div className=" font-bold  dark:text-white">{item.price}$</div>
            </div>
            <div className=" flex justify-between pl-32">
                <div className="flex space-x-6">
                    <div>
                        <div className=" font-bold dark:text-white">SIZE</div>
                        <Select
                        defaultValue={size}
                        title="" options={SIZES} className={"w-16 p-1 pl-2"}/>
                    </div>
                    <div>
                        <div className=" font-bold dark:text-white">QTY</div>
                        <Select 
                        defaultValue={qty}
                        title="" options={QTY} className={"w-16 p-1"}/>
                    </div>
                </div>
                <button onClick={()=>{onClickTrash(item.id)}}><CiTrash size={25} className="text-black dark:text-white" /></button>
            </div>
        </div>
    );
}