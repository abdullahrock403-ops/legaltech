"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface TranslationDictionary {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: TranslationDictionary = {
  // Navigation
  nav_brand: {
    en: "EXPERTS",
    ar: "الخبراء",
  },
  nav_brand_sub: {
    en: "Legal & Business Consultancy",
    ar: "للاستشارات القانونية والتحصيل",
  },
  nav_home: {
    en: "Home",
    ar: "الرئيسية",
  },
  nav_services: {
    en: "Services",
    ar: "خدماتنا",
  },
  nav_why_us: {
    en: "Why Choose Us",
    ar: "لماذا نحن",
  },
  nav_how_it_works: {
    en: "How We Work",
    ar: "منهجية العمل",
  },
  nav_testimonials: {
    en: "Testimonials",
    ar: "آراء العملاء",
  },
  nav_insights: {
    en: "Insights",
    ar: "المعرفة",
  },
  nav_contact: {
    en: "Contact",
    ar: "اتصل بنا",
  },
  nav_book_btn: {
    en: "Book Consultation",
    ar: "حجز استشارة",
  },

  // Hero Section
  hero_headline: {
    en: "Strategic Legal Solutions for Businesses & Individuals",
    ar: "حلول قانونية استراتيجية للشركات والأفراد",
  },
  hero_subheadline: {
    en: "Experts for Legal Consultations & Debt Collection provides premium legal advisory, debt recovery, commercial brokerage, and business consulting services designed to protect businesses, recover financial rights, and support long-term growth across the United Arab Emirates.",
    ar: "تقدم شركة الخبراء للاستشارات القانونية وتحصيل الديون خدمات استشارية قانونية متميزة، تحصيل الديون، الوساطة التجارية، والاستشارات الأعمال المصممة لحماية الأعمال، واسترداد الحقوق المالية، ودعم النمو طويل الأجل في جميع أنحاء دولة الإمارات العربية المتحدة.",
  },
  hero_cta_book: {
    en: "Book a Consultation",
    ar: "حجز جلسة استشارة",
  },
  hero_cta_explore: {
    en: "Explore Our Services",
    ar: "استكشف خدماتنا",
  },
  hero_fee_note: {
    en: "Professional consultations are provided by appointment and subject to consultation fees.",
    ar: "تُقدم الاستشارات المهنية بموجب موعد مسبق وتخضع لرسوم استشارية.",
  },

  // Highlights
  highlight_1_title: {
    en: "Licensed UAE Company",
    ar: "شركة مرخصة في دولة الإمارات",
  },
  highlight_1_desc: {
    en: "Fully authorized corporate legal & business consultancy operating under UAE regulations.",
    ar: "مكتب استشارات قانونية وتجارية مرخص بالكامل ويعمل بموجب قوانين دولة الإمارات.",
  },
  highlight_2_title: {
    en: "Professional Experts",
    ar: "خبراء قانون وأعمال محترفون",
  },
  highlight_2_desc: {
    en: "A multi-disciplinary team combining legal expertise with business intelligence.",
    ar: "فريق متعدد التخصصات يجمع بين الخبرة القانونية والذكاء التجاري.",
  },
  highlight_3_title: {
    en: "Confidential Consultations",
    ar: "استشارات سرية للغاية",
  },
  highlight_3_desc: {
    en: "Your data and corporate strategy are secured with strict professional privilege.",
    ar: "بياناتك واستراتيجيتك الاستثمارية محمية بأعلى مستويات السرية المهنية.",
  },
  highlight_4_title: {
    en: "Fast Response Time",
    ar: "سرعة الاستجابة والمتابعة",
  },
  highlight_4_desc: {
    en: "Rapid evaluation of cases and queries with active status updates.",
    ar: "تقييم سريع للقضايا والاستفسارات مع تحديثات نشطة وحيوية.",
  },
  highlight_5_title: {
    en: "Business-Focused",
    ar: "حلول موجهة لقطاع الأعمال",
  },
  highlight_5_desc: {
    en: "We align legal frameworks with your corporate goals to maximize success.",
    ar: "نحن نوائم الأطر القانونية مع أهداف شركتك لتحقيق أقصى قدر من النجاح.",
  },

  // Services
  services_title: {
    en: "Our Professional Services",
    ar: "خدماتنا المهنية",
  },
  services_subtitle: {
    en: "Comprehensive legal tech, debt recovery, and business advisory solutions tailored for the UAE market.",
    ar: "حلول متكاملة في التكنولوجيا القانونية واسترداد الديون واستشارات الأعمال المصممة خصيصاً لسوق دولة الإمارات.",
  },
  service_learn_more: {
    en: "Learn More",
    ar: "اقرأ المزيد",
  },
  service_close: {
    en: "Close Detail",
    ar: "إغلاق التفاصيل",
  },

  // Why Choose Us
  why_title: {
    en: "Redefining Legal & Business Consulting",
    ar: "إعادة تعريف الاستشارات القانونية والأعمال",
  },
  why_subtitle: {
    en: "How we deliver modern, strategic value compared to traditional law office structures.",
    ar: "كيف نقدم قيمة استراتيجية حديثة مقارنة بهياكل المكاتب القانونية التقليدية.",
  },
  why_traditional_title: {
    en: "Traditional Legal Office",
    ar: "المكتب القانوني التقليدي",
  },
  why_experts_title: {
    en: "Experts for Legal Consultations & Debt Collection",
    ar: "الخبراء للاستشارات القانونية وتحصيل الديون",
  },
  why_trad_1: {
    en: "Reactive approach (responds only when dispute arises)",
    ar: "نهج رد الفعل (يستجيب فقط عند حدوث النزاع)",
  },
  why_trad_2: {
    en: "Limited service scope (only legal, no business context)",
    ar: "نطاق خدمات محدود (قانوني فقط، دون سياق تجاري)",
  },
  why_trad_3: {
    en: "Manual, slow communication methods",
    ar: "وسائل اتصال يدوية وبطيئة",
  },
  why_trad_4: {
    en: "Single specialty focus without cross-domain advisory",
    ar: "التركيز على تخصص واحد دون استشارات متعددة المجالات",
  },
  why_exp_1: {
    en: "Strategic legal advisory & preventative counsel",
    ar: "استشارات قانونية استراتيجية ووقائية استباقية",
  },
  why_exp_2: {
    en: "Comprehensive business solutions (marketing, tax, setup)",
    ar: "حلول أعمال شاملة (التسويق، الضرائب، التأسيس)",
  },
  why_exp_3: {
    en: "Fast, modern digital communication platforms",
    ar: "منصات اتصال رقمية حديثة وسريعة",
  },
  why_exp_4: {
    en: "Multi-disciplinary expertise under one premium platform",
    ar: "خبرات متعددة التخصصات تحت منصة متميزة واحدة",
  },
  why_exp_5: {
    en: "Client-focused, results-driven milestone management",
    ar: "إدارة تركز على العميل وتوجه نحو تحقيق النتائج الملموسة",
  },
  why_exp_6: {
    en: "Licensed and trusted corporate provider in the UAE",
    ar: "مزود مؤسسي مرخص وموثوق به في دولة الإمارات العربية المتحدة",
  },

  // How We Work
  work_title: {
    en: "Our Methodical Approach",
    ar: "منهجية العمل والخطوات",
  },
  work_subtitle: {
    en: "Four clear steps leading from initial inquiry to structured execution and support.",
    ar: "أربع خطوات واضحة تقود من الاستفسار الأولي إلى التنفيذ المنظم والدعم المستمر.",
  },
  work_step_1: {
    en: "Book Your Consultation",
    ar: "احجز جلستك الاستشارية",
  },
  work_step_1_desc: {
    en: "Schedule a secure session online or in-office to state your parameters.",
    ar: "حدد موعدًا لجلسة آمنة عبر الإنترنت أو في المكتب لتوضيح متطلباتك.",
  },
  work_step_2: {
    en: "Case Evaluation & Assessment",
    ar: "تقييم القضية والتحليل القانوني",
  },
  work_step_2_desc: {
    en: "Our specialists review your documents and verify legal standing.",
    ar: "يقوم أخصائيونا بمراجعة مستنداتك والتحقق من الموقف القانوني بدقة.",
  },
  work_step_3: {
    en: "Strategic Planning & Advisory",
    ar: "التخطيط الاستراتيجي وتقديم المشورة",
  },
  work_step_3_desc: {
    en: "We construct a comprehensive legal and commercial roadmap.",
    ar: "نضع خارطة طريق قانونية وتجارية شاملة ومتكاملة.",
  },
  work_step_4: {
    en: "Execution & Ongoing Support",
    ar: "التنفيذ العملي والدعم المستمر",
  },
  work_step_4_desc: {
    en: "We initiate recovery or consulting steps with continuous updates.",
    ar: "نبدأ خطوات الاسترداد أو الاستشارات مع تقديم تقارير دورية.",
  },

  // Industries We Serve
  ind_title: {
    en: "Industries We Support",
    ar: "القطاعات التي نخدمها",
  },
  ind_subtitle: {
    en: "Tailored regulatory and corporate expertise across core economic sectors.",
    ar: "خبرة تنظيمية ومؤسسية مخصصة عبر القطاعات الاقتصادية الرئيسية.",
  },

  // Featured Practice Areas
  practice_title: {
    en: "Featured Practice Areas",
    ar: "مجالات الممارسة المتخصصة",
  },
  practice_subtitle: {
    en: "Deep domain capability in legal operations and corporate structure.",
    ar: "قدرة عالية الكفاءة في العمليات القانونية والهيكلة المؤسسية.",
  },

  // Testimonials
  test_title: {
    en: "Trusted by Business Leaders",
    ar: "ثقة قادة الأعمال والشركات",
  },
  test_subtitle: {
    en: "What corporate clients and entrepreneurs say about our advisory speed and results.",
    ar: "ما يقوله عملاء الشركات ورواد الأعمال عن سرعة استشاراتنا ونتائجنا.",
  },

  // Insights
  insights_title: {
    en: "Knowledge Center & Regulatory Insights",
    ar: "مركز المعرفة والمستجدات التنظيمية",
  },
  insights_subtitle: {
    en: "Stay updated on the latest legal reforms, business regulations, and debt recovery insights in the UAE.",
    ar: "ابق على اطلاع بأحدث الإصلاحات القانونية، ولوائح الأعمال، ورؤى تحصيل الديون في دولة الإمارات.",
  },
  insight_read_more: {
    en: "Read Article",
    ar: "اقرأ المقال",
  },
  insight_min: {
    en: "min read",
    ar: "دقائق للقراءة",
  },

  // Booking Form
  booking_title: {
    en: "Schedule a Professional Consultation",
    ar: "حجز موعد استشارة مهنية",
  },
  booking_subtitle: {
    en: "Secure your session with our legal & corporate specialists. Fees apply.",
    ar: "اضمن جلستك مع أخصائيي القانون والشركات لدينا. تطبق الرسوم.",
  },
  booking_name: {
    en: "Full Name",
    ar: "الاسم الكامل",
  },
  booking_email: {
    en: "Corporate Email Address",
    ar: "البريد الإلكتروني للشركة",
  },
  booking_phone: {
    en: "Phone Number (with Country Code)",
    ar: "رقم الهاتف (مع رمز الدولة)",
  },
  booking_type: {
    en: "Consultation Category",
    ar: "فئة الاستشارة المطلوبة",
  },
  booking_type_legal: {
    en: "Legal Consultations",
    ar: "استشارات قانونية",
  },
  booking_type_debt: {
    en: "Debt Collection & Recovery",
    ar: "تحصيل واسترداد الديون",
  },
  booking_type_corporate: {
    en: "Corporate Business Consultancy",
    ar: "استشارات تأسيس وتطوير الشركات",
  },
  booking_type_contract: {
    en: "Contract Drafting & Review",
    ar: "صياغة ومراجعة العقود",
  },
  booking_date: {
    en: "Preferred Date",
    ar: "التاريخ المفضل",
  },
  booking_time: {
    en: "Preferred Time Window",
    ar: "فترة الوقت المفضلة",
  },
  booking_msg: {
    en: "Brief Summary of Your Inquiry",
    ar: "ملخص موجز لاستفسارك",
  },
  booking_note: {
    en: "Consultation fees apply. Our team will review your request, confirm your appointment slot, and provide secure payment details.",
    ar: "تطبق رسوم الاستشارة. سيقوم فريقنا بمراجعة طلبك وتأكيد موعدك وتوفير تفاصيل الدفع الآمنة.",
  },
  booking_submit: {
    en: "Request Appointment",
    ar: "طلب تحديد موعد الاستشارة",
  },
  booking_success: {
    en: "Inquiry Submitted Successfully. Our coordinator will reach out to you within 2 business hours.",
    ar: "تم إرسال طلبك بنجاح. سيتواصل معك منسق الاستشارات لدينا في غضون ساعتي عمل.",
  },

  // Contact
  contact_title: {
    en: "Get in Touch",
    ar: "تواصل معنا مباشرة",
  },
  contact_subtitle: {
    en: "Reach out via our digital channel or visit our central corporate suite.",
    ar: "تواصل معنا عبر القنوات الرقمية أو تفضل بزيارة جناحنا الرئيسي.",
  },
  contact_office_address: {
    en: "SPC Free Zone, Sheikh Mohammed Bin Zayed Road, Al Zahia, Sharjah, United Arab Emirates",
    ar: "\"المنطقة الحرة لمدينة الشارقة للنشر\" (SPC Free Zone) - شارع محمد بن زايد - منطقة الزاهية",
  },
  contact_phone: {
    en: "+971 50 295 4666",
    ar: "+971 50 295 4666",
  },
  contact_email: {
    en: "expertlegaldeptcollection@gmail.com",
    ar: "expertlegaldeptcollection@gmail.com",
  },
  contact_hours: {
    en: "Monday - Friday: 9:00 AM - 6:00 PM",
    ar: "الاثنين - الجمعة: 9:00 صباحًا - 6:00 مساءً",
  },
  contact_send_msg: {
    en: "Send Message",
    ar: "إرسال رسالة",
  },

  // Footer
  footer_desc: {
    en: "Experts for Legal Consultations & Debt Collection is a modern LegalTech and corporate consulting firm licensed in the United Arab Emirates, delivering high-performance financial recovery and compliance solutions.",
    ar: "الخبراء للاستشارات القانونية وتحصيل الديون هي شركة تكنولوجيا قانونية واستشارات شركات حديثة مرخصة في دولة الإمارات، تقدم حلول استرداد مالي وامتثال عالية الأداء.",
  },
  footer_quick_links: {
    en: "Quick Navigation",
    ar: "روابط سريعة",
  },
  footer_privacy: {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  footer_terms: {
    en: "Terms & Conditions",
    ar: "الشروط والأحكام",
  },
  footer_newsletter: {
    en: "Subscribe to Legal Updates",
    ar: "اشترك في المستجدات القانونية",
  },
  footer_newsletter_placeholder: {
    en: "Enter your email address",
    ar: "أدخل بريدك الإلكتروني",
  },
  footer_newsletter_btn: {
    en: "Subscribe",
    ar: "اشتراك",
  },
  footer_rights: {
    en: "All rights reserved. Experts for Legal Consultations & Debt Collection",
    ar: "جميع الحقوق محفوظة. شركة الخبراء للاستشارات القانونية وتحصيل الديون",
  },
  footer_licensed: {
    en: "Licensed by the UAE Department of Economy & Tourism.",
    ar: "مرخصة من دائرة الاقتصاد والسياحة في دولة الإمارات.",
  },
  // About Page Translations
  nav_about: {
    en: "About Us",
    ar: "من نحن",
  },
  about_title: {
    en: "Experts for Legal Consultations & Debt Collection",
    ar: "شركة الخبراء للاستشارات القانونية وتحصيل الديون",
  },
  about_subtitle: {
    en: "Delivering modern LegalTech, professional debt recovery, and corporate advisory solutions across the UAE.",
    ar: "تقديم حلول التكنولوجيا القانونية الحديثة، وتحصيل الديون المهني، واستشارات الشركات في الإمارات.",
  },
  about_overview_title: {
    en: "Corporate Profile Overview",
    ar: "نبذة عن ملف الشركة",
  },
  about_overview_text: {
    en: "Established in the United Arab Emirates, Experts for Legal Consultations & Debt Collection is a modern LegalTech and corporate consulting firm. We combine specialized legal expertise with robust financial intelligence, commercial brokerage, and business setup structures under a premium, digital-first corporate interface.",
    ar: "تأسست شركة الخبراء للاستشارات القانونية وتحصيل الديون في دولة الإمارات العربية المتحدة، وهي شركة استشارات شركات وتكنولوجيا قانونية حديثة. نجمع بين الخبرة القانونية المتخصصة والذكاء المالي القوي، والوساطة التجارية، وهياكل تأسيس الأعمال تحت واجهة رقمية متميزة.",
  },
  about_mission_title: {
    en: "Our Mission",
    ar: "رسالتنا",
  },
  about_mission_desc: {
    en: "To secure the financial rights of our clients, safeguard corporate operations from regulatory risks, and deliver top-tier, multi-disciplinary consulting services with absolute professional confidentiality and compliance.",
    ar: "تأمين الحقوق المالية لعملائنا، وحماية عمليات الشركات من المخاطر التنظيمية، وتقديم خدمات استشارية رفيعة المستوى ومتعددة التخصصات بسرية مهنية وامتثال مطلق.",
  },
  about_vision_title: {
    en: "Our Vision",
    ar: "رؤيتنا",
  },
  about_vision_desc: {
    en: "To stand as the leading LegalTech and debt recovery advisor in the Gulf region, driving innovation, fast digital resolutions, and premium commercial brokerage opportunities for international corporate investors.",
    ar: "أن نكون المستشار الرائد في مجال التكنولوجيا القانونية وتحصيل الديون في منطقة الخليج، من خلال تحفيز الابتكار، والتسويات الرقمية السريعة، وفرص الوساطة التجارية المتميزة للمستثمرين.",
  },
  about_values_title: {
    en: "Our Core Values",
    ar: "قيمنا الجوهرية",
  },
  about_value_1_title: {
    en: "Client-Centric Speed",
    ar: "السرعة والتركيز على العميل",
  },
  about_value_1_desc: {
    en: "We prioritize swift communication, proactive legal strategy, and active progress tracking.",
    ar: "نحن نولي الأولوية للاتصال السريع، والاستراتيجية القانونية الاستباقية، والتتبع النشط للتقدم.",
  },
  about_value_2_title: {
    en: "Absolute Confidentiality",
    ar: "السرية المطلقة والنزاهة",
  },
  about_value_2_desc: {
    en: "All client matters, corporate assets, and consultation details are locked under strict legal privilege.",
    ar: "جميع شؤون العملاء، وأصول الشركات، وتفاصيل الاستشارات محمية بامتياز قانوني صارم.",
  },
  about_value_3_title: {
    en: "Multi-Disciplinary Innovation",
    ar: "الابتكار متعدد التخصصات",
  },
  about_value_3_desc: {
    en: "Integrating marketing, tax readiness, logistics, and company setup into one central platform.",
    ar: "دمج التسويق، والجاهزية الضريبية، والخدمات اللوجستية، وتأسيس الشركات في منصة مركزية واحدة.",
  },
  about_license_title: {
    en: "Official License & UAE Authorizations",
    ar: "الترخيص الرسمي وتفويضات دولة الإمارات",
  },
  about_license_desc: {
    en: "Experts for Legal Consultations & Debt Collection operates as a fully registered and licensed entity in compliance with the Department of Economy and Tourism (DET) and federal regulatory bodies of the United Arab Emirates.",
    ar: "تعمل شركة الخبراء للاستشارات القانونية وتحصيل الديون ككيان مسجل ومرخص بالكامل بما يتوافق مع دائرة الاقتصاد والسياحة (DET) والجهات التنظيمية الاتحادية في دولة الإمارات العربية المتحدة.",
  },
  about_timeline_title: {
    en: "Our Corporate Journey",
    ar: "رحلتنا المؤسسية",
  },
  about_timeline_1_year: {
    en: "Phase 1: Foundation",
    ar: "المرحلة الأولى: التأسيس",
  },
  about_timeline_1_desc: {
    en: "Authorized license establishment, setting up central office suites in Dubai and recruiting core legal specialists.",
    ar: "الحصول على التراخيص الرسمية، وتأسيس المكاتب الرئيسية في دبي واستقطاب نخبة من أخصائيي القانون.",
  },
  about_timeline_2_year: {
    en: "Phase 2: Expansion",
    ar: "المرحلة الثانية: التوسع والنمو",
  },
  about_timeline_2_desc: {
    en: "Expanding practice areas to include commercial brokerage, tax return prep, logistics and setup services.",
    ar: "توسيع مجالات الممارسة لتشمل الوساطة التجارية، وإعداد الإقرارات الضريبية، والخدمات اللوجستية وتأسيس الشركات.",
  },
  about_timeline_3_year: {
    en: "Phase 3: LegalTech Integration",
    ar: "المرحلة الثالثة: دمج التكنولوجيا القانونية",
  },
  about_timeline_3_desc: {
    en: "Integrating active CRM case tracking, digital contract portals, golden visa support, and secure online consultation bookings.",
    ar: "دمج أنظمة تتبع الحالات النشطة (CRM)، وبوابات العقود الرقمية، ودعم الإقامة الذهبية، وحجز الاستشارات الآمن عبر الإنترنت.",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  // Load language from localStorage on client side mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("experts_legal_lang");
      if (saved === "ar" || saved === "en") {
        setLanguage(saved);
      }
    }
  }, []);

  // Sync state with HTML dir attribute and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.setAttribute("dir", "rtl");
      root.setAttribute("lang", "ar");
    } else {
      root.setAttribute("dir", "ltr");
      root.setAttribute("lang", "en");
    }
    localStorage.setItem("experts_legal_lang", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      return key;
    }
    return translations[key][language];
  };

  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
