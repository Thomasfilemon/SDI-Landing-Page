'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

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
  const [isPaused, setIsPaused] = useState(false);

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
    <section className="py-20 bg-gray-100">
      <div className="px-4 sm:px-8 max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
          Portfolio
        </h2>

        {/* 🔥 Horizontal auto-scroll container with pause on hover */}
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={!isPaused ? { x: ['0%', '-100%'] } : {}}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                onClick={() => openModal(project)}
                className="min-w-[300px] max-w-sm bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition duration-300"
              >
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  width={400}
                  height={240}
                  className="rounded-lg object-cover w-full h-48"
                />
                <h3 className="text-gray-700 text-lg font-semibold mt-4 text-center">
                  {project.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 💥 Modal */}
        <AnimatePresence>
          {currentProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl max-w-3xl w-full relative shadow-2xl border border-gray-200"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                >
                  ×
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                  {currentProject.name}
                </h2>
                <Image
                  src={currentProject.images[currentImgIndex]}
                  alt={`Image ${currentImgIndex + 1}`}
                  width={1000}
                  height={600}
                  className="rounded-xl mb-6 object-contain max-h-[60vh] w-full mx-auto border"
                />
                <div className="flex justify-between items-center text-gray-700 font-medium">
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
    </section>
  );
};