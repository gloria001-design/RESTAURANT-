import { FaStar } from "react-icons/fa";

const dishes = [
  {
    id: 1,
    name: "Grilled Chicken",
    price: "$18.99",
    image: "/images/dish1.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: "$14.99",
    image: "/images/dish2.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Italian Pasta",
    price: "$16.99",
    image: "/images/dish3.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Chicken Pizza",
    price: "$21.99",
    image: "/images/dish4.jpg",
    rating: 4.9,
  },
];

const PopularDishes = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Heading */}
        <div className="text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-[2px] sm:tracking-[4px]">
            Popular Dishes
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            Our Popular Menu
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Discover our chef's special dishes made with fresh ingredients and
            served with love.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-16">

          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#FFF8F1] rounded-3xl p-5 sm:p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-3 transition-all duration-300"
            >
              {/* Food Image */}

              <img
                src={dish.image}
                alt={dish.name}
                className="w-40 h-40 mx-auto object-contain transition-transform duration-300 hover:scale-110"
              />

              {/* Dish Name */}

              <h3 className="text-xl font-semibold mt-6 text-gray-800">
                {dish.name}
              </h3>

              {/* Rating */}

              <div className="flex justify-center items-center gap-1 mt-2">

                <FaStar className="text-yellow-400" />

                <span className="text-gray-600 text-sm font-medium">
                  {dish.rating}
                </span>

              </div>

              {/* Price */}

              <p className="text-orange-500 font-bold text-xl mt-3">
                {dish.price}
              </p>

              {/* Button */}

              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
                Order Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PopularDishes;