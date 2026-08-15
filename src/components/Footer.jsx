import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import logo from "../assets/WINCARE LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a2430] text-[#eaf7f4]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <img src={logo} alt="WINCare logo" className="h-12 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#d7edf0]">
              We improve health and wellbeing through community-centered care,
              education, advocacy, and practical support for vulnerable people.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9e8d4]">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#d7edf0]">
              <li>
                <a href="/#" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/#/about" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="transition hover:text-white">
                  Projects
                </a>
              </li>
              
              <li>
                <a href="/#/" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9e8d4]">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-[#d7edf0]">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#9adcc2]" />
                Takoradi, Ghana
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#9adcc2]" />
                +233 20 199 0499
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#9adcc2]" />
                wincare.fdn@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#cde8e1]">© 2026 WINCare. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[#d7edf0]">
            <a
              href="https://www.linkedin.com/company/wincarefoundation/posts/"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2 transition hover:border-[#9adcc2] hover:text-white"
            >
              <FaLinkedin className="text-sm" />
            </a>
            <a
              href="https://www.instagram.com/w.i.n.care/?hl=en"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-2 transition hover:border-[#9adcc2] hover:text-white"
            >
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
