"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { ShieldCheck, UserCheck, Lock, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Highlights() {
  const { t } = useLanguage();

  const highlightList = [
    {
      title: t("highlight_1_title"),
      desc: t("highlight_1_desc"),
      icon: ShieldCheck,
      stat: "100%",
      statDesc: "Licensed Provider",
    },
    {
      title: t("highlight_2_title"),
      desc: t("highlight_2_desc"),
      icon: UserCheck,
      stat: "25+",
      statDesc: "Expert Advisors",
    },
    {
      title: t("highlight_3_title"),
      desc: t("highlight_3_desc"),
      icon: Lock,
      stat: "100%",
      statDesc: "Strict Confidentially",
    },
    {
      title: t("highlight_4_title"),
      desc: t("highlight_4_desc"),
      icon: Zap,
      stat: "< 2hr",
      statDesc: "Average Response",
    },
    {
      title: t("highlight_5_title"),
      desc: t("highlight_5_desc"),
      icon: TrendingUp,
      stat: "94%",
      statDesc: "Success Recovery Rate",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      {/* Decorative ambient path */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {highlightList.map((hl, i) => {
            const IconComponent = hl.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200/60 p-4 sm:p-6 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden group"
              >
                {/* Background micro highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full transition-all duration-300 group-hover:bg-gold-500/10" />

                <div>
                  <div className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-navy-900 text-gold-500 mb-4 sm:mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-navy-900 mb-2 line-clamp-1">
                    {hl.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#1a1a1a] leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                    {hl.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 sm:pt-4">
                  <span className="block text-lg sm:text-xl md:text-2xl font-black text-gold-600 tracking-tight">
                    {hl.stat}
                  </span>
                  <span className="block text-[9px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                    {hl.statDesc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
