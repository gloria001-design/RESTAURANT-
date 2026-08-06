import { FaArrowRight, FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-[#FFF8F1] pt-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium">
              Welcome to Urban Grill
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Delicious Meals
              <br />

              Made With
              <span className="text-orange-500">
                {" "}Passion
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-lg">
              Discover freshly prepared dishes crafted by experienced chefs
              using quality ingredients that bring unforgettable flavors to
              your table.
            </p>

            <div className="mt-10 flex gap-5">

              <button className="bg-orange-500 text-white px-7 py-4 rounded-full font-semibold hover:bg-orange-600 transition">
                Order Now
              </button>

              <button className="flex items-center gap-3 border border-gray-300 px-6 py-4 rounded-full hover:border-orange-500 transition">
                <FaPlay className="text-orange-500" />
                Watch Video
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="w-[420px] h-[420px] rounded-full bg-[#FFE8C8] flex items-center justify-center">
              <img
                src="/images/food1.png"
                alt="Food"
                className="w-[400px] object-contain"
              />

            </div>

            {/* Floating Card */}
{/* 
            <div className="absolute left-0 bottom-10 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-4">

              <img
                src="/images/hero-food.jpg"
                className="w-16 h-16 rounded-full object-cover"
                alt=""
              />

              <div>

                <h3 className="font-semibold">
                  Grilled Chicken
                </h3>

                <p className="text-orange-500 font-bold">
                  $18.99
                </p>

              </div>

            </div> */}

            {/* Badge */}

            <div className="absolute top-10 right-10 bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold shadow-xl">
              Best Seller
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;