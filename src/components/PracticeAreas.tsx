"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import {
  FileSignature,
  Scale,
  DollarSign,
  Scroll,
  TrendingUp,
  FileCheck,
  Coins,
  Lightbulb,
} from "lucide-react";

interface PracticeItem {
  id: string;
  icon: any;
  title: { en: string; ar: string };
  focus: { en: string; ar: string };
}

export default function PracticeAreas() {
  const { t, language } = useLanguage();

  const practices: PracticeItem[] = [
    {
      id: "corporate",
      icon: Scale,
      title: { en: "Corporate Law", ar: "قانون الشركات" },
      focus: { en: "Shareholder agreements, M&A, restructuring", ar: "اتفاقيات المساهمين، عمليات الاندماج والاستحواذ، إعادة الهيكلة" },
    },
    {
      id: "commercial",
      icon: FileSignature,
      title: { en: "Commercial Law", ar: "القانون التجاري" },
      focus: { en: "Trade compliance, agency disputes, licenses", ar: "الامتثال التجاري، نزاعات الوكالات، والتراخيص" },
    },
    {
      id: "debt",
      icon: DollarSign,
      title: { en: "Debt Recovery", ar: "استرداد الديون" },
      focus: { en: "Fast-track recovery, arbitration, asset claims", ar: "الاسترداد السريع، التحكيم، والمطالبات بالأصول" },
    },
    {
      id: "contract",
      icon: Scroll,
      title: { en: "Contract Management", ar: "إدارة وصياغة العقود" },
      focus: { en: "Lifecycle drafting, review, risk assessments", ar: "صياغة دورة حياة العقود، المراجعة، وتقييم المخاطر" },
    },
    {
      id: "formation",
      icon: TrendingUp,
      title: { en: "Business Formation", ar: "تأسيس وهيكلة الأعمال" },
      focus: { en: "Freezone holding setups, SPV formation", ar: "تأسيس شركات المناطق الحرة، وتأسيس الكيانات ذات الغرض الخاص" },
    },
    {
      id: "regulatory",
      icon: FileCheck,
      title: { en: "Regulatory Compliance", ar: "الامتثال التنظيمي" },
      focus: { en: "AML regulations, corporate tax readiness", ar: "لوائح مكافحة غسيل الأموال، والجاهزية لضريبة الشركات" },
    },
    {
      id: "transactions",
      icon: Coins,
      title: { en: "Commercial Transactions", ar: "المعاملات التجارية" },
      focus: { en: "Cross-border trade, escrow arrangements", ar: "التجارة عابرة الحدود، وترتيبات حساب الضمان" },
    },
    {
      id: "advisory",
      icon: Lightbulb,
      title: { en: "Business Advisory", ar: "الاستشارات الاستراتيجية" },
      focus: { en: "Market expansion, structural risk minimization", ar: "التوسع في السوق، وتقليل المخاطر الهيكلية للأعمال" },
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-navy-900 relative">
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
              {t("practice_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("practice_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Practice areas list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, i) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-slate-50 dark:bg-navy-950/40 p-8 rounded-2xl border border-slate-100 dark:border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-500 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">
                    {language === "en" ? practice.title.en : practice.title.ar}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-300 font-light leading-relaxed">
                    {language === "en" ? practice.focus.en : practice.focus.ar}
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
