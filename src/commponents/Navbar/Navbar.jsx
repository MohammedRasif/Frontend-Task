import { useState } from 'react';
import { Transition } from '@headlessui/react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div>
      <nav
        className="relative flex items-center justify-between p-4 lg:px-52"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvubt5hiv/image/upload/v1731265554/xxglcfgkagnwoyvk5dhw.png')`
         

        }}
      >
        {/* Semi-transparent red overlay */}
        <div className="absolute inset-0 bg-red-600 opacity-80 z-0"></div>

        <div className="flex items-center space-x-10 z-10">
          {/* Logo Section */}
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

          {/* Navigation Links - Hidden on small screens */}
          <ul className="hidden md:flex space-x-6 text-white text-sm">
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

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6 ml-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Button Section */}
        <div className="hidden md:block z-10">
          <a
            href="#book"
            className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-500"
          >
            BOOK A TABLE
          </a>
        </div>

        {/* Mobile Menu with Animation */}
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 -translate-y-10"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-0 -translate-y-10"
          className="absolute top-14 left-0 right-0 bg-red-600 z-20 md:hidden"
        >
          <ul className="flex flex-col space-y-2 p-4 text-white text-sm">
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
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
