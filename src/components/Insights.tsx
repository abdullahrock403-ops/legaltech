"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";

interface Article {
  id: string;
  category: { en: string; ar: string };
  title: { en: string; ar: string };
  date: string;
  readTime: string;
  gradFrom: string;
  gradTo: string;
}

export default function Insights() {
  const { t, language, isRtl } = useLanguage();

  const articles: Article[] = [
    {
      id: "corporate-tax-compliance",
      category: { en: "Regulatory News", ar: "أخبار تنظيمية" },
      title: {
        en: "UAE Corporate Tax 2024: Essential Compliance Benchmarks for Multinational Groups",
        ar: "ضريبة الشركات في الإمارات 2024: معايير الامتثال الأساسية للمجموعات الدولية",
      },
      date: "2026-06-15",
      readTime: "5",
      gradFrom: "from-navy-900",
      gradTo: "to-navy-800",
    },
    {
      id: "debt-recovery-gulf",
      category: { en: "Debt Collection", ar: "تحصيل الديون" },
      title: {
        en: "Navigating Commercial Receivables: High-Speed Resolution Strategies in the Gulf Region",
        ar: "إدارة المستحقات التجارية: استراتيجيات التسوية سريعة الوتيرة في منطقة الخليج",
      },
      date: "2026-05-28",
      readTime: "4",
      gradFrom: "from-gold-600",
      gradTo: "to-gold-400",
    },
    {
      id: "freezone-spv-guide",
      category: { en: "Business Setup", ar: "تأسيس الشركات" },
      title: {
        en: "Establishing Special Purpose Vehicles (SPVs) in UAE Freezones: Legal Frameworks",
        ar: "تأسيس الشركات ذات الغرض الخاص (SPVs) في المناطق الحرة بالإمارات: الأطر القانونية",
      },
      date: "2026-04-12",
      readTime: "7",
      gradFrom: "from-navy-950",
      gradTo: "to-slate-800",
    },
  ];

  return (
    <section id="insights" className="py-24 bg-white dark:bg-navy-900 relative">
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
              {t("insights_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("insights_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 dark:bg-navy-950/40 rounded-3xl overflow-hidden border border-slate-100 dark:border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover visual representation (Premium abstract gradient) */}
                <div className={`h-48 w-full bg-gradient-to-br ${article.gradFrom} ${article.gradTo} relative flex items-center justify-center p-8 overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <span className="text-sm font-extrabold text-gold-500 tracking-widest uppercase bg-navy-950/40 px-4 py-2 rounded-full border border-gold-500/20 backdrop-blur-md">
                    {language === "en" ? article.category.en : article.category.ar}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  {/* Meta items */}
                  <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs font-semibold text-slate-400">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Calendar className="w-4.5 h-4.5" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Clock className="w-4.5 h-4.5" />
                      <span>
                        {article.readTime} {t("insight_min")}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white leading-snug group-hover:text-gold-500 transition-colors">
                    {language === "en" ? article.title.en : article.title.ar}
                  </h3>
                </div>
              </div>

              {/* Action */}
              <div className="p-8 pt-0 mt-auto">
                <a
                  href={`#insights/${article.id}`}
                  className="w-full inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-full text-sm font-bold border border-slate-200 dark:border-gold-500/20 text-navy-900 dark:text-white group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300"
                >
                  <span>{t("insight_read_more")}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
