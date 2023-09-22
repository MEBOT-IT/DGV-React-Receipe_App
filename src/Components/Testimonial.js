import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  return (<>
    <div className="car_slider">
    <button class="Car_Button" className="car_prev_butt" onClick={prevSlide}><i class="fa-solid fa-caret-left" style={{color:"#442A00"}}></i></button>
    <h1 className='car_h1'>Our Valuables</h1>
      <div className="car_slide">
        <div className="car_img_name">
          <div className="car_btn_img">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </div>
        <h2>{slides[currentSlide].title}</h2>
        </div>
        <p>{slides[currentSlide].content}</p>
        <h3 style={{fontSize:"medium"}}>{slides[currentSlide].StarRating} <i class="fa-solid fa-star" style={{color:"#442A00"}}></i></h3>
        {/* <p>{slides[currentSlide].chefstars}</p> */}
      </div>
     <button class="Car_Button" className="Car_next_butt" onClick={nextSlide}><i class="fa-solid fa-caret-right" style={{color:"#442A00"}}></i></button>
     </div>
     </>
  );
};
export default Testimonial;
