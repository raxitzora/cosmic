import Link from "next/link";

import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

// Navigation Links
const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Digital Marketing",
    href: "/digitalmarketing",
  },
  {
    title: "AI",
    href: "/ai",
  },
  {
    title: "Transformation",
    href: "/transformation",
  },
  {
    title: "SAP Services",
    href: "/sapservice",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

// Services Links
const servicesLinks = [
  {
    title: "SAP Solutions",
    href: "/sapservice",
  },
  {
    title: "AI & ML",
    href: "/ai",
  },
  {
    title: "AI Powered Marketing",
    href: "/transformation",
  },
  {
    title: "Automation",
    href: "/",
  },
];

// Social Links
const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    hover: "hover:text-blue-500",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
    hover: "hover:text-sky-400",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
    hover: "hover:text-pink-500",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
    hover: "hover:text-blue-600",
  },
];

// Reusable Footer List
function FooterLinks({ title, links }) {
  return (
    <div>
      <h3
        className="
          mb-6 text-xl
          font-semibold text-white
        "
      >
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              prefetch={true}
              className="
                text-base text-gray-300
                transition-colors duration-300
                hover:text-blue-400
              "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-gradient-to-r
        from-[#0B0F1A]
        via-[#0F1629]
        to-[#0B0F1A]
        px-6 py-20
        text-gray-300
      "
    >
      <div
        className="
          mx-auto grid
          max-w-7xl
          grid-cols-1 gap-14
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* BRAND */}
        <div>
          <h2
            className="
              text-4xl font-extrabold
              text-yellow-500
              md:text-3xl
            "
          >
            Demo Frontend Website
          </h2>

          <p
            className="
              mt-5 max-w-sm
              text-base leading-relaxed
              text-gray-400
            "
          >
            Empowering businesses with digital
            transformation, AI-driven solutions,
            and next-generation IT services.
          </p>
        </div>

        {/* QUICK LINKS */}
        <FooterLinks
          title="Quick Links"
          links={quickLinks}
        />

        {/* SERVICES */}
        <FooterLinks
          title="Services"
          links={servicesLinks}
        />

        {/* SOCIALS */}
        <div>
          <h3
            className="
              mb-6 text-xl
              font-semibold text-white
            "
          >
            Follow Us
          </h3>

          <div className="flex gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    text-gray-400
                    transition-all duration-300
                    hover:scale-110
                    ${social.hover}
                  `}
                >
                  <Icon className="h-7 w-7" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          mt-16 border-t
          border-white/10
          pt-8 text-center
          text-sm text-gray-500
          md:text-base
        "
      >
        © {currentYear}{" "}
        <span className="font-semibold text-white">
          RAXIT ZORA
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}