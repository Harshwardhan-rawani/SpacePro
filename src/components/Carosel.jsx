import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import space1 from '../assets/space1.jpg';
import space2 from '../assets/space2.jpg';
import space3 from '../assets/space3.jpg';
import AOS from 'aos';
function Carosel() {
  useEffect(() => {
    AOS.init({
        duration: 800, 
        once: true
      
    });
}, []);

  return (
    <>
      <div
  id="carouselExampleIndicators"
  className="carousel slide relative"
  data-bs-ride="carousel"
>
  <div className="carousel-indicators absolute top-24">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active "
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner xl:h-[100vh] h-[60vh] relative">
    <div className="carousel-item active">
      <img src={space1} className="d-block w-100 xl:h-100 h-[80vh] -translate-y-2" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={space2} className="d-block w-100 xl:h-100 h-[80vh] -translate-y-2" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={space3} className="d-block w-100 xl:h-100 h-[80vh] -translate-y-2" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  <div className='bg-[#3b3b3b65] absolute bottom-0 p-4 w-screen space-y-2' data-aos="fade-right" data-aos-delay="0">
    <div className='text-center text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold'>Explore the Space</div>
    <div className="text-center text-white italic xl:block lg:block hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, laudantium necessitatibus. Quisquam impedit iure iusto.</div>
    <center><button className='bg-black rounded-md text-white p-2 font-bold'>Explore</button></center>
  </div>
</div>
 
   
    </>
  );
}

export default Carosel;
