"use client"
import { links } from "../common/microapps-data";


const Navbar = () => {
  return (
    <nav className="w-full z-50 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-light font-semibold text-3xl">
          MicroApps
        </div>
        <div className="hidden sm:flex items-center gap-10 text-light">
          {links.map(l => (
            <a key={l} className="text-sm uppercase hover:cursor-pointer font-inter font-semibold hover:text-blue-500 transition-colors duration-500">
            {l}
            </a>
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