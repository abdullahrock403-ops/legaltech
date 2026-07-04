"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { XCircle, CheckCircle, Award, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs() {
  const { t, isRtl } = useLanguage();

  const traditionalPoints = [
    t("why_trad_1"),
    t("why_trad_2"),
    t("why_trad_3"),
    t("why_trad_4"),
  ];

  const expertsPoints = [
    t("why_exp_1"),
    t("why_exp_2"),
    t("why_exp_3"),
    t("why_exp_4"),
    t("why_exp_5"),
    t("why_exp_6"),
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white mb-4">
              {t("why_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("why_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Traditional Law Office Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-900 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                  {t("why_traditional_title")}
                </h3>
              </div>

              <ul className="space-y-6">
                {traditionalPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-slate-700 dark:text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500/80 mt-0.5 flex-shrink-0" />
                    <span className="text-base font-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 italic">
              {isRtl ? "تركز النماذج التقليدية على مقاضاة التاريخ المتنازع عليه." : "Traditional models focus on litigating disputable history."}
            </div>
          </motion.div>

          {/* Experts LegalTech Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="navy-gradient text-white p-8 sm:p-12 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background glowing badge */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-8">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold gold-gradient-text uppercase tracking-wide">
                  {t("why_experts_title")}
                </h3>
              </div>

              <ul className="space-y-6">
                {expertsPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-slate-200">
                    <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-gold-500/10 text-xs text-slate-400 italic">
              {isRtl ? "نقوم بتنسيق الاستشارات الوقائية مع الأدوات الرقمية عالية السرعة." : "We coordinate preventive consulting with high-speed digital tools."}
            </div>
          </motion.div>
        </div>

        {/* Dynamic CTA to full profile */}
        <div className="text-center mt-16">
          <Link
            href="/about"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-sm font-bold border border-slate-200 dark:border-gold-500/20 text-navy-900 dark:text-white hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors"
          >
            <span>{isRtl ? "تعرف على المزيد حول فريقنا وترخيصنا" : "Learn More About Our Team & License"}</span>
            {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </Link>
        </div>
      </div>
    </section>
  );
}
