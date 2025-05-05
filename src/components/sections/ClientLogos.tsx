"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const clients = [
  { name: "ALUMKA", file: "ALUMKA.jpeg", company: "Aluminium Manufacturing" },
  { name: "Dwipa", file: "Dwipa.jpeg", company: "Digital Solutions" },
  { name: "FEIXEN", file: "FEIXEN.jpeg", company: "Design Studio" },
  { name: "Maju", file: "Maju.jpeg", company: "Business Group" },
  { name: "TANJAYA", file: "TANJAYA.jpeg", company: "Trading Company" }
];

export default function ClientLogos() {
  const [mounted, setMounted] = useState(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  
  const handleClick = (index : number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Dipercaya oleh Perusahaan Terkemuka
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          Kami bangga menghadirkan solusi digital untuk klien-klien unggulan
        </p>
        <div className="flex justify-center gap-8 flex-wrap px-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="relative overflow-hidden rounded-xl px-6 py-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700 shadow-lg cursor-pointer w-44"
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <Image
                  src={`/images/${client.file}`}
                  alt={client.name}
                  width={100}
                  height={50}
                  className="max-h-full max-w-full object-contain grayscale"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold text-sm opacity-0">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1 opacity-0">
                  {client.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.h2 
        className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Dipercaya oleh Perusahaan Terkemuka
      </motion.h2>
      <motion.p 
        className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Kami bangga menghadirkan solusi digital untuk klien-klien unggulan
      </motion.p>
      
      <div className="flex justify-center gap-8 flex-wrap px-4">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              onClick={() => handleClick(index)}
              className="relative overflow-hidden rounded-xl px-6 py-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg cursor-pointer w-44"
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-16 flex items-center justify-center mb-3">
                <Image
                  src={`/images/${client.file}`}
                  alt={client.name}
                  width={100}
                  height={50}
                  className={`max-h-full max-w-full object-contain grayscale transition-all duration-300 ${
                    clickedIndex === index ? "grayscale-0" : "group-hover:grayscale-0"
                  }`}
                />
              </div>
              <div className="text-center">
                <h3 className={`text-white font-semibold text-sm transition-opacity duration-300 ${
                  clickedIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  {client.name}
                </h3>
                <p className={`text-gray-400 text-xs mt-1 transition-opacity duration-300 ${
                  clickedIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}>
                  {client.company}
                </p>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent rounded-xl pointer-events-none transition-opacity duration-300 ${
                clickedIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
