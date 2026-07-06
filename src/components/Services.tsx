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
      ar: "استشارات قانونية استراتيجية متكاملة لتغطية قوانين الشركات والعمل والمعاملات المدنية بدولة الإمارات.",
    },
    details: {
      en: "Our legal consulting team provides expert guidance for corporate restructurings, labor disputes, civil litigation preparation, and general corporate compliance under the latest UAE regulations. We ensure your business operates within safe margins.",
      ar: "يقدم قسم الاستشارات القانونية لدينا توجيهات الخبراء لإعادة هيكلة وتأسيس الشركات، وحل النزاعات العمالية، والتحضير للتقاضي المدني، وضمان الامتثال التام مع أحدث اللوائح والأنظمة في دولة الإمارات العربية المتحدة.",
    },
    benefits: {
      en: ["Direct access to licensed UAE advisors", "Proactive mitigation of corporate liability", "Comprehensive analysis of local legal standing"],
      ar: ["قنوات تواصل مباشرة مع مستشارين مرخصين بالدولة", "الحد الاستباقي من المسؤولية القانونية للمؤسسات", "دراسة تحليلية شاملة للموقف القانوني لشركتكم"],
    },
    faqs: [
      {
        q: { en: "How are consultation fees calculated?", ar: "كيف يتم احتساب الرسوم الاستشارية؟" },
        a: { en: "Fees are charged per session based on case complexity and the depth of documentation review required.", ar: "يتم احتساب الرسوم لكل جلسة بناءً على مدى تعقيد المسألة وعمق دراسة المستندات المطلوبة." }
      }
    ]
  },
  {
    id: "debt-collection",
    icon: Layers,
    title: { en: "Debt Collection & Recovery", ar: "تحصيل الديون واستردادها" },
    desc: {
      en: "Professional, ethical, and highly efficient corporate debt recovery.",
      ar: "استرداد مستحقات وديون الشركات بشكل مهني وفعال وفق أعلى المعايير القانونية والأخلاقية.",
    },
    details: {
      en: "We utilize advanced negotiation techniques and dynamic legal pressure points to recover outstanding receivables without breaking valuable corporate relationships. Licensed and highly successful across UAE territories.",
      ar: "نعتمد على تقنيات التفاوض المتقدمة والوسائل القانونية المنظمة لضمان استرداد ديونكم ومستحقاتكم المالية المتأخرة مع الحفاظ على استمرارية علاقاتكم التجارية. خدماتنا مرخصة بالكامل وذات نسب نجاح قياسية.",
    },
    benefits: {
      en: ["No-recovery, no-advocate-fee options", "Full legal escalation pathways", "Transparent online collection updates"],
      ar: ["خيارات تحصيل مرنة دون أتعاب مسبقة", "إجراءات وتصعيد قانوني متكامل ومنظم", "تقارير وتحديثات رقمية شفافة لمتابعة حالة التحصيل"],
    },
    faqs: [
      {
        q: { en: "What is the average time for debt recovery?", ar: "ما هو متوسط الوقت المستغرق لاسترداد الديون؟" },
        a: { en: "Corporate recoveries typically take between 30 to 90 days depending on debtor liquidity and standing.", ar: "تتراوح مدة التسويات المالية للشركات عادةً بين 30 إلى 90 يوماً بناءً على الملاءة المالية للمدين واستجابته." }
      }
    ]
  },
  {
    id: "business-consultancy",
    icon: Briefcase,
    title: { en: "Business Consultancy", ar: "الاستشارات التجارية وتأسيس الشركات" },
    desc: {
      en: "Operational audit, commercial optimization, and expansion planning.",
      ar: "التدقيق التشغيلي، وتحسين الكفاءة التجارية، ورسم استراتيجيات التوسع المؤسسي.",
    },
    details: {
      en: "From market entry analysis to process optimizations and financial roadmaps, we support businesses looking to scale in Dubai and globally. Our multi-disciplinary experts align legal safety with commercial agility.",
      ar: "من دراسة دخول السوق المحلي إلى تحسين كفاءة العمليات التشغيلية وتطوير الخطط المالية، نساعد الشركات على النمو والازدهار في سوق دبي والإمارات. ندمج بين أمان المعاملات القانونية والمرونة التشغيلية للأعمال.",
    },
    benefits: {
      en: ["Strategic market entry reports", "Process efficiency audits", "Corporate growth mapping"],
      ar: ["تقارير ودراسات استباقية لدخول السوق وتحديد الفرص", "تدقيق شامل لكفاءة العمليات التشغيلية للمنشأة", "رسم خرائط نمو الشركات والأعمال"],
    },
    faqs: [
      {
        q: { en: "Do you assist with international scale-up?", ar: "هل تقدمون الدعم لخطط التوسع الدولي؟" },
        a: { en: "Yes, we construct joint-venture agreements and regulatory structures to facilitate cross-border setups.", ar: "نعم، نقوم بصياغة وتطوير اتفاقيات المشاريع المشتركة والهياكل التشغيلية والتنظيمية لتسهيل عمليات التأسيس عابر الحدود." }
      }
    ]
  },
  {
    id: "contract-review",
    icon: FileText,
    title: { en: "Contract Drafting & Review", ar: "صياغة ومراجعة العقود والاتفاقيات" },
    desc: {
      en: "Drafting solid agreements designed to mitigate corporate exposure.",
      ar: "صياغة اتفاقيات متينة ومحكمة ومصممة لتقليل المخاطر وتفادي الثغرات القانونية.",
    },
    details: {
      en: "We design robust non-disclosure agreements (NDAs), joint venture structures, employment contracts, partnership contracts, and vendor agreements, ensuring you are fully protected in every transaction.",
      ar: "نقوم بإعداد وصياغة عقود عدم الإفشاء (NDAs)، وعقود المشاريع المشتركة، واتفاقيات الشركاء والموردين، وعقود العمل والتوظيف، لضمان أعلى مستويات الحماية والموثوقية لشركتكم في كافة معاملاتاتها التجارية.",
    },
    benefits: {
      en: ["Protection of intellectual property", "Elimination of loophole exposures", "Fast draft turnaround times"],
      ar: ["حماية كاملة للملكية الفكرية والأسرار التجارية", "سد كافة الثغرات وتفادي مواطن الخلل في الصياغة", "سرعة وكفاءة عالية في إعداد ومراجعة مسودات العقود"],
    },
    faqs: [
      {
        q: { en: "What contracts do you review?", ar: "ما هي العقود التي تقومون بمراجعتها؟" },
        a: { en: "We review commercial sales, employment agreements, lease contracts, and shareholder agreements.", ar: "نراجع عقود التأسيس والمبيعات التجارية، اتفاقيات العمل، عقود الإيجار والاستثمار، واتفاقيات المساهمين والشركاء." }
      }
    ]
  },
  {
    id: "commercial-brokerage",
    icon: Handshake,
    title: { en: "Commercial Brokerage", ar: "الوساطة التجارية" },
    desc: {
      en: "Connecting strategic corporate investors with vetted business assets.",
      ar: "ربط مستثمري الشركات بالأصول والفرص الاستثمارية الخاضعة للتدقيق.",
    },
    details: {
      en: "We facilitate commercial matchmaking, joint ventures, and asset transactions. Our team provides the structural due diligence necessary to close secure and highly profitable corporate deals in Dubai.",
      ar: "نعمل على التوفيق التجاري وتسهيل عمليات الشراكةصفقات الأصول التجارية. يقدم فريقنا خدمات العناية الواجبة والتدقيق لضمان إبرام صفقات مؤسسية آمنة وعالية الربحية في إمارة دبي وبقية مناطق الدولة.",
    },
    benefits: {
      en: ["Vetted commercial investments pipeline", "Safe transaction escrow coordination", "Comprehensive company audit access"],
      ar: ["قنوات استثمارية وأصول تجارية خاضعة للتدقيق الشامل", "تنسيق آمن للمعاملات وحسابات الضمان المالي", "الوصول لتقارير العناية الواجبة والتقييم للشركات"],
    },
    faqs: [
      {
        q: { en: "What sectors do you broker?", ar: "ما هي القطاعات التي تقومون بالوساطة فيها؟" },
        a: { en: "We specialize in logistics assets, industrial sectors, and digital tech firms.", ar: "نتخصص بشكل رئيسي في أصول الخدمات اللوجستية، القطاعات الصناعية، وشركات التكنولوجيا والخدمات الرقمية." }
      }
    ]
  },
  {
    id: "business-setup",
    icon: Building,
    title: { en: "Business Setup Services", ar: "خدمات تأسيس الشركات" },
    desc: {
      en: "End-to-end mainland, freezone, and offshore company formation.",
      ar: "حلول متكاملة لتأسيس الشركات في البر الرئيسي والمناطق الحرة وخارج الحدود بالدولة.",
    },
    details: {
      en: "We handle corporate structuring, trade license procurement, local sponsor arrangements, and corporate bank account introduction. We make starting a business in the UAE seamless and transparent.",
      ar: "نتولى كافة إجراءات الهيكلة المؤسسية، وإصدار التراخيص التجارية، وصياغة عقود التأسيس وتعيين وكيل الخدمات أو الشريك المحلي، بالإضافة إلى تسهيل فتح الحسابات البنكية لجعل تأسيس الأعمال سلساً وشفافاً.",
    },
    benefits: {
      en: ["Complete DET and freezone coordination", "Secure banking introductory paths", "Golden Visa integration support"],
      ar: ["تنسيق مباشر وسريع مع المناطق الحرة ودائرة الاقتصاد", "تسهيل فتح الحسابات المصرفية لدى البنوك المحلية", "دعم ودمج إجراءات الإقامة الذهبية للمستثمرين والمؤسسين"],
    },
    faqs: [
      {
        q: { en: "Which freezone is best for my company?", ar: "أي منطقة حرة هي الأنسب لشركتي؟" },
        a: { en: "We evaluate your business activity, target market, and budget to recommend the optimal freezone structure.", ar: "نقوم بدراسة نشاط الشركة المستهدف والميزانية المقترحة لتحديد واختيار هيكل المنطقة الحرة الأنسب والأكثر كفاءة." }
      }
    ]
  },
  {
    id: "marketing-pr",
    icon: Megaphone,
    title: { en: "Marketing & PR Consultancy", ar: "استشارات التسويق والعلاقات العامة" },
    desc: {
      en: "Brand positioning and legal-compliant public relations counseling.",
      ar: "تموضع العلامة التجارية وتطوير استراتيجيات الاتصال المتوافقة مع اللوائح والأنظمة.",
    },
    details: {
      en: "Align your communications with UAE's advertising guidelines. We provide branding advice, market campaigns setup, and crisis communication management to preserve your enterprise reputation.",
      ar: "نعمل على مواءمة اتصالاتكم وحملاتكم التسويقية مع الضوابط والإرشادات الإعلانية السارية بالدولة، وتوفير استشارات الهوية وحملات العلاقات العامة وإدارة سمعة المنشأة للوقاية من أية غرامات تنظيمية.",
    },
    benefits: {
      en: ["Legal-compliant communications strategies", "Corporate branding audits", "Crisis PR management structures"],
      ar: ["استراتيجيات اتصال متوافقة تماماً مع القوانين الإعلانية", "تقييم وتدقيق شامل لسمعة وهوية العلامة التجارية", "أطر وإجراءات متكاملة لإدارة الأزمات الإعلامية"],
    },
    faqs: [
      {
        q: { en: "Why is legal compliance important in PR?", ar: "لماذا يعد الامتثال القانوني مهمًا في العلاقات العامة؟" },
        a: { en: "The UAE has strict media and advertising guidelines; we ensure your promotions never incur regulatory fines.", ar: "تطبق دولة الإمارات ضوابط صارمة على المحتوى الإعلامي والإعلاني؛ ونحن نضمن ألا تسبب حملاتكم أية مخالفات أو غرامات." }
      }
    ]
  },
  {
    id: "logistics-consultancy",
    icon: Truck,
    title: { en: "Logistics Consultancy", ar: "استشارات الخدمات اللوجستية" },
    desc: {
      en: "Supply chain mapping and customs regulations advisory.",
      ar: "تخطيط سلاسل الإمداد والاستشارات الخاصة باللوائح والجمارك للواردات والصادرات.",
    },
    details: {
      en: "Optimizing supply chain channels across GCC borders. We evaluate logistics contracts, verify shipping liability frameworks, and guide you through UAE import/export custom compliance guidelines.",
      ar: "تحسين قنوات التوزيع وسلاسل الإمداد عبر حدود دول مجلس التعاون الخليجي، وتدقيق عقود الشحن والخدمات اللوجستية وتحديد أطر المسؤولية والتخليص الجمركي وفق الأنظمة المعمول بها.",
    },
    benefits: {
      en: ["GCC customs clearance guidance", "Shipping liability risk assessment", "Supply chain bottleneck audits"],
      ar: ["إرشادات وحلول التخليص الجمركي في دول الخليج", "تقييم مخاطر المسؤولية والتأمين على الشحن والتخزين", "تحليل وحل اختناقات قنوات سلاسل التوريد والإمداد"],
    },
    faqs: [
      {
        q: { en: "Do you broker logistics leases?", ar: "هل تقومون بالوساطة في عقود الإيجار اللوجستية؟" },
        a: { en: "Yes, we coordinate warehouse leases and storage contracts via our commercial brokerage arm.", ar: "نعم، نقوم بتنسيق عقود إيجار المستودعات ومرافق التخزين من خلال ذراع الوساطة التجارية التابع للمنشأة." }
      }
    ]
  },
  {
    id: "immigration",
    icon: FileCheck,
    title: { en: "Immigration Consultancy", ar: "خدمات تأشيرات الإقامة والهجرة" },
    desc: {
      en: "Golden Visa, corporate work permits, and investor residency support.",
      ar: "الإقامة الذهبية، تصاريح العمل للمؤسسات، ودعم إقامة المستثمرين والشركاء.",
    },
    details: {
      en: "Comprehensive immigration planning for investors, executives, and high-net-worth individuals. We guide you through corporate work permit allocations and Golden Visa compliance standards.",
      ar: "تخطيط شامل لإجراءات الإقامة وتأشيرات المستثمرين والمديرين التنفيذيين والأفراد ذوي الملاءة المالية العالية بالدولة، وتسهيل إصدار تصاريح العمل وتلبية معايير الإقامة الذهبية.",
    },
    benefits: {
      en: ["Golden Visa eligibility assessment", "Corporate executive work visas processing", "Dependent visa coordination support"],
      ar: ["تقييم الأهلية للحصول على فئات الإقامة الذهبية", "سرعة إنجاز تأشيرات العمل للكوادر الإدارية والتنفيذية", "دعم متكامل لإصدار تأشيرات أفراد الأسرة والمكفولين"],
    },
    faqs: [
      {
        q: { en: "What is the timeline for a Golden Visa?", ar: "ما هو الوقت المستغرق للحصول على الإقامة الذهبية؟" },
        a: { en: "Once all parameters are validated, approval typically takes between 7 to 15 business days.", ar: "بمجرد التحقق واستيفاء كافة المعايير المطلوبة، تستغرق الموافقة والإصدار عادةً ما بين 7 إلى 15 يوم عمل." }
      }
    ]
  },
  {
    id: "tax-return",
    icon: Percent,
    title: { en: "Tax Return Preparation", ar: "إعداد الإقرارات والامتثال الضريبي" },
    desc: {
      en: "VAT compliance, corporate tax filing, and auditing support.",
      ar: "الامتثال لضريبة الشركات وضريبة القيمة المضافة ودعم التدقيق المالي.",
    },
    details: {
      en: "With corporate tax now active in the UAE, our experts verify accounting structures, file periodic VAT reports, and establish compliant bookkeeping standards to prevent heavy administrative fines.",
      ar: "مع سريان ضريبة الشركات في دولة الإمارات، يدعم خبراؤنا تهيئة الهياكل المحاسبية وإعداد وتقديم إقرارات ضريبة القيمة المضافة وضريبة الشركات لتجنب أية غرامات أو مخالفات إدارية من الهيئة الاتحادية للضرائب.",
    },
    benefits: {
      en: ["Corporate Tax ready auditing check", "VAT returns filing accuracy", "Prevention of administrative tax fines"],
      ar: ["تهيئة وتدقيق الحسابات للتوافق مع ضريبة الشركات", "دقة متناهية في تقديم إقرارات ضريبة القيمة المضافة", "تفادي الغرامات والمخالفات الإدارية الضريبية بالكامل"],
    },
    faqs: [
      {
        q: { en: "When must I register for Corporate Tax?", ar: "متى يجب علي التسجيل لضريبة الشركات? " },
        a: { en: "All taxable persons must register within the deadlines set by the FTA based on license issue dates.", ar: "يجب على الخاضعين للضريبة التسجيل ضمن المواعيد المحددة من الهيئة الاتحادية للضرائب بناءً على تاريخ إصدار الرخصة التجارية." }
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
