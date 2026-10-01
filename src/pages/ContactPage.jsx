import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="bg-[#FFF8F1] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="uppercase tracking-[2px] sm:tracking-[4px] text-orange-500 font-semibold">
            Contact Us
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            We'd Love To Hear From You
          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
            Have a question, reservation, or feedback? Get in touch with us.
            We're always happy to serve you.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Contact Form */}

          <div>

            <h2 className="text-3xl font-bold mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300">
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div>

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-5">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-gray-500">
                    +234 800 123 4567
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-500">
                    info@urbangrill.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Address
                  </h3>

                  <p className="text-gray-500">
                    123 Victoria Island, Lagos, Nigeria
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Opening Hours
                  </h3>

                  <p className="text-gray-500">
                    Mon - Sun: 9:00 AM - 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}

      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">

          <iframe
            title="Urban Grill Location"
            src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
            className="w-full h-[300px] sm:h-[450px] rounded-3xl shadow-lg"
            loading="lazy"
          ></iframe>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;