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
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="text-center mb-16 px-4 sm:px-8 max-w-screen-xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Portfolio
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Jelajahi karya-karya digital kami yang menggabungkan inovasi dan keunggulan
        </motion.p>

        <div className="relative group overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-xl -z-10" />
          <div className="flex w-max animate-scroll whitespace-nowrap gap-8 py-4 group-hover:[animation-play-state:paused]">
            {[...projects, ...projects].map((project, idx) => (
              <motion.div
                key={idx}
                onClick={() => openModal(project)}
                className="cursor-pointer relative group/card"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-blue-500/30 rounded-3xl p-6 shadow-2xl backdrop-blur-sm min-w-[300px] sm:min-w-[360px] overflow-hidden">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none">
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="overflow-hidden rounded-2xl border border-blue-500/20 mb-4">
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={360}
                      height={200}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover/card:scale-105 filter brightness-90 group-hover/card:brightness-100"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-white mb-2">
                    {project.name}
                  </h3>
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {currentProject && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl max-w-4xl w-full relative shadow-2xl border border-blue-500/30"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 text-gray-400 hover:text-white group"
                >
                  <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
                </button>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
                  {currentProject.name}
                </h2>
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 mb-8 shadow-xl">
                  <Image
                    src={currentProject.images[currentImgIndex]}
                    alt={`Image ${currentImgIndex + 1}`}
                    width={1000}
                    height={600}
                    className="object-contain max-h-[60vh] w-full mx-auto"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <motion.button
                    onClick={prevImage}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-lg">←</span> Prev
                  </motion.button>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-400 mb-1">Image</span>
                    <span className="text-lg font-bold text-white">
                      {currentImgIndex + 1} / {currentProject.images.length}
                    </span>
                  </div>
                  <motion.button
                    onClick={nextImage}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next <span className="text-lg">→</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced keyframes */}
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
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}