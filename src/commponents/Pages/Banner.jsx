const Banner = () => {
  return (
    <div
      className="relative text-white p-10 md:flex md:items-center md:justify-between h-[600px]" // Set a height for the banner
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dvubt5hiv/image/upload/v1731265554/xxglcfgkagnwoyvk5dhw.png')`,
      }}
    >
      {/* Red semi-transparent overlay */}
      <div className="absolute inset-0 bg-red-600 opacity-80 z-0"></div>

      {/* Content Section - Positioned Absolutely */}
      <div className=" absolute z-10 ml-72  ">
        <h1 className="  text-4xl md:text-6xl font-semibold mb-4  bg-gradient-to-l from-[#e93939] to-[rgba(24, 5, 4, 5)] lg:pr-3">
          Taste the Authentic <br /> Saudi Cuisine
        </h1>
        <p className="mb-6">
          Among the best Saudi chefs in the world, serving <br /> you something
          beyond flavor.
        </p>
        <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500">
          Explore Menu
        </button>
      </div>

      {/* Right section: Image */}
      <div className=" relative  right-0 bottom-0  ml-[700px] h-full flex justify-center items-end">
        <img
          src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731298255/rtp514zt17ixbojvnlou.png"
          alt="Saudi Cuisine"
          className="h-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
