// src/components/sections/Hero.tsx
"use client";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-gray-100 px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        We Craft Scalable Products
        <br />
        for Indonesian Market
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl">
        Bangun bisnismu bersama tim tech lokal yang ngerti market dan gak ngasih
        solusi ngawang.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <Button>Start Project</Button>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Get Started
        </button>
        <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
          See Our Work
        </button>
      </div>
    </section>
  );
}
