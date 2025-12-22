import React from "react";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="bg-black text-white">
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-md mb-12 md:mb-0 slide-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">CREATE YOUR PC</h1>

          <p className="text-gray-300 mb-6 text-base md:text-lg">
            Build your dream PC with ease. Choose components, compare
            performance, and customize every part.
          </p>

          <Link
            to="/readme"
            className="neon-btn px-8 py-3 rounded-lg text-lg inline-block"
          >
            Read More
          </Link>
        </div>

        <div className="max-w-xl slide-right">
          <img
            src="/icon/img1.jpg"
            className="w-full rounded-2xl shadow-xl border border-gray-700 animate-[float_5s_ease-in-out_infinite]"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
        <div className="max-w-md mb-10 md:mb-0 slide-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Next-Gen 3D Build</h2>

          <p className="text-gray-300 text-base md:text-lg mb-4">
            Beginner friendly for users to add components of their choice and
            customize PC builds according to their needs.
          </p>
        </div>

        <div className="max-w-md slide-right">
          <img
            src="/icon/3dmodel.jpg"
            className="w-full rounded-2xl border border-gray-700 shadow-[0_10px_30px_rgba(255,255,255,0.15)] 
                   transition duration-500 hover:scale-105 hover:shadow-[0_15px_45px_rgba(255,255,255,0.25)]
                   animate-[float_6s_ease-in-out_infinite]"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Hero;
