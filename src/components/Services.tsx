"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  Briefcase,
  Layers,
  FileText,
  Handshake,
  Building,
  Megaphone,
  Truck,
  FileCheck,
  Percent,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: any;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  details: { en: string; ar: string };
  benefits: { en: string[]; ar: string[] };
  faqs: { q: { en: string; ar: string }; a: { en: string; ar: string } }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "legal-consultations",
    icon: Scale,
    title: { en: "Legal Consultations", ar: "الاستشارات القانونية" },
    desc: {
      en: "Strategic legal advice covering UAE corporate, labor, and civil laws.",
      ar: "استشارات قانونية استراتيجية تغطي قوانين الشركات والعمل والمدني في الإمارات.",
    },
    details: {
      en: "Our legal consulting team provides expert guidance for corporate restructurings, labor disputes, civil litigation preparation, and general corporate compliance under the latest UAE regulations. We ensure your business operates within safe margins.",
      ar: "يقدم فريق الاستشارات القانونية لدينا توجيهات الخبراء لإعادة هيكلة الشركات، ونزاعات العمل، وإعداد التقاضي المدني، والامتثال العام للشركات بموجب أحدث اللوائح المعمول بها في دولة الإمارات. نضمن أن تعمل عمليتك بأمان تام.",
    },
    benefits: {
      en: ["Direct access to licensed UAE advisors", "Proactive mitigation of corporate liability", "Comprehensive analysis of local legal standing"],
      ar: ["الوصول المباشر إلى مستشاري الإمارات المرخصين", "الحد الاستباقي من المسؤولية القانونية للشركات", "تحليل شامل للموقف القانوني المحلي"],
    },
    faqs: [
      {
        q: { en: "How are consultation fees calculated?", ar: "كيف يتم احتساب الرسوم الاستشارية؟" },
        a: { en: "Fees are charged per session based on case complexity and the depth of documentation review required.", ar: "يتم احتساب الرسوم لكل جلسة بناءً على مدى تعقيد القضية وعمق مراجعة المستندات المطلوبة." }
      }
    ]
  },
  {
    id: "debt-collection",
    icon: Layers,
    title: { en: "Debt Collection & Recovery", ar: "تحصيل واسترداد الديون" },
    desc: {
      en: "Professional, ethical, and highly efficient corporate debt recovery.",
      ar: "استرداد ديون الشركات بشكل مهني وأخلاقي وفعال للغاية.",
    },
    details: {
      en: "We utilize advanced negotiation techniques and dynamic legal pressure points to recover outstanding receivables without breaking valuable corporate relationships. Licensed and highly successful across UAE territories.",
      ar: "نحن نستخدم تقنيات التفاوض المتقدمة ونقاط الضغط القانوني الفعالة لاسترداد المستحقات المتأخرة دون الإضرار بالعلاقات التجارية القيمة. خدمات مرخصة وناجحة للغاية في الإمارات.",
    },
    benefits: {
      en: ["No-recovery, no-advocate-fee options", "Full legal escalation pathways", "Transparent online collection updates"],
      ar: ["خيارات التحصيل بدون رسوم مسبقة", "مسارات تصعيد قانونية متكاملة", "تحديثات تحصيل رقمية وشفافة"],
    },
    faqs: [
      {
        q: { en: "What is the average time for debt recovery?", ar: "ما هو متوسط الوقت المستغرق لاسترداد الديون؟" },
        a: { en: "Corporate recoveries typically take between 30 to 90 days depending on debtor liquidity and standing.", ar: "عادةً ما تستغرق عمليات الاسترداد للشركات ما بين 30 إلى 90 يومًا بناءً على سيولة المدين وموقفه المالي." }
      }
    ]
  },
  {
    id: "business-consultancy",
    icon: Briefcase,
    title: { en: "Business Consultancy", ar: "استشارات الأعمال" },
    desc: {
      en: "Operational audit, commercial optimization, and expansion planning.",
      ar: "التدقيق التشغيلي، تحسين الكفاءة التجارية، والتخطيط للتوسع.",
    },
    details: {
      en: "From market entry analysis to process optimizations and financial roadmaps, we support businesses looking to scale in Dubai and globally. Our multi-disciplinary experts align legal safety with commercial agility.",
      ar: "من تحليل دخول السوق إلى تحسين العمليات ورسم خرائط الطريق المالية، ندعم الشركات التي تتطلع إلى التوسع في دبي والعالم. يجمع خبراؤنا بين السلامة القانونية والمرونة التجارية.",
    },
    benefits: {
      en: ["Strategic market entry reports", "Process efficiency audits", "Corporate growth mapping"],
      ar: ["تقارير استراتيجية لدخول السوق", "تدقيق كفاءة العمليات التشغيلية", "رسم خرائط نمو الشركات"],
    },
    faqs: [
      {
        q: { en: "Do you assist with international scale-up?", ar: "هل تقدمون الدعم للتوسع الدولي؟" },
        a: { en: "Yes, we construct joint-venture agreements and regulatory structures to facilitate cross-border setups.", ar: "نعم، نحن نصمم اتفاقيات المشاريع المشتركة والهياكل التنظيمية لتسهيل التأسيس عابر الحدود." }
      }
    ]
  },
  {
    id: "contract-review",
    icon: FileText,
    title: { en: "Contract Drafting & Review", ar: "صياغة ومراجعة العقود" },
    desc: {
      en: "Drafting solid agreements designed to mitigate corporate exposure.",
      ar: "صياغة اتفاقيات متينة ومحكمة ومصممة لتقليل المخاطر القانونية للشركات.",
    },
    details: {
      en: "We design robust non-disclosure agreements (NDAs), joint venture structures, employment contracts, partnership contracts, and vendor agreements, ensuring you are fully protected in every transaction.",
      ar: "نصمم اتفاقيات عدم إفشاء قوية (NDAs)، وهياكل المشاريع المشتركة، وعقود العمل، وعقود الشراكة، واتفاقيات الموردين، مما يضمن حمايتك بالكامل في كل صفقة تجارية.",
    },
    benefits: {
      en: ["Protection of intellectual property", "Elimination of loophole exposures", "Fast draft turnaround times"],
      ar: ["حماية الملكية الفكرية والأسرار التجارية", "القضاء على الثغرات القانونية المحتملة", "سرعة إعداد ومراجعة المسودات"],
    },
    faqs: [
      {
        q: { en: "What contracts do you review?", ar: "ما هي العقود التي تقومون بمراجعتها؟" },
        a: { en: "We review commercial sales, employment agreements, lease contracts, and shareholder agreements.", ar: "نراجع عقود المبيعات التجارية، اتفاقيات العمل، عقود الإيجار، واتفاقيات المساهمين." }
      }
    ]
  },
  {
    id: "commercial-brokerage",
    icon: Handshake,
    title: { en: "Commercial Brokerage", ar: "الوساطة التجارية" },
    desc: {
      en: "Connecting strategic corporate investors with vetted business assets.",
      ar: "ربط مستثمري الشركات الاستراتيجيين بالأصول والفرص التجارية الموثوقة.",
    },
    details: {
      en: "We facilitate commercial matchmaking, joint ventures, and asset transactions. Our team provides the structural due diligence necessary to close secure and highly profitable corporate deals in Dubai.",
      ar: "نحن نسهل التوفيق التجاري، والمشاريع المشتركة، ومعاملات الأصول. يوفر فريقنا العناية الواجبة الهيكلية اللازمة لإغلاق صفقات الشركات الآمنة والمربحة للغاية في دبي.",
    },
    benefits: {
      en: ["Vetted commercial investments pipeline", "Safe transaction escrow coordination", "Comprehensive company audit access"],
      ar: ["قنوات استثمار تجاري خاضعة للتدقيق", "تنسيق آمن لحسابات الضمان والمعاملات", "الوصول لتقارير تدقيق الشركات الشاملة"],
    },
    faqs: [
      {
        q: { en: "What sectors do you broker?", ar: "ما هي القطاعات التي تقومون بالوساطة فيها؟" },
        a: { en: "We specialize in logistics assets, industrial sectors, and digital tech firms.", ar: "نحن نتخصص في أصول الخدمات اللوجستية، والقطاعات الصناعية، وشركات التكنولوجيا الرقمية." }
      }
    ]
  },
  {
    id: "business-setup",
    icon: Building,
    title: { en: "Business Setup Services", ar: "خدمات تأسيس الشركات" },
    desc: {
      en: "End-to-end mainland, freezone, and offshore company formation.",
      ar: "تأسيس كامل للشركات في البر الرئيسي والمناطق الحرة وخارج الحدود.",
    },
    details: {
      en: "We handle corporate structuring, trade license procurement, local sponsor arrangements, and corporate bank account introduction. We make starting a business in the UAE seamless and transparent.",
      ar: "نتعامل مع الهيكلة المؤسسية، والحصول على التراخيص التجارية، وترتيبات الكفيل المحلي، والتقديم لدى البنوك التجارية. نجعل بدء الأعمال في الإمارات أمراً سهلاً وشفافاً.",
    },
    benefits: {
      en: ["Complete DET and freezone coordination", "Secure banking introductory paths", "Golden Visa integration support"],
      ar: ["تنسيق متكامل مع دائرة الاقتصاد والمناطق الحرة", "مسارات تقديم بنكية آمنة وموثوقة", "دعم متكامل للإقامة الذهبية للمؤسسين"],
    },
    faqs: [
      {
        q: { en: "Which freezone is best for my company?", ar: "أي منطقة حرة هي الأنسب لشركتي؟" },
        a: { en: "We evaluate your business activity, target market, and budget to recommend the optimal freezone structure.", ar: "نقوم بتقييم نشاط عملك، والسوق المستهدف، والميزانية للتوصية بهيكل المنطقة الحرة الأمثل." }
      }
    ]
  },
  {
    id: "marketing-pr",
    icon: Megaphone,
    title: { en: "Marketing & PR Consultancy", ar: "استشارات التسويق والعلاقات العامة" },
    desc: {
      en: "Brand positioning and legal-compliant public relations counseling.",
      ar: "تموضع العلامة التجارية واستشارات العلاقات العامة المتوافقة مع القانون.",
    },
    details: {
      en: "Align your communications with UAE's advertising guidelines. We provide branding advice, market campaigns setup, and crisis communication management to preserve your enterprise reputation.",
      ar: "قم بمواءمة اتصالاتك التسويقية مع إرشادات الإعلانات في الإمارات. نقدم مشورة الهوية، وحملات السوق، وإدارة الأزمات للحفاظ على سمعة مؤسستك.",
    },
    benefits: {
      en: ["Legal-compliant communications strategies", "Corporate branding audits", "Crisis PR management structures"],
      ar: ["استراتيجيات اتصال متوافقة مع القوانين المحلية", "تدقيق وتقييم الهوية المؤسسية للعلامات التجارية", "هياكل متكاملة لإدارة الأزمات الإعلامية"],
    },
    faqs: [
      {
        q: { en: "Why is legal compliance important in PR?", ar: "لماذا يعد الامتثال القانوني مهمًا في العلاقات العامة؟" },
        a: { en: "The UAE has strict media and advertising guidelines; we ensure your promotions never incur regulatory fines.", ar: "تطبق دولة الإمارات إرشادات إعلامية وإعلانية صارمة؛ نضمن ألا تسبب حملاتك أي غرامات تنظيمية." }
      }
    ]
  },
  {
    id: "logistics-consultancy",
    icon: Truck,
    title: { en: "Logistics Consultancy", ar: "استشارات الخدمات اللوجستية" },
    desc: {
      en: "Supply chain mapping and customs regulations advisory.",
      ar: "تخطيط سلاسل الإمداد والاستشارات الخاصة باللوائح الجمركية.",
    },
    details: {
      en: "Optimizing supply chain channels across GCC borders. We evaluate logistics contracts, verify shipping liability frameworks, and guide you through UAE import/export custom compliance guidelines.",
      ar: "تحسين قنوات سلاسل الإمداد عبر حدود دول مجلس التعاون الخليجي. نقيم عقود اللوجستيات، ونتحقق من أطر المسؤولية، ونرشدك عبر شروط الجمارك للاستيراد والتصدير.",
    },
    benefits: {
      en: ["GCC customs clearance guidance", "Shipping liability risk assessment", "Supply chain bottleneck audits"],
      ar: ["التوجيه الخاص بالتخليص الجمركي في دول الخليج", "تقييم مخاطر المسؤولية عن الشحن والترانزيت", "تدقيق وتحليل اختناقات سلاسل الإمداد"],
    },
    faqs: [
      {
        q: { en: "Do you broker logistics leases?", ar: "هل تقومون بالوساطة في عقود الإيجار اللوجستية؟" },
        a: { en: "Yes, we coordinate warehouse leases and storage contracts via our commercial brokerage arm.", ar: "نعم، ننسق عقود إيجار المستودعات والتخزين من خلال قسم الوساطة التجارية لدينا." }
      }
    ]
  },
  {
    id: "immigration",
    icon: FileCheck,
    title: { en: "Immigration Consultancy", ar: "استشارات الهجرة والإقامة" },
    desc: {
      en: "Golden Visa, corporate work permits, and investor residency support.",
      ar: "الإقامة الذهبية، تصاريح العمل للشركات، ودعم إقامة المستثمرين.",
    },
    details: {
      en: "Comprehensive immigration planning for investors, executives, and high-net-worth individuals. We guide you through corporate work permit allocations and Golden Visa compliance standards.",
      ar: "تخطيط شامل للهجرة للمستثمرين والمديرين التنفيذيين والأفراد ذوي الملاءة المالية العالية. نسهل الحصول على تصاريح العمل وتلبية معايير الإقامة الذهبية.",
    },
    benefits: {
      en: ["Golden Visa eligibility assessment", "Corporate executive work visas processing", "Dependent visa coordination support"],
      ar: ["تقييم الأهلية للحصول على الإقامة الذهبية", "معاملات تأشيرات العمل للمديرين التنفيذيين", "دعم معاملات تأشيرات أفراد الأسرة والمكفولين"],
    },
    faqs: [
      {
        q: { en: "What is the timeline for a Golden Visa?", ar: "ما هو الوقت المستغرق للحصول على الإقامة الذهبية؟" },
        a: { en: "Once all parameters are validated, approval typically takes between 7 to 15 business days.", ar: "بمجرد التحقق من جميع المعايير، تستغرق الموافقة عادةً ما بين 7 إلى 15 يوم عمل." }
      }
    ]
  },
  {
    id: "tax-return",
    icon: Percent,
    title: { en: "Tax Return Preparation", ar: "إعداد الإقرارات الضريبية" },
    desc: {
      en: "VAT compliance, corporate tax filing, and auditing support.",
      ar: "الامتثال لضريبة القيمة المضافة، تقديم ضريبة الشركات، ودعم التدقيق.",
    },
    details: {
      en: "With corporate tax now active in the UAE, our experts verify accounting structures, file periodic VAT reports, and establish compliant bookkeeping standards to prevent heavy administrative fines.",
      ar: "مع تفعيل ضريبة الشركات في الإمارات، يتحقق خبراؤنا من الهياكل المحاسبية، ويقدمون تقارير الضريبة الدورية، ويؤسسون معايير مسك دفاتر متوافقة لتجنب الغرامات.",
    },
    benefits: {
      en: ["Corporate Tax ready auditing check", "VAT returns filing accuracy", "Prevention of administrative tax fines"],
      ar: ["التدقيق والتهيئة لضريبة الشركات", "دقة تقديم إقرارات ضريبة القيمة المضافة", "تجنب الغرامات الإدارية الصارمة للضرائب"],
    },
    faqs: [
      {
        q: { en: "When must I register for Corporate Tax?", ar: "متى يجب علي التسجيل لضريبة الشركات؟" },
        a: { en: "All taxable persons must register within the deadlines set by the FTA based on license issue dates.", ar: "يجب على جميع الأشخاص الخاضعين للضريبة التسجيل ضمن المواعيد التي تحددها الهيئة بناءً على تاريخ إصدار الرخصة." }
      }
    ]
  },
];

interface ServicesProps {
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  const { t, language, isRtl } = useLanguage();
  const displayServices = preview ? servicesData.slice(0, 3) : servicesData;

  return (
    <section id="services" className={`py-24 ${preview ? "bg-white dark:bg-navy-900" : "bg-slate-50 dark:bg-navy-950"} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white mb-4 text-center">
              {preview ? (isRtl ? "خدماتنا الاستشارية المتميزة" : "Featured Advisory Services") : t("services_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("services_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white dark:bg-navy-900 p-8 rounded-2xl border border-slate-100 dark:border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl dark:hover:bg-navy-950 shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                    {language === "en" ? service.title.en : service.title.ar}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed mb-6">
                    {language === "en" ? service.desc.en : service.desc.ar}
                  </p>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse text-sm font-bold text-gold-600 dark:text-gold-500 hover:text-navy-900 dark:hover:text-white transition-colors mt-auto"
                >
                  <span>{t("service_learn_more")}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA for Home Preview */}
        {preview && (
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-sm font-bold uppercase gold-gradient-bg text-navy-900 shadow-lg hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{isRtl ? "استكشف محفظة خدماتنا الكاملة" : "Explore Our Full Services Portfolio"}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
