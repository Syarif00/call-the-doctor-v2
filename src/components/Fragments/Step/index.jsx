import React from "react";
import step1 from "../../../assets/step-1.png";
import step2 from "../../../assets/step-2.png";
import step3 from "../../../assets/step-3.png";
import step4 from "../../../assets/step-4.png";

const Step = () => {
  return (
    <div className="container p-5 mx-auto my-20 text-center">
      <h1 className="text-5xl font-bold text-primary">Langkah Pemesanan</h1>
      <div className="container grid mx-auto ">
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={step1} alt={step1} className="w-full" />
            <h1 className="text-xl font-medium text-slate-900">
              Memesan melalui aplikasi/nomor call center/web
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <img src={step2} alt={step2} className="w-full" />
            <h1 className="text-xl font-medium text-slate-900">
              Aplikasi mencarikan tenaga medis terdekat dari lokasi anda{" "}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <img src={step3} alt={step3} className="w-full" />
            <h1 className="text-xl font-medium text-slate-900">
              Tenaga medis datang melakukan pemeriksaan/ perawatan
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <img src={step4} alt={step4} className="w-full" />
            <h1 className="text-xl font-medium text-slate-900">
              Pembayaran tunai/ non tunai
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
