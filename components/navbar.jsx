"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing", href: "/digitalmarketing" },
    { name: "AI & Automation", href: "/aiautomation" },
    { name: "Digital Transformation", href: "/digitaltransformation" },
    { name: "SAP Services", href: "/sapservices" },
    { name: "Managed Business Services", href: "/managedbusiness" },
  ];

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animations for mobile menu
  useEffect(() => {
    if (menuOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      tl.fromTo(
        menuItemsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.2"
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#185B84]"
      }`}
    >
      <div className="max-w-full mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cosmic Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav - Middle */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-lg font-bold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative transition-colors ${
                scrolled ? "text-[#185B84]" : "text-white"
              } group`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA - Right */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-yellow-400 text-[#185B84] font-semibold hover:bg-yellow-500 transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-[60]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <X
              className={`${
                scrolled ? "text-[#185B84]" : "text-white"
              } h-8 w-8`}
            />
          ) : (
            <Menu
              className={`${
                scrolled ? "text-[#185B84]" : "text-white"
              } h-8 w-8`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#185B84] text-white flex flex-col items-center justify-center space-y-8 z-40 md:hidden translate-x-full"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-2xl hover:text-yellow-400 transition-all"
            onClick={handleLinkClick}
            ref={(el) => (menuItemsRef.current[index] = el)}
          >
            {item.name}
          </Link>
        ))}

        {/* CTA inside mobile menu */}
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-yellow-400 text-[#185B84] font-semibold hover:bg-yellow-500 transition"
          onClick={handleLinkClick}
          ref={(el) => (menuItemsRef.current[navItems.length] = el)}
        >
          Get In Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
