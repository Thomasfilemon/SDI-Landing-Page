import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="logo">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="font-medium">
          HOME
        </a>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#about">About</Link>
        <Button className="ml-4">{"Let's Talk"}</Button>
      </nav>
    </header>
  );
}
