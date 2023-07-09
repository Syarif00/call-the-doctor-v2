import React from "react";
import about from "../../../assets/about.png";

const About = () => {
  return (
    <div className="bg-[#D6F5FF] w-full p-5">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-1 gap-7 lg:grid-cols-2">
          <div className="mt-2">
            <img src={about} alt="" />
          </div>
          <div className="mt-4 ">
            <h2 className="mb-12 text-4xl font-medium">
              "Kesehatan Anda, Prioritas Kami"
            </h2>
            <p className="font-medium pb-7">
              Dengan layanan homecare dokter dan medical checkup yang dapat
              dilakukan di rumah Anda, kami ingin membuat perawatan kesehatan
              menjadi lebih mudah, nyaman dan aman. Jadilah prioritas untuk
              kesehatan Anda dan percayakan perawatan kesehatan Anda pada CTD.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
