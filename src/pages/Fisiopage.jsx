import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import ContentLeft from "../components/Fragments/ContentLeft";
import ContentRight from "../components/Fragments/ContentRight";
import Prices from "../components/Fragments/Prices";
import pict1 from "../assets/layanan-fisio-1.png";
import pict2 from "../assets/layanan-fisio-2.png";
import { FaUserNurse } from "react-icons/fa";

const Fisiopage = () => {
  return (
    <Pelayanan>
      <Header>Layanan Fisioterapi</Header>

      {/* Start Content */}
      <ContentLeft
        pict={pict1}
        title="FISIOTERAPI HOME VISIT"
        desc={
          <p className="text-xl">
            {" "}
            Perawat fisioterapi datang ke rumah membantu mengobati pasien yang
            mengalami cedera, penyakit atau disabilitas melalui metode terapi
            olahraga.
          </p>
        }
      />
      <ContentRight
        pict={pict2}
        title="LAYANAN FISIOTERAPI"
        desc={
          <p className="text-xl">
            {" "}
            Melayani fisioterapi stroke, gangguan otot, tulang dan saraf,
            permasalahan fisik pada anak dan lansia, pengobatan pasca cedera,
            serta memberikan edukasi seputar fisioterapi pada pasien.
          </p>
        }
      />
      {/* End Content */}

      {/* Start Prices */}

      <Prices
        logo={<FaUserNurse size={45} className="text-secondary" />}
        title="Fisioterapi Home Visit"
        showPrice={true}
        desc={
          <ul className="text-xl ">
            <li className="mb-2">
              1. Fisioterapi I Rp 3.000.000 untuk 10x pertemuan
            </li>
            <li className="mb-2">
              2. Fisioterapi II Rp 1.600.000 untuk 5x pertemuan
            </li>
            <li className="mb-2">
              3. Terapi wicara I Rp 3.000.000 untuk 10x pertemuan
            </li>
            <li className="mb-2">
              4. Terapi wicara II Rp 1.600.000 untuk 5x pertemuan
            </li>
            <li className="mb-2">
              5. Terapi stroke Rp 250.000 untuk 1x pertemuan
            </li>
            <br />
          </ul>
        }
      />
      {/* End Prices */}
    </Pelayanan>
  );
};

export default Fisiopage;
