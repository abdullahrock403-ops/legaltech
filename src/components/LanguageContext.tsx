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
    ar: "للاستشارات القانونية والخدمات التجارية",
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
    ar: "المركز المعرفي",
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
    ar: "حلول قانونية استراتيجية متكاملة للشركات والأفراد",
  },
  hero_subheadline: {
    en: "Experts for Legal Consultations & Debt Collection provides premium legal advisory, debt recovery, commercial brokerage, and business consulting services designed to protect businesses, recover financial rights, and support long-term growth across the United Arab Emirates.",
    ar: "تقدم شركة الخبراء للاستشارات القانونية وتحصيل الديون خدمات استشارية قانونية متميزة، وتحصيل الديون، والوساطة التجارية، واستشارات الأعمال المصممة لحماية المؤسسات، واسترداد الحقوق المالية، ودعم النمو طويل الأجل في جميع أنحاء دولة الإمارات العربية المتحدة.",
  },
  hero_cta_book: {
    en: "Book a Consultation",
    ar: "حجز استشارة",
  },
  hero_cta_explore: {
    en: "Explore Our Services",
    ar: "استكشف خدماتنا",
  },
  hero_fee_note: {
    en: "Professional consultations are provided by appointment and subject to consultation fees.",
    ar: "تُقدم الاستشارات القانونية والتجارية بموجب موعد مسبق وتخضع لرسوم استشارية.",
  },

  // Highlights
  highlight_1_title: {
    en: "Licensed UAE Company",
    ar: "منشأة مرخصة في دولة الإمارات",
  },
  highlight_1_desc: {
    en: "Fully authorized corporate legal & business consultancy operating under UAE regulations.",
    ar: "شركة استشارات قانونية وتجارية مرخصة بالكامل وتعمل وفق الأنظمة والقوانين المعمول بها في دولة الإمارات.",
  },
  highlight_2_title: {
    en: "Professional Experts",
    ar: "خبراء قانون وأعمال محترفون",
  },
  highlight_2_desc: {
    en: "A multi-disciplinary team combining legal expertise with business intelligence.",
    ar: "فريق عمل متعدد التخصصات يجمع بين الخبرة القانونية الواسعة والذكاء التجاري والمالي.",
  },
  highlight_3_title: {
    en: "Confidential Consultations",
    ar: "سرية مهنية وقانونية مطلقة",
  },
  highlight_3_desc: {
    en: "Your data and corporate strategy are secured with strict professional privilege.",
    ar: "بيانات عملائنا واستراتيجياتهم الاستثمارية محمية بموجب مبادئ السرية المهنية والقانونية الصارمة.",
  },
  highlight_4_title: {
    en: "Fast Response Time",
    ar: "السرعة في الاستجابة والمتابعة",
  },
  highlight_4_desc: {
    en: "Rapid evaluation of cases and queries with active status updates.",
    ar: "التقييم الفوري للقضايا والاستفسارات وتزويدكم بالتقارير الدورية عن حالة الطلب.",
  },
  highlight_5_title: {
    en: "Business-Focused",
    ar: "حلول قانونية وتجارية موجهة للأعمال",
  },
  highlight_5_desc: {
    en: "We align legal frameworks with your corporate goals to maximize success.",
    ar: "نعمل على مواءمة الأطر القانونية مع الأهداف الاستراتيجية لشركتكم لضمان تحقيق أعلى معدلات النجاح.",
  },

  // Services
  services_title: {
    en: "Our Professional Services",
    ar: "خدماتنا المهنية المتكاملة",
  },
  services_subtitle: {
    en: "Comprehensive legal tech, debt recovery, and business advisory solutions tailored for the UAE market.",
    ar: "حلول متكاملة في التكنولوجيا القانونية واسترداد الديون واستشارات الأعمال المصممة خصيصاً لسوق دولة الإمارات العربية المتحدة.",
  },
  service_learn_more: {
    en: "Learn More",
    ar: "الاطلاع على التفاصيل",
  },
  service_close: {
    en: "Close Detail",
    ar: "إغلاق التفاصيل",
  },

  // Why Choose Us
  why_title: {
    en: "Redefining Legal & Business Consulting",
    ar: "إعادة تعريف الاستشارات القانونية والتجارية للأعمال",
  },
  why_subtitle: {
    en: "How we deliver modern, strategic value compared to traditional law office structures.",
    ar: "كيفية تقديم قيمة استراتيجية حديثة بالمقارنة مع هياكل ومكاتب المحاماة التقليدية.",
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
    ar: "نهج قائم على رد الفعل (تقديم المساعدة فقط بعد نشوء النزاع)",
  },
  why_trad_2: {
    en: "Limited service scope (only legal, no business context)",
    ar: "نطاق خدمات محدود (التركيز على الجوانب القانونية دون الربط بالسياق التجاري)",
  },
  why_trad_3: {
    en: "Manual, slow communication methods",
    ar: "اعتماد قنوات اتصال تقليدية وبطيئة للمتابعة",
  },
  why_trad_4: {
    en: "Single specialty focus without cross-domain advisory",
    ar: "التركيز على تخصص واحد دون تقديم استشارات وحلول متقاطعة المجالات",
  },
  why_exp_1: {
    en: "Strategic legal advisory & preventative counsel",
    ar: "تقديم الاستشارات القانونية الاستباقية والوقائية لتفادي المخاطر",
  },
  why_exp_2: {
    en: "Comprehensive business solutions (marketing, tax, setup)",
    ar: "حلول أعمال متكاملة تشمل التأسيس، والخدمات الضريبية، واللوجستية",
  },
  why_exp_3: {
    en: "Fast, modern digital communication platforms",
    ar: "منصات اتصال رقمية ذكية وفورية تضمن سرعة المتابعة",
  },
  why_exp_4: {
    en: "Multi-disciplinary expertise under one premium platform",
    ar: "خبرات استشارية متعددة التخصصات تجمعها منصة متميزة واحدة",
  },
  why_exp_5: {
    en: "Client-focused, results-driven milestone management",
    ar: "إدارة تشغيلية تركز على تحقيق النتائج وتلبية تطلعات العميل",
  },
  why_exp_6: {
    en: "Licensed and trusted corporate provider in the UAE",
    ar: "منشأة مرخصة وموثوقة لتقديم الخدمات المؤسسية في دولة الإمارات",
  },

  // How We Work
  work_title: {
    en: "Our Methodical Approach",
    ar: "منهجية العمل والخطوات التنفيذية",
  },
  work_subtitle: {
    en: "Four clear steps leading from initial inquiry to structured execution and support.",
    ar: "أربع خطوات تنظيمية واضحة بدءاً من الاستفسار الأولي حتى التنفيذ والدعم المستمر.",
  },
  work_step_1: {
    en: "Book Your Consultation",
    ar: "حجز جلسة الاستشارة",
  },
  work_step_1_desc: {
    en: "Schedule a secure session online or in-office to state your parameters.",
    ar: "تحديد موعد لجلسة استشارية آمنة في المكتب أو عبر قنوات الاتصال الرقمي لتحديد أبعاد قضيتكم.",
  },
  work_step_2: {
    en: "Case Evaluation & Assessment",
    ar: "تقييم القضية والتحليل القانوني",
  },
  work_step_2_desc: {
    en: "Our specialists review your documents and verify legal standing.",
    ar: "يقوم الأخصائيون بدراسة ومراجعة المستندات بدقة لتقييم الموقف القانوني.",
  },
  work_step_3: {
    en: "Strategic Planning & Advisory",
    ar: "التخطيط الاستراتيجي وتقديم المشورة",
  },
  work_step_3_desc: {
    en: "We construct a comprehensive legal and commercial roadmap.",
    ar: "وضع خارطة طريق تنظيمية متكاملة تجمع بين الجوانب القانونية والتجارية.",
  },
  work_step_4: {
    en: "Execution & Ongoing Support",
    ar: "التنفيذ والدعم المستمر",
  },
  work_step_4_desc: {
    en: "We initiate recovery or consulting steps with continuous updates.",
    ar: "البدء الفوري في إجراءات التحصيل أو الاستشارات مع تزويدكم بتقارير دورية منتظمة.",
  },

  // Industries We Serve
  ind_title: {
    en: "Industries We Support",
    ar: "القطاعات التي نخدمها",
  },
  ind_subtitle: {
    en: "Tailored regulatory and corporate expertise across core economic sectors.",
    ar: "خبرة قانونية وتجارية وتنظيمية متكاملة لتلبية متطلبات مختلف القطاعات الاقتصادية.",
  },

  // Featured Practice Areas
  practice_title: {
    en: "Featured Practice Areas",
    ar: "مجالات الممارسة القانونية والتجارية",
  },
  practice_subtitle: {
    en: "Deep domain capability in legal operations and corporate structure.",
    ar: "خبرة متخصصة ومعرفة عميقة بالعمليات وهيكلة الشركات والأعمال.",
  },

  // Testimonials
  test_title: {
    en: "Trusted by Business Leaders",
    ar: "شركاء النجاح وقادة الأعمال",
  },
  test_subtitle: {
    en: "What corporate clients and entrepreneurs say about our advisory speed and results.",
    ar: "آراء عملائنا من الشركات ورواد الأعمال حول سرعة استجابتنا والنتائج التي نحققها.",
  },

  // Insights
  insights_title: {
    en: "Knowledge Center & Regulatory Insights",
    ar: "المركز المعرفي والمستجدات التنظيمية",
  },
  insights_subtitle: {
    en: "Stay updated on the latest legal reforms, business regulations, and debt recovery insights in the UAE.",
    ar: "ابق على اطلاع بأحدث التطورات التنظيمية واللوائح الاستثمارية وإرشادات تحصيل الديون في دولة الإمارات.",
  },
  insight_read_more: {
    en: "Read Article",
    ar: "اقرأ المقال الكامل",
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
    ar: "احجز جلستك الاستشارية الآن مع نخبة من أخصائيي القانون والأعمال. (تطبق الرسوم الاستشارية).",
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
    ar: "الاستشارات القانونية",
  },
  booking_type_debt: {
    en: "Debt Collection & Recovery",
    ar: "تحصيل الديون واستردادها",
  },
  booking_type_corporate: {
    en: "Corporate Business Consultancy",
    ar: "الاستشارات التجارية وتأسيس الشركات",
  },
  booking_type_contract: {
    en: "Contract Drafting & Review",
    ar: "صياغة ومراجعة العقود والاتفاقيات",
  },
  booking_date: {
    en: "Preferred Date",
    ar: "التاريخ المفضل",
  },
  booking_time: {
    en: "Preferred Time Window",
    ar: "الفترة الزمنية المفضلة",
  },
  booking_msg: {
    en: "Brief Summary of Your Inquiry",
    ar: "ملخص موجز لموضوع الاستفسار",
  },
  booking_note: {
    en: "Consultation fees apply. Our team will review your request, confirm your appointment slot, and provide secure payment details.",
    ar: "تطبق الرسوم على الاستشارات الاستقصائية. سيقوم فريقنا بمراجعة طلبكم لتأكيد الموعد وتوفير تفاصيل الدفع الآمنة.",
  },
  booking_submit: {
    en: "Request Appointment",
    ar: "طلب تحديد موعد الاستشارة",
  },
  booking_success: {
    en: "Inquiry Submitted Successfully. Our coordinator will reach out to you within 2 business hours.",
    ar: "تم إرسال طلبكم بنجاح. سيتواصل معكم منسق الاستشارات لدينا لتأكيد الموعد في غضون ساعتي عمل.",
  },

  // Contact
  contact_title: {
    en: "Get in Touch",
    ar: "تواصل معنا مباشرة",
  },
  contact_subtitle: {
    en: "Reach out via our digital channel or visit our central corporate suite.",
    ar: "تواصلوا معنا عبر القنوات الرقمية المتاحة أو تفضلوا بزيارة جناحنا الرئيسي.",
  },
  contact_office_address: {
    en: "SPC Free Zone, Sheikh Mohammed Bin Zayed Road, Al Zahia, Sharjah, United Arab Emirates",
    ar: "\"المنطقة الحرة لمدينة الشارقة للنشر\" (SPC Free Zone) - شارع الشيخ محمد بن زايد - منطقة الزاهية، الشارقة، دولة الإمارات العربية المتحدة",
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
    ar: "من الاثنين إلى الجمعة: من الساعة 9:00 صباحًا حتى 6:00 مساءً",
  },
  contact_send_msg: {
    en: "Send Message",
    ar: "إرسال الرسالة",
  },

  // Footer
  footer_desc: {
    en: "Experts for Legal Consultations & Debt Collection is a modern LegalTech and corporate consulting firm licensed in the United Arab Emirates, delivering high-performance financial recovery and compliance solutions.",
    ar: "تعتبر الخبراء للاستشارات القانونية وتحصيل الديون منشأة رائدة وحديثة في تقديم خدمات التكنولوجيا القانونية واستشارات الأعمال والشركات، وتقديم حلول استرداد الحقوق المالية والامتثال بالدولة.",
  },
  footer_quick_links: {
    en: "Quick Navigation",
    ar: "روابط الانتقال السريع",
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
    ar: "اشترك في المستجدات القانونية والتشريعية",
  },
  footer_newsletter_placeholder: {
    en: "Enter your email address",
    ar: "أدخل بريدك الإلكتروني للشركة",
  },
  footer_newsletter_btn: {
    en: "Subscribe",
    ar: "اشتراك",
  },
  footer_rights: {
    en: "All rights reserved. Experts for Legal Consultations & Debt Collection",
    ar: "جميع الحقوق محفوظة. الخبراء للاستشارات القانونية وتحصيل الديون",
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
    ar: "الخبراء للاستشارات القانونية وتحصيل الديون",
  },
  about_subtitle: {
    en: "Delivering modern LegalTech, professional debt recovery, and corporate advisory solutions across the UAE.",
    ar: "تقديم أرقى حلول التكنولوجيا القانونية والوساطة التجارية وتحصيل الديون واستشارات الأعمال بالدولة.",
  },
  about_overview_title: {
    en: "Corporate Profile Overview",
    ar: "نبذة تعريفية عن المنشأة",
  },
  about_overview_text: {
    en: "Established in the United Arab Emirates, Experts for Legal Consultations & Debt Collection is a modern LegalTech and corporate consulting firm. We combine specialized legal expertise with robust financial intelligence, commercial brokerage, and business setup structures under a premium, digital-first corporate interface.",
    ar: "تأسست شركة الخبراء للاستشارات القانونية وتحصيل الديون في دولة الإمارات العربية المتحدة كمنصة استشارية وتكنولوجية حديثة لخدمة قطاع الأعمال والشركات. ندمج بين التوجيه القانوني المتخصص وأدوات الذكاء المالي والوساطة التجارية وبناء الهياكل التشغيلية للمستثمرين من خلال واجهة رقمية متطورة.",
  },
  about_mission_title: {
    en: "Our Mission",
    ar: "رسالتنا",
  },
  about_mission_desc: {
    en: "To secure the financial rights of our clients, safeguard corporate operations from regulatory risks, and deliver top-tier, multi-disciplinary consulting services with absolute professional confidentiality and compliance.",
    ar: "استرداد وتأمين الحقوق المالية والائتمانية لعملائنا، ووقاية أعمالهم من أية مخاطر تنظيمية، وتقديم خدمات استشارية متكاملة تحت مبادئ السرية المهنية المطلقة والامتثال الكامل للأنظمة المحلية.",
  },
  about_vision_title: {
    en: "Our Vision",
    ar: "رؤيتنا",
  },
  about_vision_desc: {
    en: "To stand as the leading LegalTech and debt recovery advisor in the Gulf region, driving innovation, fast digital resolutions, and premium commercial brokerage opportunities for international corporate investors.",
    ar: "أن نكون الشريك الاستشاري والريادي الأبرز في تقديم حلول التكنولوجيا القانونية وتحصيل الديون في منطقة الخليج العربي، وتقديم أفضل الفرص الاستثمارية والوساطة التجارية للمستثمرين الدوليين.",
  },
  about_values_title: {
    en: "Our Core Values",
    ar: "قيمنا الأساسية",
  },
  about_value_1_title: {
    en: "Client-Centric Speed",
    ar: "السرعة وتلبية متطلبات العميل",
  },
  about_value_1_desc: {
    en: "We prioritize swift communication, proactive legal strategy, and active progress tracking.",
    ar: "نولي الأولوية المطلقة للاتصال الفوري والسرعة والحلول القانونية الوقائية والشفافية التامة في تتبع الحالات.",
  },
  about_value_2_title: {
    en: "Absolute Confidentiality",
    ar: "السرية المطلقة والأمان",
  },
  about_value_2_desc: {
    en: "All client matters, corporate assets, and consultation details are locked under strict legal privilege.",
    ar: "تخضع كافة شؤون وأصول وبيانات عملائنا واستشاراتهم لقواعد السرية والحصانة المهنية والقانونية الصارمة.",
  },
  about_value_3_title: {
    en: "Multi-Disciplinary Innovation",
    ar: "الابتكار وتعدد التخصصات",
  },
  about_value_3_desc: {
    en: "Integrating marketing, tax readiness, logistics, and company setup into one central platform.",
    ar: "تقديم إطار خدماتي متكامل يجمع بين التأسيس، والامتثال الضريبي، والدعم اللوجستي، والوساطة التجارية.",
  },
  about_license_title: {
    en: "Official License & UAE Authorizations",
    ar: "الترخيص الرسمي وتفويضات دولة الإمارات",
  },
  about_license_desc: {
    en: "Experts for Legal Consultations & Debt Collection operates as a fully registered and licensed entity in compliance with Sharjah Publishing City Free Zone Authority (SPC Free Zone) and federal regulatory bodies of the United Arab Emirates.",
    ar: "تعمل شركة الخبراء للاستشارات القانونية وتحصيل الديون ككيان مسجل ومرخص بالكامل بما يتوافق مع هيئة المنطقة الحرة لمدينة الشارقة للنشر (SPC Free Zone) والجهات التنظيمية الاتحادية في دولة الإمارات العربية المتحدة.",
  },
  about_timeline_title: {
    en: "Our Corporate Journey",
    ar: "المسار والنمو المؤسسي",
  },
  about_timeline_1_year: {
    en: "Phase 1: Foundation",
    ar: "المرحلة الأولى: التأسيس والنشأة",
  },
  about_timeline_1_desc: {
    en: "Authorized license establishment, setting up central office suites in Dubai and recruiting core legal specialists.",
    ar: "استكمال التراخيص الرسمية وتجهيز مقراتنا الرئيسية واستقطاب نخبة من الكفاءات والأخصائيين الماليين والقانونيين.",
  },
  about_timeline_2_year: {
    en: "Phase 2: Expansion",
    ar: "المرحلة الثانية: التوسع الاستراتيجي",
  },
  about_timeline_2_desc: {
    en: "Expanding practice areas to include commercial brokerage, tax return prep, logistics and setup services.",
    ar: "تطوير نطاق العمل ليشمل تقديم خدمات الوساطة التجارية، وإعداد الإقرارات الضريبية، والخدمات اللوجستية وتأسيس الأعمال.",
  },
  about_timeline_3_year: {
    en: "Phase 3: LegalTech Integration",
    ar: "المرحلة الثالثة: الرقمنة والتكنولوجيا القانونية",
  },
  about_timeline_3_desc: {
    en: "Integrating active CRM case tracking, digital contract portals, golden visa support, and secure online consultation bookings.",
    ar: "دمج أنظمة المتابعة الرقمية (CRM) وبوابات إدارة الاتفاقيات، وتسهيل الإقامات الذهبية وحجوزات الاستشارات الذكية.",
  },
  about_leader_section_title: {
    en: "Leadership & Partners",
    ar: "القيادة والشركاء",
  },
  about_leader_name: {
    en: "Mr. Salah Ali Salem Alazzani",
    ar: "أ. صلاح علي سالم العزاني",
  },
  about_leader_title: {
    en: "Founder & Managing Partner",
    ar: "المؤسس والشريك المدير",
  },
  about_leader_desc: {
    en: "Directing corporate litigation strategies, commercial debt recoveries, and business advisory services across the United Arab Emirates.",
    ar: "يتولى توجيه استراتيجيات التقاضي للشركات، وتسوية وتحصيل الديون التجارية، وتقديم الخدمات الاستشارية للأعمال في جميع أنحاء دولة الإمارات العربية المتحدة.",
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
