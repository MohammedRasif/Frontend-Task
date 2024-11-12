import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaBox, FaUtensils, FaShoppingBag } from "react-icons/fa";


const Exceptional = () => {
  const [activeTab, setActiveTab] = useState("about");

  const content = {
    about: {
      title: "Exceptional Culinary Experience and Delicious Food",
      description:
        "Indulge in a truly exceptional culinary experience that celebrates the rich and diverse flavors of Saudi Arabia. Our talented chefs combine tradition with creativity, crafting dishes that pay homage to the authentic tastes of Saudi cuisine while adding modern touches. Each ingredient is carefully sourced to ensure quality and authenticity, from fragrant spices to fresh produce.",
    },
    experience: {
      title: "Unmatched Culinary Expertise",
      description:
        "With years of expertise in crafting authentic Saudi dishes, our team of chefs delivers a dining experience like no other. We combine traditional Saudi recipes with innovative techniques to create meals that are as rich in history as they are in flavor. From the sizzling grills to the carefully spiced stews, every dish is prepared with precision and passion.",
    },
    contact: {
      title: "Get in Touch with Us",
      description:
        "We would love to hear from you! Whether you’re interested in making a reservation, inquiring about our menu, or simply wanting to know more about our services, our team is here to help. Reach out to us through phone, email, or our social media channels, and we’ll get back to you as soon as possible.",
    },
  };

  const features = [
    {
      icon: <FaBox className="text-red-600 text-3xl" />,
      title: "FAST DELIVERY",
      description: "Within 30 minutes",
    },
    {
      icon: <FaUtensils className="text-red-600 text-3xl " />,
      title: "ABSOLUTE DINING",
      description: "Best buffet restaurant",
    },
    {
      icon: <FaShoppingBag className="text-red-600 text-3xl" />,
      title: "PICKUP DELIVERY",
      description: "Grab your food order",
    },
  ];

  return (
    <div className="  ">
     <div className="relative">
  {/* Background Image */}
  <img
    src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298251/ux3nek1icfytdtxvnhdt.png"
    className="absolute right-0 h-52 mt-96 hidden lg:inline-block"
    alt=""
  />

<div className="flex flex-col lg:flex-row lg:px-44 lg:py-20 lg:p-0 p-5">
  {/* Left side image with overlay box */}
  <div className="relative lg:w-1/2 mb-8 lg:mb-0">
    <img
      src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298251/tr4301an0nxoabvdraq4.png"
      className="w-full h-64 sm:h-80 md:h-96 object-cover"
      alt="Exceptional Service"
    />

    {/* Overlay Box */}
    <div className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-white p-4 rounded-lg shadow-md w-48 h-28 flex items-center justify-center">
      {/* Circle with Number */}
      <div className="relative flex items-center justify-center w-16 h-16">
        <svg className="absolute inset-0" viewBox="0 0 36 36">
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="currentColor"
            className="text-gray-300"
            strokeWidth="3"
          />
          {/* Foreground Circle */}
          <circle
            cx="18"
            cy="18"
            r="15.5"
            fill="none"
            stroke="currentColor"
            className="text-yellow-500"
            strokeWidth="3"
            strokeDasharray="85 100" // Controls circle progress
            strokeLinecap="round" // Rounded ends
            transform="rotate(-90 18 18)" // Start at top
          />
        </svg>
        <span className="text-lg font-semibold text-gray-800">50+</span>
      </div>

      {/* Text Box */}
      <div className="ml-4 p-1 rounded">
        <p className="text-gray-800 text-[20px] font-semibold">Market</p>
        <p className="text-gray-800 text-[14px] font-semibold">Experiences</p>
      </div>
    </div>
  </div>

  {/* Right side content */}
  <div className="lg:w-1/2 lg:pl-10">
          {/* Buttons to switch content */}
          <div className="flex space-x-4 mb-6 border-b-2 border-red-600">
            {["about", "experience", "contact"].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 ${
                  activeTab === tab ? "bg-red-600 text-white" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="transition-all duration-500 ease-in-out transform" key={activeTab}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold bebas-neue-regular mb-4">
              {content[activeTab].title}
            </h2>
            <p className="text-gray-700">{content[activeTab].description}</p>
          </div>
          
          <div className="flex  space-x-5  items-center mt-5">
            <button className="px-4 py-2 bg-yellow-400 font-semibold text-sm">
              ABOUT MORE
            </button>
            <div className="flex items-center space-x-2 lg:mt-3 ">
              <FiPhoneCall />
              <h4 className="font-semibold">01976600215</h4>
            </div>
          </div>
        </div>

  
</div>

        
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-8  py-8">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex items-center space-x-4 lg:space-x-10 mx-auto sm:mx-0 lg:ml-96 p-4 lg:p-6 bg-white rounded-lg  w-full sm:w-auto"
    >
      <div>
        <h3 className="bg-white rounded-full p-3 shadow-md">{feature.icon}</h3>
      </div>
      <div className="ml-1  sm:text-left">
        <h3 className="text-lg font-semibold bebas-neue-regular text-gray-800">{feature.title}</h3>
        <p className="text-gray-600 roboto-thin">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Exceptional;
