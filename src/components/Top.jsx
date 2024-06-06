import { IoRocket } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
function  Top() {


  return (
    <>
        <div className='flex justify-between px-10 py-3 items-center  fixed w-screen z-50 bg-[#161616dd]'>
          <div className='flex items-center lg:text-xl md:text-lg sm:text-md text-white font-bold'>
            <IoRocket className='-rotate-45'/> H-Space</div>
          <button className='text-white border-2 p-2 rounded-md'>Login</button>
        </div>
      </>
  )
}

export default Top
