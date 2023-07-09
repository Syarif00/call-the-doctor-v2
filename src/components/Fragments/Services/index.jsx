import React from "react";
import fisioterapi from "../../../assets/fisioterapi.png";
import medical_cu from "../../../assets/medical-cu.png";
import vaksinasi from "../../../assets/vaksinasi.png";
import perawat_medis from "../../../assets/perawatan-medis.png";
import dokter_visit from "../../../assets/dokter-visit.png";

const Services = () => {
  return (
    <div className="container p-5 mx-auto my-20 text-center">
      <h1 className="text-4xl font-bold text-primary">Layanan Kami</h1>
      <div className="container grid mx-auto ">
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="/layanan-dokter">
              <img
                src={dokter_visit}
                alt={dokter_visit}
                className="w-full min-w-[450px]:rounded-full"
              />
              <h1 className="text-xl font-medium text-slate-900">
                Dokter Visit
              </h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="/layanan-lab">
              <img src={medical_cu} alt={medical_cu} className="w-full" />
              <h1 className="text-xl font-medium text-slate-900">
                Medical CheckUp
              </h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="/layanan-vaksin">
              <img src={vaksinasi} alt={vaksinasi} className="w-full" />
              <h1 className="text-xl font-medium text-slate-900">Vaksinasi</h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="/layanan-perawatan">
              <img src={perawat_medis} alt={perawat_medis} className="w-full" />
              <h1 className="text-xl font-medium text-slate-900">
                Perawat Medis
              </h1>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <a href="/layanan-fisioterapi">
              <img src={fisioterapi} alt={fisioterapi} className="w-full" />
              <h1 className="text-xl font-medium text-slate-900">
                Fisioterapi
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
