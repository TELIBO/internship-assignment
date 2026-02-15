"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-white/[0.97] backdrop-blur-[10px] py-3.5 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link
          href="#"
          className="font-heading text-[1.35rem] text-dark"
          onClick={(e) => smoothScroll(e, "#hero")}
        >
          Dr. Maya Reynolds
        </Link>

        <button
          className={`hamburger md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1 ${
            isOpen ? "active" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul
          className={`
            flex items-center gap-8
            md:static md:flex-row md:w-auto md:h-auto md:bg-transparent md:shadow-none md:p-0 md:gap-8
            max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen max-md:bg-white max-md:flex-col max-md:items-start max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:gap-5 max-md:shadow-[-4px_0_20px_rgba(0,0,0,0.1)] max-md:transition-[right] max-md:duration-300
            ${isOpen ? "max-md:right-0" : "max-md:right-[-100%]"}
          `}
        >
          {["about", "services", "approach", "office", "faq"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="nav-link-hover text-[0.9rem] font-medium text-dark"
                onClick={(e) => smoothScroll(e, `#${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block px-6 py-2.5 bg-accent text-white border-2 border-accent rounded-md text-[0.9rem] font-medium transition-all duration-300 hover:bg-accent-dark hover:border-accent-dark"
              onClick={(e) => smoothScroll(e, "#contact")}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
