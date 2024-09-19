import React from 'react'
import logo from "../../assets/Logo.png"
const Banner = () => {
  return (
   <section className='bg-[#f40404] py-3 border-1 border-[yellow]'>
    <div className='max-w-Container mx-auto'>
      <div className='flex items-center'>
        <div className='w-1/4'>
        <img src={logo} alt="" />
        </div>
        <div className='w-3/4'>
        <ul className='flex justify-end gap-7'>
          <li className='text-[16px] font-pops text-white hover:text-black duration-700 ease-in-out font-semibold p-4'>Home</li>
          <li  className='text-[16px] font-pops text-white  hover:text-black duration-700 ease-in-out font-semibold p-4'>About</li>
          <li  className='text-[16px] font-pops text-white  hover:text-black duration-700 ease-in-out font-semibold p-4'>Services</li>
          <li  className='text-[16px] font-pops text-white  hover:text-black duration-700 ease-in-out font-semibold p-4'>Gallery</li>
          <li  className='text-[16px] font-pops text-white  hover:text-black duration-700 ease-in-out font-semibold p-4'>Blog</li>
          <li  className='text-[16px] font-pops text-white  hover:text-black duration-700 ease-in-out font-semibold border-2 border-[white] p-4 rounded-full'>CONTACT</li>
        </ul>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Banner
