"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Compass } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { t, isRtl } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden navy-gradient text-white pt-36 pb-12"
    >
      {/* Background Image with Dark Navy Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-950/45 via-navy-900/35 to-navy-950/45 md:from-navy-950/65 md:via-navy-900/55 md:to-navy-950/65 backdrop-blur-[1px]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span>Experts for Legal Consultations & Debt Collection</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-[0_4px_16px_rgba(5,20,40,0.95)]">
            <span className="block text-white">{t("hero_headline").split("for")[0]}</span>
            <span className="gold-gradient-text block mt-2">
              {t("hero_headline").substring(t("hero_headline").indexOf("for") > -1 ? t("hero_headline").indexOf("for") : 0)}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(5,20,40,0.9)]">
            {t("hero_subheadline")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase gold-gradient-bg text-navy-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/20"
            >
              <Calendar className="w-5 h-5" />
              <span>{t("hero_cta_book")}</span>
            </Link>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-base font-bold tracking-wide uppercase border border-white/20 hover:border-gold-500 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              <Compass className="w-5 h-5" />
              <span>{t("hero_cta_explore")}</span>
            </a>
          </div>

          {/* Consultation Fee Note */}
          <div className="pt-6">
            <p className="text-xs sm:text-sm text-slate-300 italic font-light drop-shadow">
              * {t("hero_fee_note")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
