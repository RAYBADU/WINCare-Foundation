import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#123928] text-[#edf8f1]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-white">WINCare</h3>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#cfe2d7]">
              We stand with communities by bringing support, hope, and practical care to families who need it most.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9d1b6]">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#dfeee3]">
              <li><a href="#home" className="transition hover:text-white">Home</a></li>
              <li><a href="#about" className="transition hover:text-white">About</a></li>
              <li><a href="#outreaches" className="transition hover:text-white">Outreaches</a></li>
              <li><a href="#donate" className="transition hover:text-white">Donate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a9d1b6]">Contact</h4>
            <ul className="mt-4 space-y-4 text-sm text-[#dfeee3]">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#8cc5a1]" />
                Accra, Ghana
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#8cc5a1]" />
                +233 24 000 0000
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#8cc5a1]" />
                hello@wincare.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#cfe2d7]">© 2026 WINCare. All rights reserved.</p>

          <div className="flex items-center gap-4 text-[#dfeee3]">
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/10 p-2 transition hover:border-[#8cc5a1] hover:text-white">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2 transition hover:border-[#8cc5a1] hover:text-white">
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
