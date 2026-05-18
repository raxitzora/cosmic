"use client";

import { useEffect, useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Digital Marketing", href: "/digitalmarketing" },
  { name: "AI", href: "/ai" },
  { name: "Transformation", href: "/transformation" },
  { name: "SAP Service", href: "/sapservice" },
];

function NavLink({ item, pathname, onClick }) {
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg px-4 py-2
        font-medium transition-all duration-300
        group
        ${isActive ? "bg-[#2E1A57]" : ""}
      `}
    >
      {/* Hover Background */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-yellow-400 to-orange-500
          -translate-x-full
          group-hover:translate-x-0
          transition-transform duration-500
        "
      />

      {/* Text */}
      <span className="relative z-10 text-white">
        {item.name}
      </span>
    </Link>
  );
}

const MemoizedNavLink = memo(NavLink);

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled
            ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-lg"
            : "bg-[#0B0F19]"
        }
      `}
    >
      <div
        className="
          mx-auto flex h-20 max-w-7xl
          items-center justify-between
          px-6 lg:px-12
        "
      >
        
        
                {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Homepage"
        >
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={56}
            height={56}
            priority
            className="rounded-lg object-cover"
          />

          <div className="leading-tight">
            <p className="text-lg font-bold text-white">
              Demo Frontend Website
            </p>

            <p className="text-sm text-gray-300">
              By raxitzora
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          {NAV_ITEMS.map((item) => (
            <MemoizedNavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="
              rounded-full bg-yellow-400
              px-5 py-2.5
              font-semibold text-[#0B0F19]
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-yellow-400/40
            "
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
          className="
            text-white transition-transform
            duration-300 hover:scale-110
            md:hidden
          "
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden transition-all duration-300 md:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            flex flex-col items-center gap-5
            bg-[#0B0F19]
            px-6 py-6
          "
        >
          {NAV_ITEMS.map((item) => (
            <MemoizedNavLink
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}

          <Link
            href="/contact"
            className="
              rounded-full bg-yellow-400
              px-6 py-3
              font-semibold text-[#0B0F19]
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-yellow-400/40
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}