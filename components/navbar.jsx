"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing", href: "/digitalmarketing" },
    { name: "AI", href: "/ai" },
    { name: "Transformation", href: "/transformation" },
    { name: "SAP Service", href: "/sapservice" },
    { name: "Managed Business Service", href: "/managedbusiness" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0F19]/95 shadow-lg backdrop-blur-md" : "bg-[#0B0F19]"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Cosmic Logo"
            width={90}
            height={90}
            className="rounded-lg"
          />
          <span className="text-white font-semibold text-lg leading-tight">
            Cosmic Information <br /> System, LLC
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg overflow-hidden group ${
                item.name === "Home" ? "bg-[#2E1A57]" : ""
              }`}
            >
              {/* Background gradient effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>

              {/* Text */}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="relative px-5 py-2 rounded-full bg-yellow-400 text-[#0B0F19] font-semibold overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0F19] flex flex-col items-center space-y-6 py-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative px-4 py-2 text-lg text-white rounded-lg overflow-hidden group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-yellow-400 text-[#0B0F19] font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
