import {
  FaLeaf,
  FaMotorcycle,
  FaUserTie,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    text: "We use only fresh and locally sourced ingredients for every meal.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Fast Delivery",
    text: "Get your favorite meals delivered quickly while they're still hot.",
  },
  {
    icon: <FaUserTie />,
    title: "Expert Chefs",
    text: "Our experienced chefs prepare every dish with passion and care.",
  },
  {
    icon: <FaAward />,
    title: "Best Quality",
    text: "Premium meals and excellent service that keep customers coming back.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-[2px] sm:tracking-[4px] font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            We Serve More Than Just Food
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Every meal is prepared with fresh ingredients, expert cooking, and
            exceptional service to create an unforgettable dining experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-2xl text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;