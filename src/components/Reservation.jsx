import { FaCalendarAlt, FaClock, FaUsers } from "react-icons/fa";

const Reservation = () => {
  return (
    <section className="py-24 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Reservation
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Book Your Table
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Reserve your table today and enjoy a memorable dining experience
            with your family and friends.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg mt-16 p-8">

          <form className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Name */}

            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500"
            />

            {/* Date */}

            <div className="relative">

              <FaCalendarAlt className="absolute left-4 top-5 text-orange-500" />

              <input
                type="date"
                className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Time */}

            <div className="relative">

              <FaClock className="absolute left-4 top-5 text-orange-500" />

              <input
                type="time"
                className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500"
              />

            </div>

            {/* Guests */}

            <div className="relative">

              <FaUsers className="absolute left-4 top-5 text-orange-500" />

              <select className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-orange-500">

                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>

              </select>

            </div>

          </form>

          <div className="text-center mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105">
              Book Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Reservation;