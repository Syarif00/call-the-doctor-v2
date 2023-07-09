import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import ContentLeft from "../components/Fragments/ContentLeft";
import ContentRight from "../components/Fragments/ContentRight";
import Prices from "../components/Fragments/Prices";
import pict1 from "../assets/layanan-vaksin-1.png";
import pict2 from "../assets/layanan-vaksin-2.png";
import pict3 from "../assets/layanan-vaksin-3.png";
import { BiInjection, BiSolidInjection } from "react-icons/bi";
import { TbVaccine } from "react-icons/tb";

const Vaksinpage = () => {
  return (
    <Pelayanan>
      <Header>Layanan Vaksin</Header>

      <ContentLeft
        pict={pict1}
        title="VAKSIN BAYI & ANAK"
        desc={
          <p>
            {" "}
            Kini saatnya melindungi buah hati Anda dari penyakit dengan
            vaksinasi anak secara online! Dengan layanan vaksinasi anak online,
            Anda dapat memberikan perlindungan terbaik untuk buah hati Anda
            dengan mudah dan cepat, tanpa perlu meninggalkan rumah. Vaksinasi
            anak adalah salah satu cara paling efektif untuk melindungi anak
            Anda dari berbagai macam penyakit, seperti campak, polio, hepatitis,
            dan masih banyak lagi.
          </p>
        }
      />
      <ContentRight
        pict={pict2}
        title="VAKSIN RABIES"
        desc={
          <p>
            {" "}
            Vaksin rabies merupakan vaksin yang sangat penting untuk melindungi
            Anda dan hewan peliharaan Anda dari virus yang mematikan. Dengan
            melakukan vaksin rabies, Anda dapat memastikan bahwa Anda dan hewan
            peliharaan Anda terlindungi dari penyakit mematikan ini.
            <br />
            <br />
            Segera konsultasi untuk melindungi diri dan keluarga Anda dengan
            vaksin rabies sekarang!
          </p>
        }
      />
      <ContentLeft
        pict={pict3}
        title="SUNTIK VITAMIN"
        desc={
          <p>
            {" "}
            Vitamin sangat penting untuk menjaga kesehatan tubuh.Suntik vitamin
            online dapat menjadi solusi praktis untuk memastikan Anda
            mendapatkan semua nutrisi penting yang dibutuhkan tubuh.
            <br />
            <br />
            Dengan layanan suntik vitamin online, Anda dapat memesan suntikan
            vitamin yang tepat untuk kebutuhan kesehatan Anda, dan mendapatkan
            layanan di mana pun dan kapan pun Anda inginkan. Dalam waktu yang
            singkat, Anda dapat memperoleh nutrisi penting yang dibutuhkan tubuh
            dan meningkatkan kesehatan secara keseluruhan.
          </p>
        }
      />
      {/* End Content */}

      {/* Start Prices */}
      <Prices
        logo={<BiInjection size={45} className="text-secondary" />}
        title="Vaksin Bayi & Anak"
        showPrice={true}
        desc={
          <ul>
            <li>a. Vaksin influenza mulai dari Rp 300.000</li>
            <li>b. Vaksin HPV mulai dari Rp 300.000</li>
            <li>c. Vaksin Hepatitis mulai dari Rp 300.000</li>
            <li>d. Vaksin varicella mulai dari Rp 300.000</li>
          </ul>
        }
      />
      <Prices
        logo={<TbVaccine size={45} className="text-secondary" />}
        title="Vaksin Rabies"
        showPrice={false}
        desc={
          <ul>
            <li>1. Vaksin rabies mulai dari Rp 200.000</li>
            <li>2. Serum anti rabies mulai dari Rp 400.000</li>
            <li>
              3. Immunoglobulin rabies untuk manusia mulai dari Rp 3.000.000
            </li>
          </ul>
        }
      />
      <Prices
        logo={<BiSolidInjection size={45} className="text-secondary" />}
        title="Suntik Vitamin"
        showPrice={false}
        desc={
          <ul>
            <li>1. Suntik vitamin C mulai dari Rp 50.000</li>
            <li>2. Infus Multivitamin mulai dari Rp. 200.000</li>
          </ul>
        }
      />
      {/* End Prices */}
    </Pelayanan>
  );
};

export default Vaksinpage;
