import React from "react";
import shape from "../assets/images/shape.png";
import hero from "../assets/images/home-two-img.jpg";
import herovid from "../assets/vedeos/60e78f52.mp4";
import aboutimg from "../assets/images/about-img2.png";
import RoomCard from "../components/ui/RoomCard";
import Roomsdata from "../assets/Datas/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "../assets/Datas/Services";
import abilityimg from "../assets/images/ability-img (1).jpg";
const Home = () => {
  const settings = {
    dots: true, // Enable dots for all screen sizes
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true, // Enable autoplay for this breakpoint
          autoplaySpeed: 3000, // Set autoplay speed
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay for this breakpoint
          autoplaySpeed: 3000, // Set autoplay speed
        },
      },
    ],
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-violet-50 to-pink-50 grid md:grid-cols-2 items-center py-3 p-7 h-screen gap-10 mb-10">
        <div className="flex items-center">
          <div>
            <img className=" " src={shape} alt="" />
          </div>
          <div>
            <h2 className="mb-6">
              Resort, That is the Latest Dimension on Luxury
            </h2>
            <p className="mb-6">
              {" "}
              the hotel and resort business is one of the best and loyal
              business in the global market. We are the agency that helps to
              book you a good room in a suitable palace at a reasonable price.
            </p>
            <button className="bg-black text-white font-semibold py-3 px-8 rounded shadow hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition">
              Rooms
            </button>
          </div>
        </div>
        <div>
          <img className="rounded-3xl" src={hero} alt="" />
        </div>
      </div>

      {/* vedeo-section */}

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="">
            {/* Text Section */}
            <div className=" mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-thin text-center">
                " New apartments available to buy at the heart of Brentford "
              </h1>
            </div>

            {/* Video Section */}
            <div className="relative  ">
              <video
                src={herovid}
                autoPlay
                muted
                loop
                className="w-full md:w-4/5 rounded-2xl shadow-lg m-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-50 hover:bg-opacity-70 rounded-full p-4">
                  <svg
                    className="w-12 h-12 text-gray-800 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.414l5 2.5a1 1 0 010 1.828l-5 2.5A1 1 0 018 12.5V7.5a1 1 0 011-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            {/* Image Section */}
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              <img
                src={aboutimg}
                alt="About Us"
                className="w-full h-auto rounded-lg "
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
                We Are the Best in All-time & So Please Get a Quick Booking
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt ante tellus, sit amet rhoncus massa aliquam sit amet.
                Cras porttitor mauris quis mattis ornare. In efficitur at sem
                quis pretium. Aenean sit amet neque ut dolor lacinia rutrum. In
                vulputate pellentesque turpis et porta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8 text-center ">Rooms</h1>
          <br />
          <Slider {...settings}>
            {Roomsdata.map((room, index) => (
              <RoomCard key={index} room={room} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="mb-16">
        <div className="container mx-auto text-center my-10">
          <h1 className="text-3xl font-bold mb-8">
            Our Resort Services and <br /> All Other Details
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white hover:bg-gradient-to-r from-violet-100 to-pink-100  shadow-xl p-6 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
              >
                <div className="text-purple-400 text-5xl mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-purple-500 hover:underline">
                  Get Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">
                Our Ability to the Global and International Market
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt ante tellus, sit amet rhoncus massa aliquam sit amet.
                Cras porttitor mauris quis mattis ornare. In efficitur at sem
                quis pretium. Aenean sit amet neque ut dolor lacinia rutrum. In
                vulputate pellentesque turpis et porta.
              </p>

              {/* Statistics Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-purple-500 mb-2">14K</p>
                  <p className="text-gray-600">5 Star Retting Reviews</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-purple-500 mb-2">
                    225K
                  </p>
                  <p className="text-gray-600">Items Served Breakfast</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                src={abilityimg} // Replace this with your image source
                alt="People enjoying breakfast"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
