"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0B0F1A] via-[#0F1629] to-[#0B0F1A] text-gray-300 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-4xl font-extrabold text-yellow-500">
            Cosmic Information
          </h2>
          <p className="mt-5 text-base text-gray-400 leading-relaxed max-w-sm">
            Empowering businesses with digital transformation, AI-driven
            solutions, and next-generation IT services to shape the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/digitalmarketing"
                className="hover:text-blue-400 transition"
              >
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="/ai" className="hover:text-blue-400 transition">
                AI
              </Link>
            </li>
            <li>
              <Link
                href="/transformation"
                className="hover:text-blue-400 transition"
              >
                Transformation
              </Link>
            </li>
            <li>
              <Link
                href="/sapservice"
                className="hover:text-blue-400 transition"
              >
                SAP Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href="/sapservice"
                className="hover:text-blue-400 transition"
              >
                SAP Solutions
              </Link>
            </li>
            <li>
              <Link href="/ai" className="hover:text-blue-400 transition">
                AI & ML
              </Link>
            </li>
            <li>
              <Link
                href="/transformation"
                className="hover:text-blue-400 transition"
              >
                AI Powered Marketing
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition transform hover:scale-110"
            >
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-base text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Cosmic Information</span>.
        All rights reserved.
      </div>
    </footer>
  );
}
