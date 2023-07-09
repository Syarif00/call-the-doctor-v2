import React from "react";
import Pelayanan from "../components/Layout/Pelayanan";
import Header from "../components/Elements/Header";
import ContentLeft from "../components/Fragments/ContentLeft";
import ContentRight from "../components/Fragments/ContentRight";
import Prices from "../components/Fragments/Prices";
import pict2 from "../assets/layanan-perawatan-2.png";
import pict1 from "../assets/layanan-dokter-1.png";
import { MdMedicalServices } from "react-icons/md";
import { FaUserNurse } from "react-icons/fa";

const Perawatanpage = () => {
  return (
    <Pelayanan>
      <Header>Layanan Perawatan</Header>

      {/* Start Content */}
      <ContentLeft
        pict={pict1}
        title="PERAWAT MEDIS"
        desc={
          <p>
            {" "}
            Kami memahami bahwa perawatan medis yang intensif dapat menjadi
            beban dan tantangan bagi pasien dan keluarga. Oleh karena itu, kami
            menyediakan layanan perawatan medis berkualitas di rumah yang
            dirancang untuk memenuhi kebutuhan kesehatan pasien dengan
            memberikan perawatan yang terbaik
            <br />
            <br /> Dengan layanan Homecare Dokter dan layanan perawatan medis
            yang kami tawarkan, pasien dapat merasa lebih nyaman dan aman di
            rumah, sambil tetap mendapatkan perawatan medis yang mereka
            butuhkan. Jadi, jangan ragu lagi untuk memilih Homecare Dokter
            sebagai mitra perawatan medis terpercaya Anda dan keluarga. Hubungi
            kami sekarang untuk informasi lebih lanjut dan layanan perawatan
            medis berkualitas yang kami sediakan.
          </p>
        }
      />
      <ContentRight
        pict={pict2}
        title="PERAWAT & BIDAN"
        desc={
          <p>
            {" "}
            Kondisi kesehatan yang membutuhkan perawatan khusus dapat menjadi
            sangat menantang dan melelahkan. Oleh karena itu, kami menyediakan
            layanan Homecare Dokter yang dilengkapi dengan perawat dan bidan
            berpengalaman yang siap memberikan perawatan terbaik di rumah.
            <br />
            <br />
            Jangan biarkan keadaan kesehatan Anda atau anggota keluarga Anda
            semakin memburuk. Hubungi kami sekarang untuk informasi lebih lanjut
            dan jadwalkan layanan Homecare Dokter dengan perawat dan bidan yang
            berkualitas untuk kebutuhan perawatan kesehatan Anda. Kami siap
            membantu Anda dan keluarga Anda mendapatkan perawatan kesehatan
            terbaik di rumah.
          </p>
        }
      />
      {/* End Content */}

      {/* Start Prices */}
      <Prices
        logo={<MdMedicalServices size={45} className="text-secondary" />}
        title="Perawat Medis"
        showPrice={true}
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
            <br />
            <li>
              *Harga sudah termasuk biaya transportasi tenaga medis ke lokasi
              Anda. <br /> **Tersedia Paket Perawat Medis Home Visit dengan
              biaya lebih hemat dan nyaman. <br /> ***Harga belum termasuk biaya
              admin sebesar Rp 15.000.
            </li>
          </ul>
        }
      />
      <Prices
        logo={<FaUserNurse size={45} className="text-secondary" />}
        title="Perawat & Bidan"
        showPrice={false}
        desc={
          <ul>
            <li>1. Perawat per hari: mulai dari Rp 750.000 per hari</li>
            <li>2. Perawat per jam: mulai dari Rp 150.000 per jam</li>
            <li>3. Perawat luka: mulai dari Rp 500.000 per kunjungan</li>
            <li>4. Bidan per hari: mulai dari Rp 800.000 per hari</li>
            <li>5. Bidan per jam: mulai dari Rp 175.000 per jam</li>
            <li>
              6. Pemeriksaan ibu dan bayi baru lahir: mulai dari Rp 1.000.000
              per kunjungan
            </li>
            <li>7. Perawatan bayi: mulai dari Rp 500.000 per kunjungan</li>
            <br />
            <li>
              Kami juga menawarkan paket layanan perawat dan bidan yang
              terjangkau dan disesuaikan dengan kebutuhan perawatan medis Anda.
              Silakan hubungi kami untuk informasi lebih lanjut dan diskusi
              mengenai layanan dan biaya perawat dan bidan yang sesuai dengan
              kondisi kesehatan Anda.
            </li>
          </ul>
        }
      />

      {/* End Prices */}
    </Pelayanan>
  );
};

export default Perawatanpage;
