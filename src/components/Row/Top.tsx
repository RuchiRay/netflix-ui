import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { GoThumbsup } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
export const Top = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2">
                <div className='bg-white w-10 h-10 flex items-center justify-center rounded-full'>
                    <BsFillPlayFill className=" text-2xl shrink-0 text-black " />
                </div>
                <div className='w-10 flex  h-10 items-center border border-neutral-500 justify-center rounded-full'>
                    <FiPlus className='text-2xl' />
                </div>
                <div className='w-10 flex  h-10 items-center border border-neutral-500 justify-center rounded-full'>
                    <GoThumbsup className='text-2xl' />
                </div>
            </div>
            <div className='w-10 flex  h-10 items-center border border-neutral-500 justify-center rounded-full'>
                <FaChevronDown className='text-xl' />
            </div>
        </div>
    )
}
