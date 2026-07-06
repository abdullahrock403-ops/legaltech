"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Target, Users, BookOpen, Award, CheckCircle2 } from "lucide-react";

import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {
  const { t, isRtl } = useLanguage();

  const values = [
    {
      title: t("about_value_1_title"),
      desc: t("about_value_1_desc"),
      icon: CheckCircle2,
    },
    {
      title: t("about_value_2_title"),
      desc: t("about_value_2_desc"),
      icon: ShieldCheck,
    },
    {
      title: t("about_value_3_title"),
      desc: t("about_value_3_desc"),
      icon: Compass,
    },
  ];

  const timelineSteps = [
    {
      year: t("about_timeline_1_year"),
      desc: t("about_timeline_1_desc"),
    },
    {
      year: t("about_timeline_2_year"),
      desc: t("about_timeline_2_desc"),
    },
    {
      year: t("about_timeline_3_year"),
      desc: t("about_timeline_3_desc"),
    },
  ];

  return (
    <PageWrapper>
      <div className="bg-soft-white min-h-screen pt-32 sm:pt-36 pb-20">
      {/* About Hero Header */}
      <section className="relative py-24 navy-gradient text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-center">{t("nav_about")}</h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mt-4">
              {t("about_subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-20">
        {/* Company Overview & Business Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 lg:order-first order-last max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{t("about_overview_title")}</h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.8] font-normal">
              {t("about_overview_text")}
            </p>
            <div className="p-6 bg-navy-900/5 rounded-2xl border border-navy-900/10">
              <h4 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">
                {isRtl ? "فلسفة عملنا" : "Our Business Philosophy"}
              </h4>
              <p className="text-base text-slate-700 leading-[1.8] font-normal">
                {isRtl
                  ? "نحن نؤمن بأن الحماية القانونية لا ينبغي أن تعوق سرعة رواد الأعمال. من خلال تنسيق استشارات تأسيس الشركات، الامتثال للتسويق، الخدمات اللوجستية، تأشيرة الإقامة الذهبية، والاستعداد الضريبي تحت مظلة رقمية واحدة، فإننا نساعد الشركات على الأداء والنمو بثقة وأمان تام."
                  : "We believe legal safeguards should never block entrepreneurial speed. By coordinating corporate brokerage, marketing compliance, logistics, Golden Visa immigration, and tax readiness under one digital roof, we enable businesses to execute with speed and complete peace of mind."}
              </p>
            </div>
          </motion.div>

          {/* Code-built CSS/SVG Corporate Credentials Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[400px] rounded-3xl overflow-hidden border border-slate-200 dark:border-gold-500/10 navy-gradient shadow-2xl flex flex-col items-center justify-center p-8 lg:order-last order-first text-white space-y-6"
          >
            {/* Extremely light dotted pattern background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="light-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.75" fill="#C9A227" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#light-dots)" />
              </svg>
            </div>

            {/* Ambient glows toned down */}
            <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gold-500/5 blur-xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-navy-800/20 blur-xl pointer-events-none" />

            {/* Centered Company Logo */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Experts Legal Logo"
                className="h-28 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
              />
            </div>

            {/* Thin elegant dividing line */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent relative z-10" />

            {/* Neat grid of 4 corporate stats / indicators */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-sm relative z-10 text-center">
              <div className="space-y-1">
                <span className="block text-3xl font-black text-gold-500 tracking-tight">10+</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  {isRtl ? "سنوات خبرة قانونية" : "Years Combined Exp"}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl font-black text-gold-500 tracking-tight">7</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  {isRtl ? "تغطية كافة الإمارات" : "Emirates Coverage"}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl font-black text-gold-500 tracking-tight">100%</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  {isRtl ? "تكنولوجيا قانونية رقمية" : "Digital LegalTech"}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl font-black text-gold-500 tracking-tight">DET</span>
                <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  {isRtl ? "ترخيص تجاري نشط" : "DET Active License"}
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col space-y-6">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">{t("about_mission_title")}</h3>
            <p className="text-base text-slate-700 leading-[1.8] font-normal">
              {t("about_mission_desc")}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm flex flex-col space-y-6">
            <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">{t("about_vision_title")}</h3>
            <p className="text-base text-slate-700 leading-[1.8] font-normal">
              {t("about_vision_desc")}
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{t("about_values_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-navy-900">{v.title}</h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-[1.8] font-normal">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Official License */}
        <section className="navy-gradient text-white p-8 sm:p-12 rounded-3xl border border-gold-500/20 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-bl-full pointer-events-none" />
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Certified DET Registry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{t("about_license_title")}</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {t("about_license_desc")}
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl text-center">
            <span className="block text-xs text-slate-400 uppercase tracking-widest font-semibold">DET Status</span>
            <span className="block text-2xl font-black text-gold-500 mt-1">ACTIVE</span>
            <span className="block text-[10px] text-slate-500 mt-2 font-mono">Reg No: 4430091.01</span>
          </div>
        </section>

        {/* Timeline Journey */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">{t("about_timeline_title")}</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900 -translate-y-1/2 opacity-20" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {timelineSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-xs shadow-md border-2 border-gold-500/20 mb-6">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-navy-900 mb-2">{step.year}</h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-[1.8] font-normal">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Leadership & Partners</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {/* Single Leader Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-6 rtl:space-x-reverse">
              <div className="w-16 h-16 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold text-xl flex-shrink-0">
                S.A
              </div>
              <div>
                <h4 className="text-lg font-extrabold text-navy-900">Mr. Salah Ali Salem Alazzani</h4>
                <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mt-0.5">Founder & Managing Partner</p>
                <p className="text-sm text-slate-700 mt-2 leading-[1.8] font-normal">Directing corporate litigation strategies, commercial debt recoveries, and business advisory services across the United Arab Emirates.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  </PageWrapper>
  );
}
