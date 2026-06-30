"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import {
  Rocket,
  Store,
  Building2,
  Coins,
  Compass,
  Home,
  Globe2,
  TrendingUp,
} from "lucide-react";

interface IndustryItem {
  id: string;
  icon: any;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
}

export default function Industries() {
  const { t, language } = useLanguage();

  const industries: IndustryItem[] = [
    {
      id: "startups",
      icon: Rocket,
      title: { en: "Startups", ar: "الشركات الناشئة" },
      desc: { en: "High-growth digital & tech ventures scaling quickly.", ar: "المشاريع الرقمية والتقنية الطموحة التي تتوسع بسرعة." },
    },
    {
      id: "smes",
      icon: Store,
      title: { en: "SMEs", ar: "الشركات الصغيرة والمتوسطة" },
      desc: { en: "Established local scale-ups optimizing compliance.", ar: "الشركات المحلية القائمة التي ترغب بتحسين الامتثال والتحصيل." },
    },
    {
      id: "corporations",
      icon: Building2,
      title: { en: "Corporations", ar: "الشركات الكبرى" },
      desc: { en: "Conglomerates requiring structured multi-level advisory.", ar: "المجموعات التجارية الكبرى التي تحتاج لاستشارات هيكلية متعددة المستويات." },
    },
    {
      id: "investors",
      icon: Coins,
      title: { en: "Investors", ar: "المستثمرون" },
      desc: { en: "Venture capitalists securing assets and investments.", ar: "أصحاب رؤوس الأموال الجريئة الذين يؤمنون أصولهم واستثماراتهم." },
    },
    {
      id: "entrepreneurs",
      icon: Compass,
      title: { en: "Entrepreneurs", ar: "رواد الأعمال" },
      desc: { en: "Individual founders needing end-to-end guidance.", ar: "المؤسسون الأفراد الذين يبحثون عن إرشادات شاملة لتأسيس أعمالهم." },
    },
    {
      id: "realestate",
      icon: Home,
      title: { en: "Real Estate", ar: "العقارات" },
      desc: { en: "Developers & brokerages solving recovery issues.", ar: "المطورون العقاريون وشركات الوساطة الذين يحلون مسائل استرداد المستحقات." },
    },
    {
      id: "trading",
      icon: TrendingUp,
      title: { en: "Trading Companies", ar: "شركات التجارة" },
      desc: { en: "Import-export enterprises optimizing customs legal margins.", ar: "مؤسسات الاستيراد والتصدير الساعية لتحسين الهوامش القانونية للجمارك." },
    },
    {
      id: "intl",
      icon: Globe2,
      title: { en: "International Clients", ar: "العملاء الدوليون" },
      desc: { en: "Foreign operations setting foot in Dubai & Abu Dhabi.", ar: "الشركات الأجنبية التي تؤسس مقرات أعمالها في دبي وأبوظبي." },
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white mb-4">
              {t("ind_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("ind_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white dark:bg-navy-900 p-6 rounded-2xl border border-slate-100 dark:border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group flex items-start space-x-4 rtl:space-x-reverse"
              >
                <div className="p-3 rounded-xl bg-navy-900 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1 group-hover:text-gold-500 transition-colors duration-300">
                    {language === "en" ? ind.title.en : ind.title.ar}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-300 leading-relaxed">
                    {language === "en" ? ind.desc.en : ind.desc.ar}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
