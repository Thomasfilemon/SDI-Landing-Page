"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaBolt,
  FaUsers,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [showQRModal, setShowQRModal] = useState(false);

  const features = [
    {
      icon: FaCode,
      title: "Expertise Teknologi",
      description:
        "Tim developer berpengalaman dengan keahlian di berbagai teknologi modern",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FaBolt,
      title: "Solusi Inovatif",
      description:
        "Pendekatan kreatif untuk menyelesaikan tantangan bisnis Anda",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: FaUsers,
      title: "Tim Kolaboratif",
      description: "Bekerja secara sinergis untuk hasil maksimal",
      color: "from-green-500 to-green-600",
    },
    {
      icon: FaRocket,
      title: "Growth Minded",
      description:
        "Fokus pada pertumbuhan berkelanjutan dan transformasi digital",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const metrics = [
    { value: "10+", label: "Proyek Diselesaikan", color: "text-blue-400" },
    { value: "100%", label: "Kepuasan Klien", color: "text-purple-400" },
    { value: "2+", label: "Tahun Pengalaman", color: "text-green-400" },
    { value: "24/7", label: "Support Tersedia", color: "text-orange-400" },
  ];

  const values = [
    "Inovasi berkelanjutan dalam setiap solusi",
    "Komitmen pada kualitas dan excellence",
    "Transparansi dan integritas dalam setiap project",
    "Adaptasi cepat terhadap perubahan teknologi",
    "Fokus pada transformasi digital yang berkelanjutan",
  ];

  return (
    <>
      <section
        id="about"
        className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tentang Kami
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Swakarsa Digital Indonesia adalah perusahaan teknologi yang
              berfokus pada solusi digital inovatif. Kami berkomitmen untuk
              membantu bisnis tumbuh melalui transformasi digital yang efektif
              dan berkelanjutan.
            </motion.p>
          </motion.div>

          {/* Company Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Metrics Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`text-4xl md:text-5xl font-bold mb-2 ${metric.color}`}
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(96, 165, 250, 0)",
                        "0 0 20px rgba(96, 165, 250, 0.5)",
                        "0 0 10px rgba(96, 165, 250, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values and Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Misi Kami</h3>
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-xl">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Memberdayakan bisnis Indonesia melalui transformasi digital
                  yang inovatif, berkelanjutan, dan berorientasi pada masa
                  depan.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Kami menciptakan solusi teknologi yang tidak hanya memecahkan
                  masalah hari ini, tetapi juga mempersiapkan bisnis Anda untuk
                  tantangan masa depan.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Nilai-Nilai Kami
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <FaCheckCircle className="text-blue-400 flex-shrink-0" />
                    <p className="text-gray-300">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-blue-500/30 backdrop-blur-sm shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Siap untuk Transformasi Digital?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Mari bersama kami wujudkan visi digital Anda dan bawa bisnis
                Anda ke level selanjutnya.
              </p>
              <motion.button
                onClick={() => setShowQRModal(true)}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Kami
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRModal(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl max-w-md w-full relative shadow-2xl border border-purple-500/30"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQRModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center transition-colors duration-300 text-gray-400 hover:text-white"
              >
                <span className="text-xl">×</span>
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center text-white">
                {"Let's Connect!"}
              </h2>

              <div className="rounded-2xl overflow-hidden border border-purple-500/30 bg-white p-4">
                <Image
                  src="/images/SDI-QR.png"
                  alt="SDI QR Code"
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-center text-gray-300 mt-6">
                https://wa.me/6282279513201
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
