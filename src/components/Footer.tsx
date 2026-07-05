"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const { t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient text-white border-t border-gold-500/20 pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
          
          {/* COLUMN 1 — Company */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6">
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
              {isRtl 
                ? "مرخص من دائرة الاقتصاد والسياحة في دولة الإمارات | رقم التسجيل: 4430091.01" 
                : "Licensed by the UAE Department of Economy & Tourism | Reg No: 4430091.01"}
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
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-500 hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2 — Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-500">
              {isRtl ? "الملاحة السريعة" : "QUICK NAVIGATION"}
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-gold-500 transition-colors">{t("nav_home")}</Link></li>
              <li><Link href="/about" className="hover:text-gold-500 transition-colors">{t("nav_about")}</Link></li>
              <li><Link href="/services" className="hover:text-gold-500 transition-colors">{t("nav_services")}</Link></li>
              <li><Link href="/booking" className="hover:text-gold-500 transition-colors">{t("nav_book_btn")}</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold-500">
              {isRtl ? "معلومات الاتصال" : "CONTACT"}
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <span className="block text-xs font-bold text-gold-500/70 uppercase tracking-wider mb-1">
                  {isRtl ? "عنوان الجناح" : "Suite Address"}
                </span>
                <span className="text-slate-300 font-light leading-relaxed">
                  {isRtl ? t("contact_office_address") : "SPC Free Zone, Sheikh Mohammed Bin Zayed Road, Al Zahia, Sharjah, United Arab Emirates"}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gold-500/70 uppercase tracking-wider mb-1">
                  {isRtl ? "الهاتف" : "Telephone"}
                </span>
                <span className="text-slate-300 font-light" dir="ltr">
                  +971 50 295 4666
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gold-500/70 uppercase tracking-wider mb-1">
                  {isRtl ? "البريد الإلكتروني للشركة" : "Corporate Email"}
                </span>
                <span className="text-slate-300 font-light break-all">
                  expertlegaldeptcollection@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR (Copyright and Legal Links) */}
        <div className="pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 text-center lg:text-left">
            &copy; {new Date().getFullYear()} {isRtl ? "Expert Legal Consultations & Debt Collection. جميع الحقوق محفوظة." : "Expert Legal Consultations & Debt Collection. All Rights Reserved."}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs text-slate-500">
            <a href="#privacy" className="hover:text-gold-500 transition-colors">{t("footer_privacy")}</a>
            <span className="text-slate-700">|</span>
            <a href="#terms" className="hover:text-gold-500 transition-colors">{t("footer_terms")}</a>
            <span className="text-slate-700">|</span>
            <a href="#disclaimer" className="hover:text-gold-500 transition-colors">
              {isRtl ? "إخلاء المسؤولية التنظيمية" : "Regulatory Disclaimer"}
            </a>
            <span className="text-slate-700">|</span>
            <a href="#credentials" className="hover:text-gold-500 transition-colors">
              {isRtl ? "وثائق اعتماد الشركة" : "Company Credentials"}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 hover:border-gold-500 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>{isRtl ? "العودة إلى الأعلى" : "Back to Top"}</span>
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
