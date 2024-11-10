const Navbar = () => {
    return (
      <div>
        <nav
          className="relative flex items-center justify-between p-4 lg:px-52"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dvubt5hiv/image/upload/v1731265554/xxglcfgkagnwoyvk5dhw.png')`,
            backgroundPosition: 'center', 
          }}
        >
          <div className="absolute inset-0 bg-red-600 opacity-80 z-0"></div>
  
          <div className="flex items-center space-x-10 z-10">
            <div className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dvubt5hiv/image/upload/v1731264754/er5zzuocxsts5ax1scei.png"
                alt="Restaurant Logo"
                className="h-8 w-8"
              />
              <h1 className="text-xl text-white">
                <span className="font-semibold">Restau</span>rant
              </h1>
            </div>
  
            <ul className="hidden md:flex space-x-6 text-white text-sm ">
              <li>
                <a href="#home" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-yellow-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-yellow-400">
                  Clients
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-yellow-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          <div className="hidden md:block z-10">
            <a
              href="#book"
              className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500"
            >
              BOOK A TABLE
            </a>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  