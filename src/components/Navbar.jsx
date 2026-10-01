import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/reservation" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="w-full bg-[#FFF8F1] py-3 sm:py-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="bg-white rounded-full shadow-sm border border-orange-100 h-[64px] sm:h-[72px] flex items-center justify-between px-4 sm:px-8">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <FaUtensils />
            </div>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Urban Grill
            </h1>

          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-5">

            <button className="hover:text-orange-500 transition">
              <FaSearch size={16} />
            </button>

            <button className="hover:text-orange-500 transition">
              <FaUser size={16} />
            </button>

            <button className="relative hover:text-orange-500 transition">

              <FaShoppingCart size={16} />

              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>

            </button>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-all duration-300 hover:scale-105">
              Order Now
            </button>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-orange-500 p-2 -mr-2"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-3xl shadow-md p-6">

            <nav className="flex flex-col gap-5">

              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-orange-500"
                >
                  {link.name}
                </NavLink>
              ))}

              <button className="bg-orange-500 text-white py-3 rounded-full">
                Order Now
              </button>

            </nav>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;