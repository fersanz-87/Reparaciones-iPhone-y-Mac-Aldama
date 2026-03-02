"use client";

import { useState, useEffect } from "react";
import { siteConfig, navLinks } from "@/data/site-config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              🔧
            </span>
            <div>
              <span
                className={`text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {siteConfig.name}
              </span>
              <span
                className={`hidden text-xs sm:block transition-colors duration-300 ${
                  isScrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacion principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    : "text-gray-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 rounded-full bg-[#007AFF] px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0066DD]"
            >
              Solicita tu diagnostico
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`rounded-lg p-2 lg:hidden transition-colors ${
              isScrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="border-t border-gray-200 bg-white lg:hidden"
          aria-label="Navegacion movil"
        >
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={handleNavClick}
              className="mt-2 block rounded-full bg-[#007AFF] px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-[#0066DD]"
            >
              Solicita tu diagnostico
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
