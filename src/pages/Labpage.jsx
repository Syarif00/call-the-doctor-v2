import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import ContentLeft from "../components/Fragments/ContentLeft";
import Prices from "../components/Fragments/Prices";
import pict1 from "../assets/layanan-lab-1.png";
import { CiMedicalClipboard } from "react-icons/ci";

const Labpage = () => {
  return (
    <Pelayanan>
      <Header>Layanan Lab</Header>

      <ContentLeft
        pict={pict1}
        title="MEDICAL CHECK UP"
        desc={
          <p>
            {" "}
            Kami menyediakan layanan medical checkup bagi pribadi maupun
            instansi yang ingin memastikan kesehatannya tetap terjaga.
            <br />
            <br />
            Dengan layanan medical checkup kami, Anda dapat memperoleh hasil tes
            laboratorium dan pemeriksaan kesehatan tanpa harus menghabiskan
            waktu berjam-jam di rumah sakit atau klinik. Tim dokter dan perawat
            kami akan datang langsung ke lokasi Anda untuk melakukan medical
            checkup dengan alat dan peralatan medis terkini.
          </p>
        }
      />

      <Prices
        logo={<CiMedicalClipboard size={45} className="text-secondary" />}
        title="Medical Checkup"
        showPrice={true}
        desc={
          <p>
            Tarif layanan medical check up, silahkan Anda menghubungi langsung
            ke nomor Call Center 24 jam Medi-Call untuk mendapatkan informasi
            lebih lanjut
          </p>
        }
      />
    </Pelayanan>
  );
};

export default Labpage;
