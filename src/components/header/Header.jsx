import React from 'react'
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className='py-2 bg-hbg'>
        <div className='max-w-Container mx-auto'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/4'>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                    <MdMailOutline className='text-[#fff]'/>
                    <p className='text-[white] font-pops'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className='w-full lg:w-1/4'>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                    <FaPhone className='text-[#fff]'/>
                    <p className='text-[#fff]  font-pops'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className='w-full lg:w-1/2'>
                <div className='flex lg:justify-end gap-5 pt-1 justify-center'>
                    <FaFacebookF className='text-[#fff]  font-pops'/>
                    <IoLogoTwitter className='text-[#fff]  font-pops'/>
                    <FaLinkedinIn className='text-[#fff]  font-pops'/>
                    <FaInstagram className='text-[#fff]  font-pops'/>
                </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
