"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { CalendarDays, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { t, isRtl } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cinematic Hero */}
      <Hero />

      {/* Corporate Highlights / Statistics */}
      <Highlights />

      {/* Featured Services (Preview Mode - 3 Cards Only) */}
      <Services preview={true} />

      {/* Why Choose Us Summary */}
      <WhyChooseUs />

      {/* Home Call to Action */}
      <section className="py-20 navy-gradient text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isRtl ? "احمِ عملك واضمن حقوقك اليوم" : "Protect Your Business & Secure Your Rights Today"}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            {isRtl
              ? "خبراؤنا متعددو التخصصات مستعدون لبناء إطار قانوني وتجاري مخصص لدعم نمو شركتك في دولة الإمارات العربية المتحدة."
              : "Our multi-disciplinary experts are ready to construct a custom legal and commercial framework to support your corporate growth in the UAE."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase gold-gradient-bg text-navy-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/20"
            >
              <CalendarDays className="w-5 h-5" />
              <span>{t("hero_cta_book")}</span>
            </Link>
          </div>
          <p className="text-xs text-slate-400 italic font-light pt-2">
            * {t("hero_fee_note")}
          </p>
        </div>
      </section>
    </div>
  );
}
