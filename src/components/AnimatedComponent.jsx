import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AnimatedComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>

    
    <div className="container mx-auto p-4">
      <div data-aos="fade-up" className="bg-white p-6 rounded-lg shadow-lg mb-4">
        <h2 className="text-2xl font-bold mb-4">Fade Up Animation</h2>
        <p className="text-gray-700">This element will fade up when scrolled into view.</p>
      </div>
      <div data-aos="fade-right" className="bg-white p-6 rounded-lg shadow-lg mb-4">
        <h2 className="text-2xl font-bold mb-4">Fade Right Animation</h2>
        <p className="text-gray-700">This element will fade right when scrolled into view.</p>
      </div>
      <div data-aos="fade-left" className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Fade Left Animation</h2>
        <p className="text-gray-700">This element will fade left when scrolled into view.</p>
      </div>

      </div>
  </>
  );
};

export default AnimatedComponent;
