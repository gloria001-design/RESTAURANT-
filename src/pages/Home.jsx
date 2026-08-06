import Hero from "../components/Hero";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularDishes />
      <WhyChooseUs />
      <Testimonials />
      <Reservation />
      <Footer />
    </>

  );
};

export default Home;