import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSadCry } from 'react-icons/fa';
import "./css/card.css"
function Cards() {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true
          
        });
    }, []);
    
    return (
        <>
            <div className="p-2 flex justify-around  xl:flex-row lg:flex-col flex-col sm:flex-col md:flex-col xl:space-x-5 cursor-pointer px-10 lg:mt-10">
                <div data-aos="fade-up" data-aos-delay="0" className="bg-[#202871] p-6 rounded-lg shadow-lg mb-4 hover:bg-gray-800 xl:w-1/3 w-full">
                    <div className='flex relative'>
                        <div className='h-28'>
                        <svg
                        className='animate lg:w-20 lg:h-20 w-16 h-16 text-white'
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      
                        data-aos="zoom-in"
                        
  
    >
      <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2 3-8.9 7-20.5 11.8-33.8H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3H200c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8 13.4 72.9 9.3 194.8-111.4 276.7-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V380.8c-14.1 4.9-26.4 8.9-35.7 11.9-11.2 3.6-23.4.5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
                        </svg>
                        </div>
                        <div className='absolute lg:right-32 right-0 md:left-28 sm:left-28'>
                        <h2 className="text-2xl font-bold text-white">HST</h2>
                       <h2 className="text-2xl font-bold mb-4 text-white">300-1500km</h2>
                        </div>
                 
                    </div>
                    
                    <p className="text-center text-white">Used for astronomical observations , capturing stunning images of the universe</p>
                </div>
              
                <div data-aos="fade-up" data-aos-delay="200" className="bg-[#202871] p-6 rounded-lg shadow-lg mb-4 hover:bg-gray-800 xl:w-1/3 w-full">
                    <div className='flex relative'>
                        <div className='h-28'>
                        <svg
                        className='lg:w-20 lg:h-20 h-16 w-16 animate text-white'
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
   
    >
      <path d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z" />
    </svg>
                        </div>
                        <div className='absolute lg:right-32 right-0 md:left-28 sm:left-28 text-white'>
                        <h2 className="text-2xl font-bold">ISS</h2>
                       <h2 className="text-2xl font-bold mb-4 ">500-1500km</h2>
                        </div>
                 
                    </div>
                    
                    <p className="text-center text-white">it's a habitable artificial satelite orbiting Earth and serves as a space environment reasearch laboratory</p>
                </div>
              
                <div data-aos="fade-up" data-aos-delay="400" className="bg-[#202871] p-6 rounded-lg shadow-lg mb-4 hover:bg-gray-800 xl:w-1/3 w-full">
                    <div className='flex relative'>
                        <div className='h-28'>
                        <svg
                        className='animate lg:h-20 lg:w-20 h-16 w-16 text-white'
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    
 
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
                        </div>
                        <div className='absolute lg:right-32 right-0 md:left-28 sm:left-28'>
                        <h2 className="text-2xl font-bold text-white">GPS</h2>
                       <h2 className="text-2xl font-bold mb-4 text-white ">300-1500km</h2>
                        </div>
                 
                    </div>
                    
                    <p className="text-center text-white">Part of the Global Positioning system(GPS) used for navigation</p>
                </div>
              
            </div>
        </>
    );
}

export default Cards;
