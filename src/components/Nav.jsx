import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaHeart, FaHome, FaInfoCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrGallery } from "react-icons/gr";
import { BiSolidContact } from "react-icons/bi";


import { IoMdClose } from "react-icons/io";


import logo from "../assets/WINCARE LOGO.png";

const Nav = () => {
  const menuLinks = [
    { id: 1, name: "Home", to: "/", icon: FaHome },
    { id: 2, name: "About", to: "/about", icon: FaInfoCircle },
    { id: 3, name: "Projects", to: "/", icon: FaHandsHelping },
    { id: 4, name: "Contact", to: "/", icon: BiSolidContact },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto w-full max-w-6xl rounded-3xl border border-[#dfeadf] bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(18,64,34,0.08)] backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-shrink-0 items-center" aria-label="WINCare home">
            <img
              src={logo}
              alt="WINCare Logo"
              className="h-11 w-auto flex-shrink-0 object-contain"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-2 rounded-full bg-[#edf6ef] p-1 md:flex">
            {menuLinks.map(({ id, name, to, icon: Icon }) => (
              <Link
                key={id}
                to={to}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#234b3c] transition-all duration-200 hover:bg-white hover:text-[#123928]"
              >
                <Icon className="text-base text-[#2e7d5a]" />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          <a
            href="#"
            className="hidden flex-shrink-0 items-center gap-2 rounded-full bg-[#5baa8a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#4A9679] md:inline-flex"
          >
            <FaHeart className="text-base" />
            Donate
          </a>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#dfeadf] bg-[#f3faf5] text-2xl text-[#123928] md:hidden"
          >
            {isMenuOpen ? <IoMdClose/> : <RxHamburgerMenu />}     
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 border-t border-[#e3eee4] pt-3 md:hidden">
            <div className="rounded-2xl bg-[#f3faf5] p-2">
              {menuLinks.map(({ id, name, to, icon: Icon }) => (
                <Link
                  key={id}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#234b3c] transition hover:bg-white"
                >
                  <Icon className="text-[#2e7d5a]" />
                  <span>{name}</span>
                </Link>
              ))}

              <a
                href="#
                "
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#5baa8a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163c2f]"
              >
                <FaHeart className="text-base" />
                Donate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
