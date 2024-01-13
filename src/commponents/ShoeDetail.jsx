import { useState } from "react";
import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import Select from "./Select";

function ShoeDetail({shoe, onClickAdd}) {
    const [form, setForm] = useState({size:null,qty:null});
    
    return <div className=" dark:text-white flex flex-col lg:flex-row-reverse space-y-4">
        <div className="flex-1 lg:ml-28">
            <div className=" h-full bg-gradient-to-br from-[#F637CF] from-5% via-40% via-[#E3D876] to-[#4DD4C6]">
                <img className="animate-float " src={shoe.src} />
            </div>
            
        </div>
        <div className=" flex-1  space-y-6">
            <div className=" text-5xl font-black md:text-9xl ">
               {shoe.title}
            </div>
            <div className=" font-medium md:text-xl">
                {shoe.description}
            </div>
            <div className="flex space-x-6">
            <div className="text-3xl font-extrabold md:text-6xl">
                {shoe.price} $
            </div>
            <Select 
            onChange={(qty)=>setForm({...form, qty})}
            title={"QTY"} options={QTY} />
            <Select 
            onChange={(size)=>setForm({...form, size})}
            title={"SIZE"} options={SIZES} />
            </div>
            <div className=" space-x-10">
                <button 
                onClick={()=>{onClickAdd(shoe, form.qty, form.size)}}
                className=" dark:text-black dark:bg-white btn-press-anim h-14 w-44 bg-black text-white active:bg-gray-700 hover:bg-gray-900">
                    Add to bag
                </button>
                <a href="#" className="text-lg font-bold underline underline-offset-4">
                    View Details
                </a>
            </div>
        </div>
    </div>
}

export default ShoeDetail;