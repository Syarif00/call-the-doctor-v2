import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import ContentLeft from "../components/Fragments/ContentLeft";
import ContentRight from "../components/Fragments/ContentRight";
import Prices from "../components/Fragments/Prices";
import pict1 from "../assets/layanan-lainnya-1.png";
import pict2 from "../assets/layanan-lainnya-2.png";
import { GiMedicines } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";

const Lainnyapage = () => {
  return (
    <Pelayanan>
      <Header>Lainnya</Header>

      {/* Start Content */}
      <ContentLeft
        pict={pict1}
        title="ALAT KESEHATAN"
        desc={
          <p>
            {" "}
            Kami menyediakan beragam produk berkualitas tinggi yang dirancang
            untuk membantu menjaga kesehatan dan kesejahteraan Anda. Selain itu,
            kami juga menyediakan alat-alat bantu seperti tongkat kruk, kursi
            roda, serta peralatan rehabilitasi dan mobilitas lainnya untuk
            membantu pasien yang membutuhkan bantuan dalam beraktivitas
            sehari-hari. Produk-produk kami dipilih secara teliti untuk
            memastikan kualitas, keandalan, dan keamanannya.
            <br />
            <br /> Jadikan kesehatan Anda sebagai prioritas, dan kami akan
            menjadi mitra yang dapat Anda andalkan dalam perjalanan menuju
            kesejahteraan yang optimal.
          </p>
        }
      />
      <ContentRight
        pict={pict2}
        title="OBAT & RESEP DOKTER"
        desc={
          <p>
            {" "}
            Pesan obat dan resep dokter Anda dengan mudah dan aman melalui
            layanan pengiriman obat kami. Kami mengerti bahwa kesehatan Anda
            adalah prioritas utama, dan kami berkomitmen untuk menyediakan cara
            yang nyaman dan terpercaya untuk mendapatkan obat yang Anda
            butuhkan.
            <br />
            <br />
            Dengan layanan pengiriman obat kami, Anda tidak perlu repot pergi ke
            apotek atau antri untuk mengambil obat Anda. Cukup kirimkan resep
            dokter Anda kepada kami, dan tim kami yang berpengalaman akan
            mengurus pengadaan dan pengiriman obat secara langsung ke pintu
            rumah Anda.
          </p>
        }
      />
      {/* End Content */}

      {/* Start Prices */}
      <Prices
        logo={<GiMedicines size={45} className="text-secondary" />}
        title="Alat Kesehatan"
        showPrice={true}
        desc={
          <ul>
            <li>a. Tongkat kruk mulai dari Rp 75.000</li>
            <li>b. Tensimeter mulai dari Rp 500.000</li>
            <li>c. Termometer digital mulai dari Rp 50.000</li>
            <li>d. Kursi roda mulai dari Rp. 1.000.000</li>
            <li>e. Dll</li>
          </ul>
        }
      />
      <Prices
        logo={<AiFillMedicineBox size={45} className="text-secondary" />}
        title="Obat & resep dokter"
        showPrice={false}
        desc={
          <p>
            {" "}
            <i>Silahkan konsultasi dengan dokter terlebih dahulu </i>
          </p>
        }
      />

      {/* End Prices */}
    </Pelayanan>
  );
};

export default Lainnyapage;
