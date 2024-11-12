import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaSquareFull } from "react-icons/fa";

const PopularFoot = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index
  const foodItems = [
    {
      name: "Vegetables Burger",
      description: "Barbecue Italian cuisine pizza",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/gtmlcmi4ta30zfbsksgo.png",
    },
    {
      name: "Spacial Pizza",
      description: "Barbecue Italian cuisine pizza",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/kowd5n63cbyfk6ic3uwo.png",
    },
    {
      name: "Spacial French Fries",
      description: "Barbecue Italian cuisine",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/oicjjqsftcvovxkvfvvs.png",
    },
    {
      name: "Cuisine Chicken",
      description: "Japanese Cuisine Chicken",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/qlkxrj9sx6ahbxo8oieo.png",
    },
    // Additional items
    {
      name: "Vegan Salad",
      description: "Fresh organic vegetables",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/salad.png",
    },
    {
      name: "Grilled Tofu",
      description: "Barbecue-style grilled tofu",
      image:
        "https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/tofu.png",
    },
  ];

  // Slide logic: each "page" contains 4 items
  const itemsPerPage = 4;
  const totalPages = Math.ceil(foodItems.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      {/* Wrapping container with relative positioning */}
      <div className="relative">
        {/* site image */}
        <img
          src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298250/o8vgfv4udbdzofkhlyek.png"
          className="absolute left-0 h-52 hidden lg:inline-block"
          alt=""
        />
        <div className="px-4 md:px-16 lg:px-44 bg-[#FBF7F2] py-5">
          <div className="flex items-center space-x-1 text-sm font-semibold lg:mt-10">
            <FaSquareFull className="text-[7px]" />
            <h6>Crispy, Every Bite Taste</h6>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="bebas-neue-regular text-3xl sm:text-4xl lg:text-5xl mt-2">
              POPULAR FOOD ITEMS
            </h1>
            <div className="flex lg:flex-row flex-col items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-4">
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
          </div>

          <div className="bg-[#FBF7F2] py-10 overflow-hidden">
            {/* Grid for displaying food items with sliding effect */}
            <div
              className="flex transition-transform duration-500 ease-in-out space-x-4 sm:space-x-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {foodItems.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[100%] sm:min-w-[100px] lg:min-w-[315px] bg-white p-5 rounded-md shadow-lg text-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover mx-auto mb-4"
                  />
                  <div className="w-12 h-[2px] bg-red-500 mx-auto my-2" />
                  <h3 className="text-xl bebas-neue-regular">{item.name}</h3>
                  <p className="text-xs sm:text-sm bebas-neue-regular text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFoot;
