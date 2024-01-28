import React from "react"
import { FaBars } from "react-icons/fa6";
export default function Mobiledevice()
{
const togleItem=()=>{
alert("jkjkvkjkv")
}

    return(
        <>
        <div className=" bg-[#DEF2F1] flex justify-between text-blue h-20 w-[100%] items-center p-10">
           <div className="">logoof dairy farm</div>
           <div className="">  <FaBars className="text-2xl"  onClick={togleItem}/></div>
            </div>
        </>
    )
}