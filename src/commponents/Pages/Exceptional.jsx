import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

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

  return (
    <div className="px-4 py-8 md:px-12 ">
      <img src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298251/ux3nek1icfytdtxvnhdt.png" className="absolute right-0 h-52 mt-96 hidden lg:inline-block" alt="" />
      <div className="  flex flex-col lg:flex-row lg:px-44 lg:py-20">
        {/* Left side image */}
        <div className=" relative right-0 bottom-0 lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298251/tr4301an0nxoabvdraq4.png"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            alt="Exceptional Service"
          />
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
  );
};

export default Exceptional;
