const Banner = () => {
  return (
    <div className="relative">
      <img
        src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731307138/obf6fq8w2a6g58tbzey6.png"
        className="absolute top-4 right-4 lg:mr-[363px] hidden lg:inline-block lg:mt-2 z-30"
        alt=""
      />

      <div
        className="relative text-white lg:p-10 md:p-10 p-5 md:flex md:items-center md:justify-between h-[600px]" // Set a height for the banner
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvubt5hiv/image/upload/v1731265554/xxglcfgkagnwoyvk5dhw.png')`,
        }}
      >
        <div className="absolute inset-0 bg-red-600 opacity-80 z-0"></div>

        <div className="absolute z-10 lg:ml-72">
          <h1 className="text-3xl md:text-6xl font-semibold mb-4 bg-gradient-to-l lg:from-[#e93939] lg:to-[rgba(15, 5, 4, 5)] lg:pr-3">
            Taste the Authentic <br /> Saudi Cuisine
          </h1>
          <p className="mb-6">
            Among the best Saudi chefs in the world, serving <br /> you
            something beyond flavor.
          </p>
          <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-500">
            Explore Menu
          </button>
        </div>

        <div className="relative right-0 bottom-0 lg:mt-0 md:mt-0 mt-16 lg:ml-[700px] h-full flex justify-center items-end">
          <img
            src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731307141/wx3veov3f4ntwxvha7wo.png"
            alt="Saudi Cuisine"
            className="h-[500px] object-contain"
          />

          <div className="absolute top-0 lg:ml-[600px] lg:mt-[470px] mt-[410px] ml-64 bg-yellow-400 rounded-full lg:p-2 p-1 transform -translate-y-10 -translate-x-10 z-20">
            <h1 className="text-black lg:text-2xl text-sm font-semibold border-dashed rounded-full border-black bebas-neue-regular lg:px-5 lg:p-3 p-1 px-3 border-2">
              TODAY <br /> OFFER
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
