import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import Prices from "../components/Fragments/Prices";
import ContentLeft from "../components/Fragments/ContentLeft";
import ContentRight from "../components/Fragments/ContentRight";
import { IoMdChatbubbles } from "react-icons/io";
import { RiHospitalLine } from "react-icons/ri";
import pict1 from "../assets/layanan-dokter-1.png";
import pict2 from "../assets/layanan-dokter-2.png";

const Dokterpage = () => {
  return (
    <Pelayanan>
      <Header>Layanan Dokter</Header>

      <ContentLeft
        pict={pict1}
        title="TANYA DOKTER"
        desc={
          <p>
            {" "}
            Dengan layanan chat dokter kami, Anda dapat dengan mudah
            berkonsultasi dengan dokter secara online, kapan saja dan di mana
            saja. Tidak perlu lagi menghabiskan waktu dan tenaga untuk pergi ke
            klinik atau rumah sakit, cukup dengan mengakses layanan chat dokter
            kami melalui smartphone atau komputer Anda.
            <br />
            <br /> Dengan Homecare Dokter, Anda tidak perlu khawatir lagi
            tentang masalah kesehatan Anda. Layanan chat dokter kami akan
            memberikan kemudahan dan kenyamanan dalam mendapatkan perawatan
            medis yang Anda butuhkan, di mana pun dan kapan pun. Segera hubungi
            kami dan dapatkan pelayanan homecare dokter yang terbaik untuk Anda
            dan keluarga.
          </p>
        }
      />
      <ContentRight
        pict={pict2}
        title="HOME VISIT DOKTER"
        desc={
          <p>
            {" "}
            Dengan layanan home visit dokter kami, Anda tidak perlu lagi
            khawatir tentang kesulitan dalam pergi ke klinik atau rumah sakit.
            Dokter-dokter kami yang berpengalaman dan terlatih akan datang
            langsung ke rumah Anda untuk memberikan pelayanan medis yang Anda
            butuhkan.
            <br />
            <br />
            Anda dapat memilih jadwal home visit dokter yang sesuai dengan
            kebutuhan Anda, dan dokter akan datang tepat waktu sesuai dengan
            jadwal yang Anda tentukan. Kami juga menyediakan layanan homecare
            dokter untuk pasien yang membutuhkan perawatan kesehatan secara
            intensif di rumah.
          </p>
        }
      />

      <Prices
        logo={<IoMdChatbubbles size={45} className="text-secondary" />}
        title="Tanya Dokter"
        showPrice={true}
        desc="Layanan tanya dokter menawarkan biaya per konsultasi mulai dari Rp 25.000 hingga Rp 125.000, tergantung pada spesialisasi dokter yang dipilih."
      />
      <Prices
        logo={<RiHospitalLine size={45} className="text-secondary" />}
        title="Home Visit Dokter"
        desc={
          <ul>
            <li>a. Infus / Kateter / NGT mulai dari Rp 350.000</li>
            <li>b. Injeksi mulai dari Rp 150.000</li>
            <li>
              c. Perawatan luka kecil ( kurang dari 5cm) mulai dari Rp 275.000
            </li>
            <li>d. Perawatan luka sedang (5-10cm) mulai dari Rp 325.000</li>
            <li>
              e. Perawatan luka besar ( lebih dari 10cm) mulai dari Rp 375.000
            </li>
            <li>
              *Harga sudah termasuk biaya transportasi tenaga medis ke lokasi
              Anda. <br /> **Tersedia Paket Perawat Medis Home Visit dengan
              biaya lebih hemat dan nyaman. <br /> ***Harga belum termasuk biaya
              admin sebesar Rp 15.000.
            </li>
          </ul>
        }
      />
    </Pelayanan>
  );
};

export default Dokterpage;
