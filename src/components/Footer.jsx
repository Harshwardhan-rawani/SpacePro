import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
   <>
   <div className='bg-gray-200 pl-10 pt-10'>
    <h1 className='text-lg font-bold'>Be Ready To Grow</h1>
    <p className='mt-2'>Get exclusive <span className='font-bold'>best update</span> straight to your inbox</p>
    <div className='mt-3'>
      <input type="text"  className='xl:w-72 h-12 w-50 sm:w-64' placeholder='email@gmail.com...' />
      <button className='bg-black text-white h-12 px-4'>Ok</button>
    </div>
    <br />
    <table className='lg:w-1/4 wd-3/4'>
        <tr>
            <th className='text-start w-1/3'>Important Links</th>
            <th className='text-start w-1/3'>Links</th>
        </tr>
        <tr>
            <td>Home</td>
            <td>Home</td>
        </tr>
        <tr>
            <td>About</td>
            <td>About</td>
        </tr>
        <tr>
            <td>Service</td>
            <td>Service</td>
        </tr>
        <tr>
            <td>Login</td>
            <td>Login</td>
        </tr>
    </table>
    <br />
    <h1 className='font-bold text-lg'>Contact us</h1>

      <div className='mt-2'>
       <div className='flex'>
        <div><FaLocationDot className='h-10 w-5' /></div>
        <p className='ml-2 mt-2'>Dhanbad, Jharkhand</p>
        </div>
       <div className='flex'>
        <div><MdOutlineMail className='h-10 w-5'  /></div>
        <p className='ml-2 mt-2'>harsh@gmail.com</p>
        </div>
       <div className='flex'>
        <div><FaPhoneAlt className='h-10 w-5'/></div>
        <p className='ml-2 mt-2'>+91 1234567890</p>
        </div>
      </div>
   </div>
   </>
  )
}

export default Footer
