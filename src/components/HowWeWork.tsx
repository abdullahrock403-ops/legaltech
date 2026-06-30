"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { CalendarRange, SearchCheck, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function HowWeWork() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      icon: CalendarRange,
      title: t("work_step_1"),
      desc: t("work_step_1_desc"),
    },
    {
      id: 2,
      icon: SearchCheck,
      title: t("work_step_2"),
      desc: t("work_step_2_desc"),
    },
    {
      id: 3,
      icon: Compass,
      title: t("work_step_3"),
      desc: t("work_step_3_desc"),
    },
    {
      id: 4,
      icon: CheckCircle2,
      title: t("work_step_4"),
      desc: t("work_step_4_desc"),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white mb-4">
              {t("work_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("work_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop connecting line (aligned with the center of the step icon bubbles) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900 opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="text-center flex flex-col items-center group"
                >
                  {/* Step bubble */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-navy-900 text-gold-500 border-2 border-gold-500/20 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-gold-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold-500 text-navy-950 text-xs font-black flex items-center justify-center shadow-md">
                      0{step.id}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
