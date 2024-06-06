import React, { useEffect } from 'react';
import space1 from "../assets/space1.jpg";
import space2 from "../assets/space2.jpg";
import space3 from "../assets/space3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Carosel() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative lg:h-screen overflow-hidden h-[75vh] sm:h-[75vh] md:h-[75vh] w-screen">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={space1}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
                            alt="Slide 1"
                        />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={space2}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
                            alt="Slide 2"
                        />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                        <img
                            src={space3}
                            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
                            alt="Slide 3"
                        />
                    </div>
                </div>
                
                {/* Slider indicators */}
                <div className="absolute z-40 flex -translate-x-1/2 top-20 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to={0}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to={1}
                    />
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to={2}
                    />
                </div>

                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none z-40"
                    data-carousel-next=""
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
                <div className='absolute top-0 z-30 h-full w-full bg-[#0004]'></div>
                <div className='absolute w-full bottom-0 text-white z-40 bg-[#38383881] px-2 py-4' data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
                    <h1 className='font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:mb-2'>Explore The Space</h1>
                    <p className='italic text-center mb-3 text-sm lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit quaerat, aspernat</p>
                    <center><button className='lg:px-8 lg:py-2 px-4 py-1 lg:text-lg bg-white text-black font-semibold'>Explore</button></center>
                </div>
            </div>
            <br />
        </>
    );
}

export default Carosel;
