import React from 'react'
import Link from 'next/link';
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5"
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const HeaderMain = () => {
    return (
        <>
            <div className='flex items-center justify-between py-6 px-8'>
                <h1 className='text-[28px] font-bold text-[#252b42]'>Bandage</h1>
                <ul className='flex items-center text-[#737373] font-bold text-[18px] gap-x-5 mr-48'>
                    <li><Link href="/">Home</Link></li>
                    <li className='flex items-center text-[#252b42] font-medium gap-x-3'><Link href="/shop">Shop</Link><FaChevronDown className='text-lg' /></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/pages">Pages</Link></li>
                </ul>
                <div className='flex items-center gap-x-2 text-blue-500 font-bold text-[18px]'>
                    <FaRegUser /> Login / Register
                    <div className='flex items-center gap-x-6 ml-6'>
                        <p className='text-xl flex items-center'><IoSearchSharp /></p>
                        <p className='text-xl flex items-center gap-x-1'><TbShoppingCart />1</p>
                        <p className='text-xl flex items-center gap-x-1'><FaRegHeart />1</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMain;
