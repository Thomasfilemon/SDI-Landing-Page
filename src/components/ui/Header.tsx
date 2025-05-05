"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [showQRModal, setShowQRModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="h-12 w-auto flex items-center">
            <Image
              className="invert"
              src="/images/logo.png"
              alt="SDI logo"
              width={180}
              height={48}
              priority
            />
          </div>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#hero"
              className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
            >
              About
            </Link>

            {/* Talk Button */}
            <Button
              onClick={() => setShowQRModal(true)}
              className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
            >
              {"Let's Talk"}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden bg-black text-white shadow-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 px-6 py-4">
                <Link
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="#portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
                >
                  Portfolio
                </Link>
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-white hover:text-purple-400 transition-colors duration-200"
                >
                  About
                </Link>

                <Button
                  onClick={() => {
                    setShowQRModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  {"Let's Talk"}
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

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
                  https://wa.me/6282279513201
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
