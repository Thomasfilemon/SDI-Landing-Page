"use client";

import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartBar,
  FaCashRegister,
  FaBrain,
  FaSpider,
  FaCog,
  FaPlug,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

// Fix TypeScript type for intervals
type Timer = ReturnType<typeof setTimeout>;
type Interval = ReturnType<typeof setInterval>;

const services = [
  {
    title: "Manajemen Inventori",
    desc: "Sistem untuk mengelola stok barang secara real-time, memantau masuk dan keluar barang",
    tech: "Database, Cloud Computing, Web Application",
    benefits:
      "Mengurangi kesalahan stok, meningkatkan efisiensi pengelolaan barang",
    explanation:
      "Solusi terintegrasi untuk mengotomatisasi tracking inventory Anda. Dengan dashboard real-time, Anda dapat memantau stok, mengatur reorder points, dan menganalisis pergerakan barang. Sistem ini juga mendukung barcode scanning dan multi-warehouse management.",
    price: "3,000,000",
    icon: FaDatabase,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Akuntansi",
    desc: "Aplikasi untuk pencatatan transaksi keuangan, laporan keuangan, dan perpajakan",
    tech: "Software Akuntansi, Cloud, API Integrasi",
    benefits: "Mempermudah pengelolaan keuangan, meningkatkan akurasi laporan",
    explanation:
      "Platform akuntansi komprehensif yang menghandle cash flow, invoicing, dan financial reporting. Dengan fitur pajak otomatis sesuai regulasi Indonesia, integrasi bank, dan dashboard keuangan yang mudah dipahami untuk membantu pengambilan keputusan bisnis.",
    price: "3,500,000",
    icon: FaChartBar,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Point of Sale (POS)",
    desc: "Sistem kasir digital untuk transaksi penjualan dan manajemen pelanggan",
    tech: "Mobile App, Cloud, Barcode Scanner",
    benefits: "Mempercepat proses transaksi, memudahkan pelacakan penjualan",
    explanation:
      "Sistem POS modern dengan interface intuitif untuk kasir. Dilengkapi manajemen customer, loyalty program, pembayaran digital, dan analytics penjualan. Dapat bekerja offline dan sync otomatis ketika online kembali untuk uninterrupted business operation.",
    price: "3,000,000",
    icon: FaCashRegister,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Integrasi AI",
    desc: "Penggunaan kecerdasan buatan untuk analisis data, prediksi, dan otomatisasi proses bisnis",
    tech: "Machine Learning, NLP, Computer Vision",
    benefits:
      "Meningkatkan efisiensi operasional, pengambilan keputusan berbasis data",
    explanation:
      "Implementasi AI untuk forecasting penjualan, customer behavior analysis, dan process optimization. Termasuk chatbot untuk customer service, automated document processing, dan predictive maintenance untuk equipment management.",
    price: "15,000,000",
    icon: FaBrain,
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Web Scraping",
    desc: "Pengumpulan data otomatis dari situs web untuk analisis pasar dan kompetitor",
    tech: "Python, Scrapy, API",
    benefits: "Mendapatkan data pasar dan kompetitor secara cepat dan akurat",
    explanation:
      "Automated data collection untuk monitor harga kompetitor, market trends, dan customer sentiment. Dengan scheduled scraping dan data visualization, Anda mendapat insights real-time untuk strategic decision making tanpa manual research.",
    price: "5,500,000",
    icon: FaSpider,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Otomasi",
    desc: "Sistem otomatisasi tugas rutin seperti pengiriman email, pengolahan data, dan notifikasi",
    tech: "RPA (Robotic Process Automation), Scripting",
    benefits:
      "Menghemat waktu dan biaya operasional, mengurangi kesalahan manual",
    explanation:
      "Solusi RPA untuk mengotomatisasi repetitive tasks seperti data entry, email marketing, dan report generation. Dengan workflow automation, tim Anda bisa fokus pada pekerjaan strategic sementara tugas rutin dihandle sistem secara efisien.",
    price: "5,500,000",
    icon: FaCog,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "IoT (Internet of Things)",
    desc: "Integrasi perangkat pintar untuk monitoring dan kontrol jarak jauh",
    tech: "Sensor, Microcontroller, Cloud IoT Platform",
    benefits: "Meningkatkan pengawasan dan efisiensi operasional",
    explanation:
      "Implementasi smart sensors untuk real-time monitoring environment, equipment, dan energy consumption. Dengan remote control capability dan alert system, Anda bisa manage operasi dari mana saja sambil optimize resource utilization dan reduce downtime.",
    price: "7,000,000",
    icon: FaPlug,
    color: "from-red-500 to-red-600",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQRModal, setShowQRModal] = useState(false);
  const timeoutRef = useRef<Timer | null>(null);
  const intervalRef = useRef<Interval | null>(null);

  const getPreviousIndex = () => {
    return currentIndex === 0 ? services.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === services.length - 1 ? 0 : currentIndex + 1;
  };

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const pauseAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    if (!intervalRef.current) {
      startAutoPlay();
    }
  };

  const resetAutoPlay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(getPreviousIndex());
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex(getNextIndex());
    resetAutoPlay();
  };

  const currentService = services[currentIndex];
  const previousService = services[getPreviousIndex()];
  const nextService = services[getNextIndex()];

  // Floating animation variants
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <>
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
      >
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Digital Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming businesses with innovative technology solutions
                tailored for your success
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-8xl mx-auto">
            <div className="flex items-center justify-center gap-6 lg:gap-10">
              {/* Previous Service Preview */}
              <motion.div
                key={`prev-${getPreviousIndex()}`}
                className="hidden lg:block cursor-pointer opacity-40 hover:opacity-60 transition-opacity"
                onClick={handlePrevious}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  ...floatingAnimation,
                  transition: { ...floatingAnimation.transition, duration: 7 },
                }}
              >
                {(() => {
                  const PrevIcon = previousService.icon;
                  return (
                    <div className="relative">
                      <div className="w-72 p-6 rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm transform scale-90">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                            previousService.color
                          } flex items-center justify-center mb-4 shadow-lg shadow-${
                            previousService.color.split("-")[1]
                          }-500/20`}
                        >
                          <PrevIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {previousService.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {previousService.desc}
                        </p>
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-400">Start from</p>
                          <p className="text-base font-bold text-white">
                            Rp {previousService.price}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${previousService.color} opacity-20 blur-lg -z-10`}
                      />
                    </div>
                  );
                })()}
              </motion.div>

              {/* Current Service - Main Card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-6xl"
                whileHover={{ y: -10 }}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
              >
                <motion.div animate={floatingAnimation} className="relative">
                  {(() => {
                    const CurrentIcon = currentService.icon;
                    return (
                      <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl border-2 border-blue-500/50 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="p-8 md:p-10">
                          <div className="flex flex-row gap-8 md:gap-12">
                            <div className="flex-grow">
                              <div className="flex items-center gap-6 mb-6">
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.8 }}
                                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                                    currentService.color
                                  } flex items-center justify-center flex-shrink-0 shadow-xl shadow-${
                                    currentService.color.split("-")[1]
                                  }-500/30`}
                                >
                                  <CurrentIcon className="w-8 h-8 text-white" />
                                </motion.div>
                                <div>
                                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    {currentService.title}
                                  </h3>
                                  <p className="text-gray-200 text-lg font-medium">
                                    {currentService.desc}
                                  </p>
                                </div>
                              </div>

                              <div className="mb-6">
                                <p className="text-gray-200 leading-relaxed text-lg font-medium">
                                  {currentService.explanation}
                                </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                  <motion.div
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 mr-3 flex-shrink-0" />
                                    <p className="text-gray-200 font-medium">
                                      <span className="text-blue-400 font-bold">
                                        Tech Stack:
                                      </span>{" "}
                                      {currentService.tech}
                                    </p>
                                  </motion.div>
                                  <motion.div
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <span className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0" />
                                    <p className="text-gray-200 font-medium">
                                      <span className="text-green-400 font-bold">
                                        Benefits:
                                      </span>{" "}
                                      {currentService.benefits}
                                    </p>
                                  </motion.div>
                                </div>

                                <div className="border-t md:border-t-0 md:border-l border-gray-700/50 pt-4 md:pt-0 md:pl-8">
                                  <p className="text-gray-300 text-sm font-medium mb-1">
                                    Start from
                                  </p>
                                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    Rp {currentService.price}
                                  </p>
                                  <p className="text-green-400 font-bold text-lg">
                                    One Time Payment
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Multiple gradient shadows for depth */}
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentService.color} opacity-10 blur-xl -z-10`}
                        />
                        <div
                          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${currentService.color} opacity-5 blur-2xl transform scale-110 -z-20`}
                        />

                        {/* Animated gradient border */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-20 blur-sm`}
                          />
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </motion.div>

              {/* Next Service Preview */}
              <motion.div
                key={`next-${getNextIndex()}`}
                className="hidden lg:block cursor-pointer opacity-40 hover:opacity-60 transition-opacity"
                onClick={handleNext}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
                whileHover={{ scale: 1.05, y: -5 }}
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    duration: 7,
                    delay: 0.5,
                  },
                }}
              >
                {(() => {
                  const NextIcon = nextService.icon;
                  return (
                    <div className="relative">
                      <div className="w-72 p-6 rounded-xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 backdrop-blur-sm transform scale-90">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                            nextService.color
                          } flex items-center justify-center mb-4 shadow-lg shadow-${
                            nextService.color.split("-")[1]
                          }-500/20`}
                        >
                          <NextIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">
                          {nextService.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {nextService.desc}
                        </p>
                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-400">Start from</p>
                          <p className="text-base font-bold text-white">
                            Rp {nextService.price}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${nextService.color} opacity-20 blur-lg -z-10`}
                      />
                    </div>
                  );
                })()}
              </motion.div>
            </div>

            {/* Enhanced Navigation Arrows */}
            <motion.button
              onClick={handlePrevious}
              className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotateY: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.1, rotateY: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Futuristic Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {services.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetAutoPlay();
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? `bg-gradient-to-r from-blue-400 to-purple-400 w-8 shadow-lg`
                      : "bg-gray-600 hover:bg-gray-500 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  animate={
                    currentIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: currentIndex === index ? Infinity : 0,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowQRModal(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
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
                Let's Connect!
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
                Scan to connect with Swakarsa Digital Indonesia
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}