import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    image: "/images/user1.jpg",
    review:
      "Urban Grill serves the best grilled meals I've ever tasted. The atmosphere and service are absolutely amazing!",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Customer",
    image: "/images/user2.jpg",
    review:
      "Fresh ingredients, fast delivery, and delicious meals. Highly recommended for every food lover.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Chef",
    image: "/images/user3.jpg",
    review:
      "The presentation, taste, and quality are outstanding. Urban Grill truly deserves five stars.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Thousands of happy customers trust Urban Grill for quality meals and
            exceptional service.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFF8F1] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="flex items-center gap-4">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {review.role}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 text-yellow-400 mt-6">

                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}

              </div>

              <p className="text-gray-600 mt-5 leading-7">
                "{review.review}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;