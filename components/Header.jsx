import React, { useState } from 'react'


export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-rose-300 text-purple-800 flex items-center justify-between px-3 py-2 h-14 sm:h-16">
      <div className="text-xl sm:text-2xl font-semibold">Hitesh Sharma</div>
      {/* Desktop Nav */}
      <nav className="hidden sm:flex text-base sm:text-xl font-medium gap-4 sm:gap-6">
        <a href="#skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#Education">Education</a>
        <a href="#social">Social</a>
        <a href="#Gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-xl px-2 py-1 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-rose-300 shadow-md z-10 sm:hidden">
          <nav className="flex flex-col items-center py-2 text-base font-medium gap-2">
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#Experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#Education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#Gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="#social" onClick={() => setMenuOpen(false)}>Social</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
