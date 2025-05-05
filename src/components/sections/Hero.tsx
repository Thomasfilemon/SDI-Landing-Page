"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaRocket, FaCog } from "react-icons/fa";

export default function Hero() {
  // Floating animation variant
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-4 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRocket className="text-blue-400 text-2xl" />
              <span className="text-blue-400 font-semibold">Swakarsa Digital Indonesia</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Solusi Digital
              </span>
              <br />
              <span className="text-white">untuk Bisnis Anda</span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Perusahaan teknologi yang berfokus pada pengembangan software dan website. 
              Kami membantu bisnis Anda berkembang dengan solusi digital yang inovatif, 
              andal, dan disesuaikan dengan kebutuhan.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Proyek Kami
                <FaArrowRight className="text-sm" />
              </motion.a>
              
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 border border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-full transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pelajari Layanan
                <FaCog className="text-sm" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-purple-400 mb-1">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center md:text-left col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-green-400 mb-1">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-blue-400/30 rounded-full blur-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Main floating animation for the image container */}
            <motion.div
              animate={floatingAnimation}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30">
                {/* Team Members Layout */}
                <div className="p-6 space-y-4">
                  {/* YOYO - Top Row */}
                  <motion.div 
                    className="relative overflow-hidden rounded-xl group"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[2/1] w-full">
                      <Image
                        src="/images/yoyo.jpeg"
                        alt="Team Member - Yoyo"
                        width={600}
                        height={300}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="font-bold text-2xl">Yoyo</h3>
                        <p className="text-lg text-gray-300">System Analyst</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Bottom Row - Thomas and Jethro */}
                  <div className="flex flex-row gap-4">
                    {/* THOMAS */}
                    <motion.div 
                      className="relative overflow-hidden rounded-xl group flex-1"
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-square w-full">
                        <Image
                          src="/images/Thomas.jpeg"
                          alt="Team Member - Thomas"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <h3 className="font-bold text-xl">Thomas</h3>
                          <p className="text-base text-gray-300">Designer</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* JETHRO */}
                    <motion.div 
                      className="relative overflow-hidden rounded-xl group flex-1"
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-square w-full">
                        <Image
                          src="/images/Jethro.jpeg"
                          alt="Team Member - Jethro"
                          width={300}
                          height={300}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white">
                          <h3 className="font-bold text-xl">Jethro</h3>
                          <p className="text-base text-gray-300">Developer</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Gradient overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl pointer-events-none" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>

            {/* Floating technology icons */}
            <motion.div 
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -10, 0] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <FaCode className="text-2xl" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0] 
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5 
              }}
            >
              <FaRocket className="text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full flex gap-2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}