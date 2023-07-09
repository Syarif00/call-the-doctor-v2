import React from "react";
import join from "../../../assets/join.png";

const Join = () => {
  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse items-center lg:space-x-80 gap-7 lg:flex-row">
          <div className="p-5 mt-5">
            <h2 className="pt-5 mb-12 text-4xl font-bold text-white">
              Ayo bergabung bersama CTD
            </h2>
            <p className="font-medium text-white pb-7">
              Dapatkan pengalaman, penghasilan tambahan, <br /> dan program
              pelatihan
            </p>
            <button className="px-5 py-3 my-5 text-white rounded-full lg:mt-6 bg-hijau">
              Daftar Sekarang
            </button>
          </div>
          <div className="mt-2">
            <img src={join} alt="" className=" w-[50vh]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
