import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import space4 from "../assets/space4.jpg"
import space5 from "../assets/space5.jpg"
import space6 from "../assets/space6.jpg"
function Photo() {
    useEffect(() => {
        AOS.init({
          duration: 900, 
          once: true
        });
      }, []);
  return (
   <>
   <br />
   <div className='px-10'>
    <div className='lg:text-2xl md:text-xl sm:text-lg overline' data-aos="fade-right" data-aos-delay="0">Our Missions</div>

    <div className='flex lg:flex-row flex-col lg:justify-between lg:space-x-5  w-full'>
        <div className='lg:w-1/3 w-full my-6 shadow-lg rounded-md px-4 py-2 hover:bg-gray-100' data-aos="zoom-in" data-aos-delay="0">
         <img src={space4} alt="" className='h-72 w-full rounded-t-md shadow-lg ' />
         <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl mt-5 text-center'>Satelite</h1>
         <p className='mt-4 italic text-justify px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, a temporibus repudiandae eos cupiditate et adipisci, dolor voluptas laudantium libero, nemo quas dolore. Voluptate repellat odio incidunt corporis iusto quaerat et vel illum at rerum voluptatum quibusdam laboriosam nostrum repel</p>
        </div>
        <div className='lg:w-1/3 w-full my-6 shadow-lg rounded-md px-4 py-2 hover:bg-gray-100' data-aos="zoom-in" data-aos-delay="200">
         <img src={space5} alt="" className='h-72 w-full rounded-t-md shadow-lg ' />
         <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl mt-5 text-center'>Satelite</h1>
         <p className='mt-4 italic text-justify px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, a temporibus repudiandae eos cupiditate et adipisci, dolor voluptas laudantium libero, nemo quas dolore. Voluptate repellat odio incidunt corporis iusto quaerat et vel illum at rerum voluptatum quibusdam laboriosam nostrum repel</p>
        </div>
        <div className='lg:w-1/3 w-full my-6 shadow-lg rounded-md px-4 py-2 hover:bg-gray-100' data-aos="zoom-in" data-aos-delay="400">
         <img src={space6} alt="" className='h-72 w-full rounded-t-md shadow-lg ' />
         <h1 className='font-bold sm:text-lg md:text-xl lg:text-2xl mt-5 text-center'>Satelite</h1>
         <p className='mt-4 italic text-justify px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro, a temporibus repudiandae eos cupiditate et adipisci, dolor voluptas laudantium libero, nemo quas dolore. Voluptate repellat odio incidunt corporis iusto quaerat et vel illum at rerum voluptatum quibusdam laboriosam nostrum repel</p>
        </div>
     
        
        
    </div>
 
   </div>
   </>
  )
}

export default Photo
