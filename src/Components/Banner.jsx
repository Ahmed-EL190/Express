// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../Components/styles.css";
// import required modules
import { Navigation } from "swiper/modules";
import { img3 } from "../assets";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-100"
      >
        <SwiperSlide className="relative">
          <div className="">
            <h1 className="text-white text-4xl font-bold z-10 mt-48 ml-3 absolute ">
              Summer Collection 2025
            </h1>
            <h3 className="text-white text-2xl font-normal z-10 mt-60 ml-3 absolute">
              Discover our new arrivals with up to 30% off on selected items
            </h3>
            <div className="flex">
              <button className="text-white hover:scale-110 transition duration-300 rounded p-2 w-36 flex gap-3 items-center text-center bg-indigo-600 text-lg font-normal z-10 mt-80 ml-3 absolute">
                Shop Now <span><GoArrowRight /></span>
              </button>
              <button className="text-black hover:scale-110 transition duration-300 rounded p-2 w-40 text-lg bg-white font-normal z-10 mt-80 ml-44 absolute">
                View Collection 
              </button>
            </div>
          </div>
          <img src={img3} alt="" className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
