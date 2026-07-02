"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { t, language, toggleLanguage, isRtl } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "/about" },
    { name: t("nav_services"), href: "/services" },
    { name: t("nav_contact"), href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-2">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block hover:opacity-85 transition-opacity duration-300">
              <img
                src="/logo.png"
                alt="Experts Legal Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links (Visible on all devices, scrollable if space is tight) */}
          <nav className="flex items-center overflow-x-auto no-scrollbar py-1 space-x-3 sm:space-x-6 mx-2 max-w-[40vw] sm:max-w-none">
            <div className={`flex items-center ${isRtl ? "space-x-reverse space-x-3 sm:space-x-6" : "space-x-3 sm:space-x-6"}`}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[10px] sm:text-sm font-semibold tracking-wide transition-colors relative py-1.5 whitespace-nowrap group ${
                      scrolled || !isHome
                        ? isActive
                          ? "text-gold-400 font-bold"
                          : "text-slate-200 hover:text-gold-400"
                        : isActive
                          ? "text-gold-400 font-bold"
                          : "text-white hover:text-gold-400"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Action buttons (Language switcher & CTA - Visible on all devices) */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 rtl:space-x-reverse text-[10px] sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-2 rounded-full border transition-all duration-300 ${
                scrolled || !isHome
                  ? "text-slate-200 border-slate-700 hover:border-gold-500 hover:text-gold-400"
                  : "text-white border-white/20 hover:border-gold-500 hover:text-gold-400"
              }`}
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">{language === "en" ? "العربية" : "English"}</span>
            </button>

            <Link
              href="/booking"
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wide uppercase transition-all duration-300 transform hover:-translate-y-0.5 gold-gradient-bg text-navy-900 hover:shadow-lg hover:shadow-gold-500/20 whitespace-nowrap"
            >
              <PhoneCall className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t("nav_book_btn")}</span>
            </Link>

            {/* Mobile Menu Trigger (☰) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-1.5 sm:p-2 rounded-md transition-colors ${
                scrolled || !isHome ? "text-slate-200 hover:text-white" : "text-white hover:text-gold-400"
              }`}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-navy-900/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-bold text-slate-100 hover:bg-navy-800 hover:text-gold-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-full text-center text-base font-bold gold-gradient-bg text-navy-900 shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t("nav_book_btn")}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
