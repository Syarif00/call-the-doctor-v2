import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { FaAmbulance } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";

const nav = [
  {
    name: "Dokter",
    link: "/layanan-dokter",
    dropdown: [
      { name: "Tanya Dokter", link: "#" },
      { name: "Home Visit Dokter", link: "#" },
    ],
  },
  {
    name: "Perawatan",
    link: "/layanan-perawatan",
    dropdown: [
      { name: "Perawat Medis", link: "#" },
      { name: "Perawat & Bidan", link: "#" },
    ],
  },
  {
    name: "Fisioterapi",
    link: "/layanan-fisioterapi",
  },
  {
    name: "Vaksin",
    link: "/layanan-vaksin",
    dropdown: [
      { name: "Vaksin Bayi & Anak", link: "#" },
      { name: "Vaksin Rabies", link: "#" },
      { name: "Suntik Vitamin", link: "#" },
    ],
  },
  {
    name: "Lab",
    link: "/layanan-lab",
    dropdown: [{ name: "Medical Check Up", link: "#" }],
  },
  {
    name: "Lainnya",
    link: "/layanan-lainnya",
    dropdown: [
      { name: "Alat Kesehatan", link: "#" },
      { name: "Obat & Resep Dokter", link: "#" },
    ],
  },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container p-5 mx-auto">
        <nav className="flex items-center justify-between">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="hidden gap-20 font-medium lg:flex"
            onClick={() => isDropdownOpen((prev) => !prev)}
          >
            {nav.map((item, index) => (
              <li className="flex items-center cursor-pointer" key={index}>
                <a href={item.link} className="flex items-center">
                  {item.name}
                </a>

                {item.dropdown && (
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                )}
              </li>
            ))}
          </button>
          <div className="hidden mb-3 text-center lg:inline-block">
            <h2 className="py-1 font-medium">Emergency Call</h2>
            <a
              href="tel:+62 89666132475"
              className="flex items-center gap-2 px-4 py-1 rounded-full outline hover:bg-primary hover:text-white"
            >
              <FaAmbulance />
              <p>+62 896-6613-2475</p>
            </a>
          </div>
          <div className="lg:hidden">
            <button className="btnToggle" onClick={toggleMenu}>
              <RiMenuLine size={35} />
            </button>
          </div>
        </nav>
        <div className={`mobileMenu ${isMenuOpen ? "lg:hidden" : "hidden"}`}>
          <ul className="gap-20 font-medium">
            {nav.map((item, index) => (
              <li
                className="flex items-center px-2 py-3 duration-300 ease-in cursor-pointer hover:bg-primary hover:text-white"
                key={index}
              >
                <a href={item.link} className="flex items-center">
                  {item.name}
                </a>

                {item.dropdown && (
                  <svg
                    className="w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
          <div className="mb-3 text-center">
            <h2 className="py-1 font-medium">Emergency Call</h2>
            <button className="flex items-center justify-center w-full gap-2 px-4 py-3 rounded-full outline hover:bg-primary hover:text-white">
              <FaAmbulance />
              <p>+62 817-4441-5698</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
