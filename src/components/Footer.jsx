import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              Urban Grill
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Experience unforgettable flavors with freshly prepared meals,
              premium ingredients, and exceptional customer service every day.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Menu</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Reservation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>123 Victoria Island, Lagos</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-orange-500 mt-1" />
                <span>+234 800 123 4567</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-orange-500 mt-1" />
                <span>info@urbangrill.com</span>
              </div>

            </div>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Opening Hours
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>Monday - Friday</p>
              <p className="text-white">9:00 AM - 10:00 PM</p>

              <p className="pt-3">Saturday - Sunday</p>
              <p className="text-white">10:00 AM - 11:00 PM</p>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Urban Grill. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500">

            <a href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Terms of Service
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;