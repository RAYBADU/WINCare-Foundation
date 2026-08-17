import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaImages,
  FaHeart,
  FaPlus,
} from "react-icons/fa";

import image1 from "../assets/gallery/photo_2026-08-15_00-08-35.jpg";
import image2 from "../assets/gallery/photo_2026-08-15_00-09-34.jpg";
import image3 from "../assets/gallery/photo_2026-08-15_00-10-51.jpg";
import image4 from "../assets/gallery/photo_2026-08-15_00-11-17.jpg";
import image5 from "../assets/gallery/photo_2026-08-15_00-11-23.jpg";
import image6 from "../assets/gallery/photo_2026-08-15_00-11-24.jpg";
import image7 from "../assets/gallery/photo_2026-08-15_00-11-33.jpg";
import image8 from "../assets/gallery/photo_2026-08-15_00-11-46.jpg";
import image9 from "../assets/gallery/photo_2026-08-15_00-15-07.jpg";
import image10 from "../assets/gallery/photo_2026-08-15_00-15-31.jpg";
import image11 from "../assets/gallery/photo_2026-08-15_00-16-34.jpg";
import image12 from "../assets/gallery/photo_2026-08-15_00-16-40.jpg";
import image13 from "../assets/gallery/photo_2026-08-15_00-17-20.jpg";
import image14 from "../assets/gallery/photo_2026-08-15_00-17-26.jpg";
import image15 from "../assets/gallery/photo_2026-08-15_00-17-53.jpg";
import image16 from "../assets/gallery/photo_2026-08-15_00-18-03.jpg";
import image17 from "../assets/gallery/photo_2026-08-15_00-18-08.jpg";
import image18 from "../assets/gallery/photo_2026-08-15_00-18-14.jpg";
import image19 from "../assets/gallery/photo_2026-08-15_00-18-21.jpg";
import image20 from "../assets/gallery/photo_2026-08-15_00-33-40.jpg";

const galleryItems = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
  { id: 12, image: image12 },
  { id: 13, image: image13 },
  { id: 14, image: image14 },
  { id: 15, image: image15 },
  { id: 16, image: image16 },
  { id: 17, image: image17 },
  { id: 18, image: image18 },
  { id: 19, image: image19 },
  { id: 20, image: image20 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleImages = galleryItems.slice(0, visibleCount);

  const currentIndex = selectedImage
    ? galleryItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;

    setSelectedImage(galleryItems[previousIndex]);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, galleryItems.length));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbf9]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32 lg:px-20">
        {/* Decorative background */}
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#5baa8a]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#2e7d5a]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            {/* Label */}
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#4a9577]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5baa8a]/10">
                <FaImages />
              </span>
              Our Gallery
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-[#173b2d] sm:text-6xl md:text-6xl">
              Care in
              <span className="block text-[#5baa8a]">every moment.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              A glimpse into the people, communities, and moments that inspire
              us to keep serving.
            </p>
          </motion.div>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 90 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="mt-10 h-1 rounded-full bg-[#5baa8a]"
          />
        </div>
      </section>

      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}
      <section className="px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            onClick={() => setSelectedImage(galleryItems[0])}
            className="group relative h-[55vh] min-h-[400px] cursor-pointer overflow-hidden rounded-[2rem] md:h-[65vh]"
          >
            <img
              src={galleryItems[0].image}
              alt="WINCARE community outreach"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#173b2d]/40 via-transparent to-transparent" />

            {/* Featured label */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md">
              <FaHeart className="text-[#9ed8bd]" />
              Moments of impact
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence>
              {visibleImages.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.05, 0.25),
                  }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative mb-5 cursor-pointer break-inside-avoid overflow-hidden rounded-[1.5rem]"
                >
                  <img
                    src={item.image}
                    alt="WINCARE community outreach"
                    loading="lazy"
                    className="block w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#173b2d]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Gallery icon */}
                  <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                    <FaImages className="text-sm" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* =================================================
              LOAD MORE
          ================================================== */}
          {visibleCount < galleryItems.length && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-12 flex justify-center"
            >
              <button
                type="button"
                onClick={loadMore}
                className="group flex items-center gap-3 rounded-full border border-[#5baa8a]/30 bg-white px-7 py-3.5 text-sm font-semibold text-[#2e7d5a] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5baa8a] hover:bg-[#f1f8f4] hover:shadow-md cursor-pointer"
              >
                <span>Load More</span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5baa8a]/10 transition-transform duration-300 group-hover:rotate-90">
                  <FaPlus className="text-xs" />
                </span>
              </button>
            </motion.div>
          )}

          {/* All images loaded */}
          {visibleCount >= galleryItems.length && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="mt-12 text-center text-sm text-gray-400"
            >
              You've reached the end of our gallery.
            </motion.p>
          )}
        </div>
      </section>

      {/* =====================================================
          CLOSING MESSAGE
      ====================================================== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-8 md:px-12 lg:px-20">
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5baa8a]/10 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-3xl text-center"
        >
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#5baa8a]/10 text-[#2e7d5a]">
            <FaHeart />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#173b2d] md:text-4xl">
            Every moment matters.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            And every helping hand brings us one step closer to healthier,
            stronger communities.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07130e]/95 p-4 backdrop-blur-sm md:p-8"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <FaTimes />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
            >
              <FaArrowLeft />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage.id}
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage.image}
              alt="WINCARE community outreach"
              className="max-h-[88vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
            >
              <FaArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
