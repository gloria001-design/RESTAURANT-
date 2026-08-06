// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PopularDishes from "../components/PopularDishes";

const MenuPage = () => {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-[#FFF8F1] py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Menu
          </span>

          <h1 className="text-5xl font-bold mt-4 text-gray-800">
            Explore Our Delicious Meals
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-8">
            From juicy burgers to freshly grilled chicken, creamy pasta,
            and delicious pizzas, discover meals prepared with passion.
          </p>

        </div>
      </section>

      {/* Popular Dishes */}
      <PopularDishes />

      <Footer />
    </>
  );
};

export default MenuPage;