// src/components/sections/Hero.tsx
"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">
            Solusi Digital untuk Bisnis Anda
          </h1>
          <h1 className="text-4xl font-bold mb-4">
            Solusi Digital untuk Bisnis Anda
          </h1>
          <p className="text-gray-600 mb-6">
            <strong>Swakarsa Digital Indonesia</strong> adalah perusahaan teknologi yang berfokus pada pengembangan
            software dan website. Kami membantu bisnis Anda berkembang dengan
            solusi digital yang inovatif, andal, dan disesuaikan dengan kebutuhan.
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Lihat Proyek Kami
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/hero-illustration.png"
            alt="Ilustrasi Swakarsa Digital"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
