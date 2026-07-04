"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Send, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t, isRtl } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient text-white border-t border-gold-500/20 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Licensing */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-block hover:opacity-85 transition-opacity duration-300">
              <img
                src="/logo.png"
                alt="Experts Legal Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              {t("footer_desc")}
            </p>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              {t("footer_licensed")}
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-500">
              {t("footer_quick_links")}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-gold-500 transition-colors">{t("nav_home")}</Link></li>
              <li><Link href="/about" className="hover:text-gold-500 transition-colors">{t("nav_about")}</Link></li>
              <li><Link href="/services" className="hover:text-gold-500 transition-colors">{t("nav_services")}</Link></li>
              <li><Link href="/booking" className="hover:text-gold-500 transition-colors">{t("nav_book_btn")}</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-500">
              {t("footer_newsletter")}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {isRtl ? "احصل على تنبيهات تنظيمية للشركات وملخصات تحديثات الامتثال في صندوق الوارد الخاص بك." : "Get corporate regulatory alerts and compliance update digests in your inbox."}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                required
                placeholder={t("footer_newsletter_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 text-sm text-white focus:outline-none focus:border-gold-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-5 py-3 rounded-xl text-sm font-bold gold-gradient-bg text-navy-900 transition-transform transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>{subscribed ? "Subscribed!" : t("footer_newsletter_btn")}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} {t("footer_rights")}. {t("footer_licensed")}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-slate-800 hover:border-gold-500 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
