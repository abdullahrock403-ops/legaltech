"use client";

import React, { use } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { servicesData, ServiceItem } from "@/components/Services";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  CalendarCheck,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

import PageWrapper from "@/components/PageWrapper";

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t, language, isRtl } = useLanguage();

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-navy-900">Service Not Found</h1>
        <p className="text-slate-500">The requested service area does not exist.</p>
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full gold-gradient-bg text-navy-900 font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const relatedServices = servicesData.filter((s) => s.id !== id).slice(0, 3);

  // Vetted industries list matching company rules (no courtroom clichés)
  const targetIndustries = [
    { en: "UAE Mainland & Freezone SMEs", ar: "الشركات الصغيرة والمتوسطة في البر الرئيسي والمناطق الحرة" },
    { en: "Real Estate & Construction Firms", ar: "شركات التطوير العقاري والمقاولات" },
    { en: "Trading & Logistics Conglomerates", ar: "مجموعات التجارة والخدمات اللوجستية" },
    { en: "Foreign Corporate Investors", ar: "المستثمرين الأجانب والشركات متعددة الجنسيات" },
  ];

  return (
    <PageWrapper>
      <div className="bg-soft-white min-h-screen pt-24 pb-20">
      {/* Service Hero Banner */}
      <section className="relative py-24 navy-gradient text-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{isRtl ? "العودة إلى كافة الخدمات" : "Back to All Services"}</span>
            </Link>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500">
                <Icon className="w-6 h-6" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {language === "en" ? service.title.en : service.title.ar}
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
              {language === "en" ? service.desc.en : service.desc.ar}
            </p>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        {/* Left Columns - Detailed Description & Benefits */}
        <div className="lg:col-span-2 space-y-12">
          {/* Detailed description */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-900 border-b border-slate-100 pb-4">
              {isRtl ? "نظرة عامة على الخدمة" : "Service Overview"}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              {language === "en" ? service.details.en : service.details.ar}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
            <h2 className="text-2xl font-extrabold text-navy-900 border-b border-slate-100 pb-4">
              {isRtl ? "المزايا والفوائد الرئيسية" : "Key Strategic Benefits"}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(language === "en" ? service.benefits.en : service.benefits.ar).map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-slate-600">
                  <CheckCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-navy-900 border-b border-slate-100 pb-4">
              {isRtl ? "القطاعات المستهدفة" : "Target Client Sectors"}
            </h2>
            <p className="text-sm text-slate-400 font-light mb-6">
              {isRtl
                ? "نوائم استشاراتنا لتناسب متطلبات الامتثال والتنظيم لمختلف القطاعات الاستراتيجية في الإمارات:"
                : "We tailor our consulting advice to match the regulatory and compliance parameters of major strategic GCC sectors:"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetIndustries.map((ind, index) => (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <ChevronRight className="w-4 h-4 text-gold-500 flex-shrink-0 rtl:rotate-180" />
                  <span className="text-sm font-bold text-navy-900">{language === "en" ? ind.en : ind.ar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-extrabold text-navy-900 border-b border-slate-100 pb-4">
                {isRtl ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="space-y-2.5">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <HelpCircle className="w-5 h-5 text-gold-600 mt-0.5 flex-shrink-0" />
                      <h4 className="text-base font-bold text-navy-900">
                        {language === "en" ? faq.q.en : faq.q.ar}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-light pl-8 rtl:pr-8 rtl:pl-0">
                      {language === "en" ? faq.a.en : faq.a.ar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar - Sticky Booking CTA & Related Services */}
        <div className="space-y-8">
          {/* Booking Card */}
          <div className="bg-navy-900 text-white p-8 rounded-3xl border border-gold-500/20 shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full pointer-events-none" />
            <h3 className="text-xl font-bold tracking-tight">
              {isRtl ? "حجز جلسة استشارية" : "Book Advisory Session"}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {isRtl
                ? "تخضع جميع استشاراتنا لرسوم مهنية ومواعيد مسبقة لضمان حصولك على دراسة وافية."
                : "All consultations are subject to professional scheduling and applicable fees."}
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gold-400 font-medium">
              <ShieldAlert className="w-4 h-4 flex-shrink-0" />
              <span>Paid Professional Consultations</span>
            </div>
            <Link
              href="/booking"
              className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse py-3.5 rounded-full text-sm font-bold gold-gradient-bg text-navy-900 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 uppercase"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t("nav_book_btn")}</span>
            </Link>
          </div>

          {/* Related Services */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-extrabold text-navy-900 border-b border-slate-100 pb-3">
              {isRtl ? "خدمات استشارية ذات صلة" : "Related Core Services"}
            </h3>
            <ul className="space-y-4">
              {relatedServices.map((rel) => (
                <li key={rel.id}>
                  <Link
                    href={`/services/${rel.id}`}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group text-sm font-bold text-navy-900"
                  >
                    <span>{language === "en" ? rel.title.en : rel.title.ar}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-gold-500 transition-colors" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-gold-500 transition-colors" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
  </PageWrapper>
  );
}
