import React from "react";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative w-full my-7 ">
      <img src={banner} alt="" />
      <div className="container absolute inset-0 items-center mx-auto mt-5 text-center lg:mt-28">
        <h2 className="text-xl font-extrabold text-white lg:text-5xl">
          Get a Free Consultation!
        </h2>
        <a href="https://wa.me/6289666432475">
          <button className="px-5 py-3 mt-1 text-white rounded-full lg:mt-6 bg-hijau">
            Daftar Sekarang
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
