import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo">
          <Image
            className="invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        {/* Navigation */}
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
          <Button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
            {"Let's Talk"}
          </Button>
        </nav>

        {/* Mobile Menu Button (Just a placeholder - would need JavaScript to toggle) */}
        <div className="md:hidden">
          <button className="text-white">
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
          </button>
        </div>
      </div>
    </header>
  );
}
