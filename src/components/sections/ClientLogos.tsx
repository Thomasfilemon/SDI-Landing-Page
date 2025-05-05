"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "ALUMKA", file: "ALUMKA.jpeg", company: "Aluminium Manufacturing" },
  { name: "Dwipa", file: "Dwipa.jpeg", company: "Digital Solutions" },
  { name: "FEIXEN", file: "FEIXEN.jpeg", company: "Design Studio" },
  { name: "Maju", file: "Maju.jpeg", company: "Business Group" },
  { name: "TANJAYA", file: "TANJAYA.jpeg", company: "Trading Company" }
];

export default function ClientLogos() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
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
      
      <motion.div 
        className="flex justify-center gap-8 flex-wrap px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            variants={cardVariants}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              transition: { duration: 0.2 } 
            }}
            className="group relative"
          >
            <motion.div 
              className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)" 
              }}
            >
              {/* Logo */}
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={`/images/${client.file}`}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="mx-auto grayscale hover:grayscale-0 transition-all duration-300 filter brightness-90 hover:brightness-110"
                />
              </motion.div>

              {/* Company name */}
              <motion.h3 
                className="text-white font-semibold text-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {client.name}
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-sm mt-1"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {client.company}
              </motion.p>

              {/* Animated border glow */}
              <motion.div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{ 
                  boxShadow: [
                    "0 0 0 1px rgba(59, 130, 246, 0)",
                    "0 0 0 1px rgba(59, 130, 246, 0.3)",
                    "0 0 0 1px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative line */}
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