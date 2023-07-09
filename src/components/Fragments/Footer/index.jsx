import React from "react";
import logo from "../../../assets/logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container flex justify-around p-5 mx-auto my-10">
      <div className="hidden mx-auto my-auto lg:block">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-5 lg:gap-20">
        <div>
          <h2 className="mb-5 font-medium lg:text-xl text-md">Pages</h2>
          <p className="text-decoration">
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/layanan-dokter">Dokter</a>
          </p>
          <p>
            <a href="/layanan-perawatan">Perawatan</a>
          </p>
          <p>
            <a href="/layanan-fisioterapi">Fisioterapi</a>
          </p>
          <p>
            <a href="/layanan-lab">Lab</a>
          </p>
          <p>
            <a href="/layanan-lainnya">Lainnya</a>
          </p>
        </div>
        <div>
          <h2 className="mb-5 text-sm font-medium lg:text-xl">Hubungi Kami</h2>
          <p>
            Service Reservation: <br /> 0812-2595-3895
          </p>
        </div>
        <div className="">
          <h2 className="mb-5 font-medium text-md lg:text-xl">Sosial Media</h2>
          <div className="flex gap-2">
            <a href="https://facebook.com">
              <FaFacebook size={25} />
            </a>
            <a href="https://instagram.com">
              <FaInstagram size={25} />
            </a>
            <a href="https://twitter.com">
              <FaTwitter size={25} />
            </a>
            <a href="https://youtuber.com">
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
