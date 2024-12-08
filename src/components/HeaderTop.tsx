import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
    return (
        <div>
            <div className="bg-blue-950 text-white py-4 px-8 flex justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <p className='text-[16px] flex items-center gap-x-1'><LuPhone className='text-lg' />(225) 1 555-0118</p>
                    <p className='text-[16px] flex items-center gap-x-1'><TfiEmail className='text-lg' />micelle.rizvera@example.com</p>
                </div>
                <div className="text-[16px] ">Follow us and get a chance to win 80% off</div>
                <div className="text-[16px] flex items-center gap-x-3">Follow Us : <FaInstagram /><FaYoutube /><FaFacebook /><FaTwitter /></div>
            </div>
        </div>
    )
}

export default HeaderTop;
