import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
  return (
   <>
   <div className='bg-[#1e2565] p-4 flex xl:flex-row flex-col xl:justify-around xl:space-y-0 space-y-7'>
    <div>
    <h1 className='lg:text-2xl text-xl  font-bold text-white'>Be Ready To Grow</h1>
    <p className='mt-2 text-white'>Get exclusive <span className='font-bold'>best update</span> straight to your inbox</p>
    <div className='mt-3'>
      <input type="text"  className='xl:w-50 h-12  sm:w-64 p-2' placeholder='email@gmail.com...' />
      <button className='bg-black text-white h-12 px-4 font-bold'>Ok</button>
    </div>
    </div>
    <div>
    <table className='xl:w-[25em] w-screen'>
        <tr>
            <th className='text-start w-1/2 text-white lg:text-xl text-lg'>Important Links</th>
            <th className='text-start w-1/2 text-white lg:text-xl text-lg'>Links</th>
        </tr>
        <tr>
            <td className='text-white'>Home</td>
            <td className='text-white'>Home</td>
        </tr>
        <tr>
            <td className='text-white'>About</td>
            <td className='text-white'>About</td>
        </tr>
        <tr>
            <td className=' text-white'>Service</td>
            <td className=' text-white'>Service</td>
        </tr>
        <tr>
            <td className='text-white'>Login</td>
            <td className='text-white'>Login</td>
        </tr>
    </table>
    </div>
    <div>   <h1 className=' text-white font-bold xl:text-xl text-lg'>Contact us</h1>

<div className=' text-white mt-2'>
 <div className=' text-white flex'>
  <div><FaLocationDot className=' text-white h-10 w-5' /></div>
  <p className=' text-white ml-2 mt-2'>Dhanbad, Jharkhand</p>
  </div>
 <div className=' text-white flex'>
  <div><MdOutlineMail className=' text-white h-10 w-5'  /></div>
  <p className=' text-white ml-2 mt-2'>harsh@gmail.com</p>
  </div>
 <div className=' text-white flex'>
  <div><FaPhoneAlt className=' text-white h-10 w-5'/></div>
  <p className=' text-white ml-2 mt-2'>+91 1234567890</p>
  </div>
</div></div>
  
   </div>
   </>
  )
}

export default Footer
