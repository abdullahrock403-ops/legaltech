"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  rating: number;
  review: { en: string; ar: string };
  avatarText: string;
}

export default function Testimonials() {
  const { t, isRtl } = useLanguage();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      company: "FinTech Flow Dubai",
      rating: 5,
      review: {
        en: "Experts for Legal Consultations resolved a highly complex trade contract dispute for our team in record time. Their digital status tracking and response times were absolute class.",
        ar: "قامت شركة الخبراء للاستشارات القانونية بحل نزاع معقد للغاية بشأن عقد تجاري لفريقنا في وقت قياسي. كان تتبعهم الرقمي للموقف وسرعة استجابتهم في غاية الرقي والاحترافية.",
      },
      avatarText: "SJ",
    },
    {
      id: 2,
      name: "Ahmed Al-Mansoori",
      company: "Al-Mansoori Ventures",
      rating: 5,
      review: {
        en: "Exceptional speed in debt recovery. They recovered our corporate outstanding balance within weeks, showing extreme professionalism and respect for our ongoing commercial relationships.",
        ar: "سرعة استثنائية في تحصيل الديون. لقد استردوا رصيد شركتنا المستحق في غضون أسابيع قليلة، مع إظهار مهنية فائقة واحترام كامل لعلاقاتنا التجارية القائمة.",
      },
      avatarText: "AA",
    },
    {
      id: 3,
      name: "Raymond Vance",
      company: "Apex Logistics UAE",
      rating: 5,
      review: {
        en: "Setting up our regional logistics holding entity and navigating the new corporate tax guidelines was seamless. Their multi-disciplinary consultants are highly intelligent and results-oriented.",
        ar: "كان تأسيس كياننا اللوجستي الإقليمي القابض وتوجيهنا عبر إرشادات ضريبة الشركات الجديدة أمراً سلساً للغاية. إن مستشاريهم متعددي التخصصات أذكياء للغاية ويسعون لتحقيق النتائج.",
      },
      avatarText: "RV",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white mb-4">
              {t("test_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("test_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[320px] sm:min-h-[260px] bg-white dark:bg-navy-900 border border-slate-100 dark:border-gold-500/10 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col justify-between overflow-hidden">
          <div className="absolute top-6 right-8 text-slate-100 dark:text-navy-950 pointer-events-none">
            <Quote className="w-20 h-20 opacity-30" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-gold-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg md:text-xl text-navy-900 dark:text-slate-200 leading-relaxed italic font-normal">
                "{isRtl ? current.review.ar : current.review.en}"
              </p>

              {/* Reviewer Meta */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-lg">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-900 dark:text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 right-8 sm:right-12 flex space-x-2 rtl:space-x-reverse">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-slate-200 dark:border-gold-500/20 hover:border-gold-500 text-navy-900 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-950 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-slate-200 dark:border-gold-500/20 hover:border-gold-500 text-navy-900 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-950 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
