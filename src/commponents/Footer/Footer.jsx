import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center lg:h-[550px] text-white p-10 flex flex-col items-center"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/r2y1ndr/f909efb883f56845dcebe7cdc85a607c.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 "></div>

      <div className="relative z-10 text-center lg:pt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bebas-neue-regular">
          WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {/* Opening Hours */}
          <div>
            <div className="text-yellow-400 text-3xl mb-4 bebas-neue-regular lg:ml-24">
              <LuAlarmClock />
            </div>
            <h3 className="font-semibold text-lg mb-2">OPENING HOURS</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          {/* Let's Talk */}
          <div>
            <div className="text-yellow-400 text-3xl mb-4 lg:ml-24 bebas-neue-regular">
              <FiPhoneCall />
            </div>
            <h3 className="font-semibold text-lg mb-2">LET'S TALK</h3>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          {/* Book a Table */}
          <div>
            <div className="text-yellow-400 text-3xl mb-4 bebas-neue-regular lg:ml-24">
              <MdOutlineEmail />
            </div>
            <h3 className="font-semibold text-lg mb-2">BOOK A TABLE</h3>
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>

          {/* Address */}
          <div>
            <div className="text-yellow-400 text-3xl mb-4 bebas-neue-regular lg:ml-24">
              <IoLocationOutline />
            </div>
            <h3 className="font-semibold text-lg mb-2">OUR ADDRESS</h3>
            <p>123 Street New York City, United States Of America.</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#"
            className="text-blue-500 text-2xl border rounded-full p-2"
          >
            <FaFacebook />
          </a>
          <a href="#" className="text-white text-2xl border rounded-full p-2">
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="text-yellow-400 text-2xl border rounded-full p-2"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-blue-500 text-2xl border rounded-full p-2"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className="mt-4 text-sm">&copy; 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
