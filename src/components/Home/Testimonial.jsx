import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import img1 from "../../assets/images-removebg-preview.png"
import img2 from "../../assets/images-removebg-preview.png"
import img3 from "../../assets/images-removebg-preview.png"

const testimonials = [
  {
    name: "The Johnson Family",
    university: "University of Maryland",
    text: `The decorations and gifts from WowChristmas transformed our home. It truly brought the Christmas spirit to life!`,
    image: img1, // Replace with actual image path
    videoUrl: "/path-to-video.mp4", // Replace with actual video path
  },
  {
    name: " Nkechi A",
    university: "University of Ibadan",
    image: img2,
    text: "WowChristmas has been our go-to for Christmas decor. Their customer service and products are unmatched.",
    videoUrl: "/path-to-video.mp4",
  }
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const { name, university, text, image, videoUrl } =
    testimonials[currentTestimonial];

  return (
    <div className="flex flex-col items-center py-28">
      {/* Title */}
      <h2 className="text-3xl text-[#312A46] font-semibold mb-9 sm:w-[90%] mx-auto text-center">
      Hear from Our Happy Customers
      </h2>
      

      {/* Testimonial Section */}
      <div className="flex  md:flex-col items-center w-[90%]  mx-auto">
        {/* Left Section: Testimonial Text */}
        <div className="w-1/2 md:w-full md:order-2 md:mt-2 p-4 md:p-2">
        <p className="font-semibold text-3xl">{name}</p>
          
          <p className="text-lg text-[#3D3D3D] italic mb-0 mt-3">{text}</p>
          
        </div>

        {/* Right Section: Image and Video */}
        <div className="w-1/2 md:w-full md:order-1  p-0 rounded-3xl relative">
          <img
            src={image}
            alt={name}
            className="rounded-3xl w-full h-[450px] object-cover"
          />
          <a className="absolute inset-0 rounded-3xl flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60">
            <button className="text-white text-xl font-semibold">Testimonial by <span className="text-[#d40a08]">{name}</span> </button>
          </a>
        </div>
      </div>

      {/* Navigation Carousel */}
      <div className="flex items-center space-x-4 mt-14">
        <button
          onClick={handlePrev}
          className="bg-[#d40a08] text-white rounded-full p-2"
        >
          <FaChevronLeft />
        </button>
  {/*  Desktop Carousel */}
        <div className="flex space-x-4 sm:hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-2 border rounded-xl gap-3 flex cursor-pointer box-shadow ${
                currentTestimonial === index ? "border-[#d40a08]" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className=" w-[130px] h-[130px] rounded-2xl object-cover"
              />
             <div className="my-auto pr-6">
             <p className="text-lg text-[#272525] font-bold text-left">{testimonial.name}</p>
              
             </div>
            </div>
          ))}
        </div> 
         {/* End Desktop Carousel */}

        {/* Mobile Carousel */}
        <div className="sm:flex justify-center w-fit space-x-4 hidden">
          <div
            className="p-2 border border-[#d40a08] rounded-lg flex  cursor-pointer"
            onClick={() => setCurrentTestimonial(currentTestimonial)}
          >
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="rounded-lg w-[120px] h-[120px] object-cover"
            />
            <div className="pl-4 my-auto">
            <p className="text-sm text-left">{testimonials[currentTestimonial].name}</p>
           
            </div>
          </div>
        </div>
 {/*End Mobile Carousel */}
        <button
          onClick={handleNext}
          className="bg-[#d40a08] text-white rounded-full p-2"
        >
        <FaChevronRight />
        </button>
      </div>
      
    </div>
  );
};

export default Testimonial;
