const TableBooking = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center px-4 md:px-6 py-8" 
         style={{ backgroundImage: 'url(https://res.cloudinary.com/dvubt5hiv/image/upload/v1731393163/jlijjlqyektsaznbjyi3.jpg)' }}>
      <div className=" bg-opacity-80 p-6 md:p-12 rounded-lg max-w-6xl w-full items-start text-white">
        
        {/* Text Section */}
        <div className="max-w-md mb-10 md:mb-0">
          <span className="text-red-500 font-bold text-lg">Book Now</span>
          <h1 className="text-3xl md:text-5xl font-bold my-4 bebas-neue-regular">BOOK YOUR TABLE</h1>
          <p className="text-gray-300 mb-6">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>
        </div>

        {/* Form Section */}
        <form className="w-full max-w-lg">
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <input 
              type="text" 
              placeholder="Your Name*" 
              className="w-full h-12 px-4 bg-transparent text-white border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full h-12 px-4 bg-transparent text-white border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              required
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <input 
              type="date" 
              placeholder="Reservation Date" 
              className="w-full h-12 px-4 bg-transparent text-white border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              required
            />
            <input 
              type="number" 
              placeholder="Total People" 
              className="w-full h-12 px-4 bg-transparent text-white border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              required
            />
          </div>

          <textarea 
            placeholder="Message" 
            className="w-full p-4 bg-transparent text-white border-2 border-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4" 
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5  py-2 text-sm"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
    );
};

export default TableBooking;
