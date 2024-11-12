import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaSquareFull } from "react-icons/fa";

const CustomersSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Khalid Al Dawasry",
      location: "Jeddah, Saudi",
      image: "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298251/zotnmc3dafrpzvwnrzdm.png",
      review:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      video: "https://www.youtube.com/embed/0-NOb0m13bo",
      isYoutube: true,
    },
    {
      name: "Sarah Al Harbi",
      location: "Riyadh, Saudi",
      image: "https://res.cloudinary.com/dvubt5hiv/image/upload/v1727429594/samples/man-portrait.jpg",
      review:
        "Amazing taste! The spices and tenderness of the chicken make it unforgettable. Definitely coming back for more.",
      video: "https://youtu.be/uCcDez1N7sM?si=puspnCazVY9Iu54C",
      isYoutube: false,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
        <img
        src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/wdpo2eiavlwyceuvez2s.png"
        className="absolute  left-0 top-1/4 transform -translate-y-1/2 h-52 hidden lg:block z-10"
      
      />
      <img
        src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/gz8v3q1xgpkaxdpwrioa.png"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-96 mt-20 hidden lg:block z-10"
       
      />
        <div className="relative bg-[#FBF7F2] py-5 lg:pb-0 pb-16">
       
      {/* Main Content */}
      <div className="relative h-auto lg:h-[600px] px-4 md:px-16 lg:px-44">
        <div className="flex items-center space-x-1 text-xs lg:text-sm font-semibold lg:mt-10">
          <FaSquareFull className="text-[5px] lg:text-[7px]" />
          <h6>Crispy, Every Bite Taste</h6>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h1 className="bebas-neue-regular text-2xl sm:text-3xl lg:text-5xl uppercase">
            What Some of my Customers Say
          </h1>
          <div className=" absolute left-0 lg:ml-[84%] lg:mt-0 mt-[420%] ml-32 flex space-x-2 lg:space-x-4">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              <BsChevronLeft className="text-black text-lg sm:text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            >
              <BsChevronRight className="text-black text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        
        <div className="relative  mt-10 h-auto lg:h-[420px] flex flex-col lg:flex-row items-center bg-yellow-500 shadow-lg  overflow-hidden z-20">
        <img
        src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731265429/l4xdhzrs6qshqm1bxrpn.svg"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 lg:h-20 h-14 mt-64 lg:mt-20  block z-10"
       
      />
  {/* Text Section */}
  <div className="text-black p-8 lg:px-24 lg:w-1/2 flex flex-col justify-between order-2 lg:order-1">
    <p className="text-base lg:text-lg mb-4">{testimonials[currentIndex].review}</p>
    <div className="flex items-center mt-4 space-x-2">
      <div>
        <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
        <p>{testimonials[currentIndex].location}</p>
      </div>
    </div>
    <div className="relative flex items-center p-4 bg-yellow-500 rounded-lg">
      <div className="flex-grow">
        <div className="relative -ml-5  mt-2 h-[2px] bg-red-500">
          <div className="absolute right-0 top-0 h-[5px] w-8 bg-black"></div>
        </div>
      </div>
      <img
        src={testimonials[currentIndex].image}
        className="absolute lg:ml-[390px] lg:-mt-5 -mt-20 ml-[155px] w-11 h-11 rounded-full lg:mb-10 border border-gray-300"
        alt="Customer"
      />
    </div>
  </div>

  {/* Video Section */}
  <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-full aspect-w-16 aspect-h-9 order-1 lg:order-2">
    {testimonials[currentIndex].isYoutube ? (
      <iframe
        src={testimonials[currentIndex].video}
        title="Customer Testimonial Video"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ) : (
      <video
        src={testimonials[currentIndex].video}
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        controls
      />
    )}
  </div>
</div>

      </div>
    </div>
    </div>
  );
};

export default CustomersSay;
