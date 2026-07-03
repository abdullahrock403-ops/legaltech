"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-navy-900 relative">
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
              {t("contact_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("contact_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-navy-950/40 p-8 sm:p-12 rounded-3xl border border-slate-100 dark:border-gold-500/10 flex flex-col justify-between"
          >
            <form onSubmit={handleSend} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                  {t("booking_name")}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/10 bg-white dark:bg-navy-900 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                  {t("booking_email")}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/10 bg-white dark:bg-navy-900 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/10 bg-white dark:bg-navy-900 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/10 bg-white dark:bg-navy-900 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-full text-sm font-bold uppercase gold-gradient-bg text-navy-900 shadow-lg hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>{sent ? "Message Sent!" : t("contact_send_msg")}</span>
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Details & Embedded Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-8"
          >
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-gold-500/10 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Suite Address
                  </h4>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white leading-relaxed">
                    {t("contact_office_address")}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-gold-500/10 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Telephone
                  </h4>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white leading-relaxed">
                    {t("contact_phone")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-gold-500/10 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Corporate Email
                  </h4>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white leading-relaxed">
                    {t("contact_email")}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-gold-500/10 flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Business Hours
                  </h4>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white leading-relaxed">
                    {t("contact_hours")}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-64 sm:h-80 w-full rounded-3xl overflow-hidden border border-slate-100 dark:border-gold-500/10 shadow-lg relative">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=SPC%20Free%20Zone,%20Sharjah&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale dark:invert"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-success text-white shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
      </div>
    </section>
  );
}
