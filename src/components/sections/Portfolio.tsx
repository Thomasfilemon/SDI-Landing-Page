"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Project = {
  name: string;
  images: string[];
};

const projects: Project[] = [
  {
    name: "Hotel Dwipas",
    images: [
      "/images/hotelhome.png",
      "/images/hotellaundry.png",
      "/images/hotelrooms.png",
      "/images/hotellogistic.png",
    ],
  },
  {
    name: "Maju Mobilindo",
    images: ["/images/mobilmanagement.png", "/images/mobilhome.png"],
  },
  {
    name: "Restaurant POS",
    images: ["/images/kar-lengge.png"],
  },
  {
    name: "Alumka Lampung",
    images: [
      "/images/alumkabarang.png",
      "/images/alumkapenjualan.png",
      "/images/alumkamutasi1.png",
      "/images/alumkasuratjalan.png",
    ],
  },
];

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setCurrentImgIndex(0);
  };

  const closeModal = () => {
    setCurrentProject(null);
    setCurrentImgIndex(0);
  };

  const nextImage = () => {
    if (!currentProject) return;
    setCurrentImgIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    if (!currentProject) return;
    setCurrentImgIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-[#f5f7fa] dark:bg-gray-900 overflow-hidden"
    >
      <div className="text-center mb-10 px-4 sm:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-9 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Portfolio
        </h2>

        <div className="relative group overflow-hidden">
          <div className="flex w-max animate-scroll whitespace-nowrap gap-6 group-hover:[animation-play-state:paused]">
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={idx}
                onClick={() => openModal(project)}
                className="cursor-pointer bg-white dark:bg-[#0e0f1b] border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-xl hover:scale-[1.03] transition-all duration-300 min-w-[300px] sm:min-w-[360px]"
              >
                <div className="overflow-hidden rounded-xl border border-gray-300 dark:border-gray-600">
                  <Image
                    src={project.images[0]}
                    alt={project.name}
                    width={360}
                    height={200}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-3 text-center text-gray-800 dark:text-white">
                  {project.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {currentProject && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white dark:bg-[#12131f] p-6 rounded-2xl max-w-3xl w-full relative shadow-2xl border border-gray-200 dark:border-gray-700"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl"
                >
                  ×
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                  {currentProject.name}
                </h2>
                <Image
                  src={currentProject.images[currentImgIndex]}
                  alt={`Image ${currentImgIndex + 1}`}
                  width={1000}
                  height={600}
                  className="rounded-xl mb-6 object-contain max-h-[60vh] w-full mx-auto border border-gray-300 dark:border-gray-700"
                />
                <div className="flex justify-between items-center text-gray-700 dark:text-gray-300 font-medium">
                  <button
                    onClick={prevImage}
                    className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg transition"
                  >
                    ← Prev
                  </button>
                  <span className="text-sm">
                    {currentImgIndex + 1} / {currentProject.images.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg transition"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Add keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
