"use client"
import Link from "next/link";
import { links } from "../common/microapps-data";

const Navbar = () => {
  return (
    <nav className="w-full z-50 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-light font-semibold text-3xl">
          MicroApps
        </Link>
        <div className="hidden sm:flex items-center gap-10 text-light">
          {links.map(link => (
            <Link key={link} href={`${link.toLowerCase().split(" ").join("-")}`} className="text-sm uppercase hover:cursor-pointer font-inter font-semibold hover:text-blue-500 transition-colors duration-500">
              {link}
            </Link>
          ))}
        </div>
        <button
          className="sm:hidden text-light hover:text-blue-400 text-xl"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;