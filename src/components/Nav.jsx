import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaImages,
  FaUsers,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidContact } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

import logo from "../assets/WINCARE LOGO.png";

const Nav = () => {
  const menuLinks = [
    {
      id: 1,
      name: "Home",
      to: "/",
      icon: FaHome,
    },

    {
      id: 2,
      name: "About",
      icon: FaInfoCircle,
      dropdown: [
        {
          name: "About Us",
          to: "/about",
          icon: FaInfoCircle,
        },
        {
          name: "Our Team",
          to: "/team",
          icon: FaUsers,
        },
        {
          name: "Gallery",
          to: "/gallery",
          icon: FaImages,
        },
      ],
    },

    {
      id: 3,
      name: "Projects",
      to: "/projects",
      icon: GoChecklist,
    },

    {
      id: 4,
      name: "Contact",
      to: "/contacts",
      icon: BiSolidContact,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto w-full max-w-6xl rounded-3xl border border-[#dfeadf] bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(18,64,34,0.08)] backdrop-blur-sm">
        {/* =====================================================
            NAVBAR
        ====================================================== */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-shrink-0 items-center"
            aria-label="WINCare home"
          >
            <img
              src={logo}
              alt="WINCare Logo"
              className="h-11 w-auto flex-shrink-0 object-contain"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden flex-1 items-center justify-center gap-2 rounded-full bg-[#edf6ef] p-1 md:flex">
            {menuLinks.map(({ id, name, to, icon: Icon, dropdown }) => (
              <div key={id} className="group relative">
                {/* ================================
                      DROPDOWN LINK
                  ================================= */}
                {dropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#234b3c] transition-all duration-200 hover:bg-white hover:text-[#123928]"
                    >
                      <Icon className="text-base text-[#2e7d5a]" />

                      <span>{name}</span>

                      <span className="ml-1 text-[10px] transition-transform duration-300 group-hover:rotate-180">
                        ▼
                      </span>
                    </button>

                    {/* Dropdown */}
                    <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-[#dfeadf] bg-white p-2 shadow-[0_15px_35px_rgba(18,64,34,0.12)]">
                        {dropdown.map(
                          ({ name: itemName, to: itemTo, icon: ItemIcon }) => (
                            <Link
                              key={itemTo}
                              to={itemTo}
                              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#234b3c] transition-all duration-200 hover:bg-[#edf6ef] hover:text-[#2e7d5a]"
                            >
                              <ItemIcon className="text-sm text-[#5baa8a]" />

                              <span>{itemName}</span>
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  /* ================================
                       NORMAL LINK
                    ================================= */
                  <Link
                    to={to}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[#234b3c] transition-all duration-200 hover:bg-white hover:text-[#123928]"
                  >
                    <Icon className="text-base text-[#2e7d5a]" />

                    <span>{name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* =====================================================
              DONATE BUTTON
          ====================================================== */}
          <Link
            to="/donate"
            className="hidden flex-shrink-0 items-center gap-2 rounded-full bg-[#5baa8a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:bg-[#4A9679] md:inline-flex"
          >
            <FaHeart className="text-base" />
            Donate
          </Link>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#dfeadf] bg-[#f3faf5] text-2xl text-[#123928] md:hidden"
          >
            {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        {isMenuOpen && (
          <div className="mt-3 border-t border-[#e3eee4] pt-3 md:hidden">
            <div className="rounded-2xl bg-[#f3faf5] p-2">
              {menuLinks.map(({ id, name, to, icon: Icon, dropdown }) => (
                <div key={id}>
                  {/* ==================================
                        ABOUT WITH SUB-LINKS
                    =================================== */}
                  {dropdown ? (
                    <>
                      <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#234b3c]">
                        <Icon className="text-[#2e7d5a]" />

                        <span>{name}</span>
                      </div>

                      {/* Sub-links */}
                      <div className="mb-1 ml-9 border-l border-[#cfe2d5] pl-2">
                        {dropdown.map(
                          ({ name: itemName, to: itemTo, icon: ItemIcon }) => (
                            <Link
                              key={itemTo}
                              to={itemTo}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#557066] transition hover:bg-white hover:text-[#2e7d5a]"
                            >
                              <ItemIcon className="text-sm text-[#5baa8a]" />

                              <span>{itemName}</span>
                            </Link>
                          ),
                        )}
                      </div>
                    </>
                  ) : (
                    /* ==================================
                         NORMAL MOBILE LINK
                      =================================== */
                    <Link
                      to={to}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-[#234b3c] transition hover:bg-white"
                    >
                      <Icon className="text-[#2e7d5a]" />

                      <span>{name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* ==================================
                  MOBILE DONATE
              =================================== */}
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#5baa8a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163c2f]"
              >
                <FaHeart className="text-base" />
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
