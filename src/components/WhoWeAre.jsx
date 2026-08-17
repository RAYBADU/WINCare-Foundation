import React from 'react'
import {
  FaArrowRight,
  
} from "react-icons/fa";
import volunterImage from "../assets/about-page-images/photo_2026-08-15_00-33-51.jpg";
import {Link} from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-8 lg:px-12">
             <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
               <div>
                 <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2e7d5a]">
                   Who we are
                 </p>
                 <h2 className="mt-3 text-3xl font-semibold text-[#123928] md:text-4xl">
                   A health-focused organization rooted in compassion and action.
                 </h2>
                 <p className="mt-5 text-base leading-7 text-[#4a655a]">
                   WINCARE is a compassionate health ministry committed to
                   transforming lives by providing free and accessible healthcare
                   to underprivileged communities. As the health arm of Word Impact
                   Nation, a youth focused non-denominational ministry, we aim to
                   make quality healthcare a universal right irrespective of
                   socio-economic status.
                 </p>
                 <p className="mt-4 text-base leading-7 text-[#4a655a]">
                   From health education to preventive care and outreach programs,
                   we focus on practical solutions that strengthen families,
                   protect vulnerable groups, and build healthier communities for
                   the long term.
                 </p>
   
                 <Link to="/donate"
                   
                   className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5baa8a] to-[#4a9577] px-5 py-3.5 text-sm font-semibold text-white transition hover:shadow-[0_12px_32px_rgba(91,170,138,0.35)]"
                 >
                   Donate Now
                   <FaArrowRight className="text-xs" />
                 </Link>
               </div>
   
               <div className="overflow-hidden rounded-[24px] border border-[#dfeadf] bg-white p-3 shadow-[0_20px_45px_rgba(18,57,40,0.08)]">
                 <img
                   src={volunterImage}
                   alt="A volunteer providing healthcare services to a community member"
                   className="h-[480px] w-full rounded-[18px] object-cover"
                 />
               </div>
             </div>
           </section>
  )
}

export default WhoWeAre
