// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaUtensils,
  FaAward,
  FaUsers,
  FaSmile,
} from "react-icons/fa";

const AboutPage = () => {
  const stats = [
    {
      icon: <FaUtensils />,
      number: "50+",
      title: "Delicious Dishes",
    },
    {
      icon: <FaAward />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <FaUsers />,
      number: "15K+",
      title: "Happy Customers",
    },
    {
      icon: <FaSmile />,
      number: "4.9★",
      title: "Customer Rating",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero */}
      <section className="bg-[#FFF8F1] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="uppercase tracking-[2px] sm:tracking-[4px] text-orange-500 font-semibold">
            About Us
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            Welcome To Urban Grill
          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            Urban Grill is dedicated to serving freshly prepared meals made
            from premium ingredients. Every dish is crafted with passion,
            quality, and unforgettable flavors.
          </p>

        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}

          <div>
            <img
              src="/images/about.jpg"
              alt="Restaurant"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Content */}

          <div>

            <span className="text-orange-500 uppercase tracking-[2px] sm:tracking-[4px] font-semibold">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-gray-800">
              Serving Great Food Since 2014
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              At Urban Grill, we believe food brings people together.
              Our chefs prepare every meal using fresh ingredients and
              authentic recipes to deliver an exceptional dining experience.
            </p>

            <p className="text-gray-600 mt-6 leading-8">
              Whether you're dining with family, celebrating a special
              occasion, or ordering from home, we ensure every bite is
              memorable.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition">
              Learn More
            </button>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-[#FFF8F1]">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow hover:shadow-xl transition duration-300"
              >

                <div className="text-4xl text-orange-500 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold mt-5">
                  {item.number}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;