"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarRange, Sparkles, Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const timeSlots = {
  AM: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  Midday: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
  PM: ["03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"],
};

// Simulated previously booked times for realism
const bookedTimes = ["09:30 AM", "11:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"];

export default function Booking() {
  const { t, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "legal",
    date: "",
    time: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isTimeLoading, setIsTimeLoading] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, date: val, time: "" });
    if (val) {
      setIsTimeLoading(true);
      setTimeout(() => {
        setIsTimeLoading(false);
      }, 800);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) return;
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "legal",
        date: "",
        time: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      {/* Decorative design elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-navy-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4.5 h-4.5" />
              <span>Premium Scheduling</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 dark:text-white">
              {t("booking_title")}
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed">
              {t("booking_subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Booking Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-navy-900 border border-slate-100 dark:border-gold-500/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                      {t("booking_name")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                      {t("booking_email")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. business@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                      {t("booking_phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                      {t("booking_type")}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      <option value="legal">{t("booking_type_legal")}</option>
                      <option value="debt">{t("booking_type_debt")}</option>
                      <option value="corporate">{t("booking_type_corporate")}</option>
                      <option value="contract">{t("booking_type_contract")}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Date selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                      {t("booking_date")} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleDateChange}
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  {/* Time Slot Grid */}
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-navy-900 dark:text-slate-300 block">
                      {t("booking_time")} *
                    </label>

                    {!formData.date && (
                      <p className="text-sm text-slate-400 italic">
                        {isRtl ? "يرجى تحديد التاريخ لعرض الأوقات المتاحة." : "Please select a date to view available time slots."}
                      </p>
                    )}

                    {formData.date && isTimeLoading && (
                      <div className="space-y-6 animate-pulse">
                        {Object.keys(timeSlots).map((period) => (
                          <div key={period} className="space-y-2">
                            <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-16" />
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                              {[1, 2, 3, 4, 5, 6].map((idx) => (
                                <div key={idx} className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg" />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {formData.date && !isTimeLoading && (
                      <div className="space-y-6">
                        {(Object.keys(timeSlots) as Array<keyof typeof timeSlots>).map((period) => (
                          <div key={period} className="space-y-3">
                            <span className="text-xs font-black uppercase tracking-wider text-gold-500 dark:text-gold-400">
                              {period === "Midday" ? (isRtl ? "منتصف النهار" : "Midday") : period}
                            </span>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                              {timeSlots[period].map((slot) => {
                                const isBooked = bookedTimes.includes(slot);
                                const isSelected = formData.time === slot;

                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    disabled={isBooked}
                                    onClick={() => setFormData({ ...formData, time: slot })}
                                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-300 border ${
                                      isBooked
                                        ? "line-through opacity-40 cursor-not-allowed border-slate-200 dark:border-slate-800 text-slate-400 bg-slate-100 dark:bg-navy-950/40"
                                        : isSelected
                                          ? "gold-gradient-bg text-navy-900 border-gold-500 shadow-md shadow-gold-500/20 scale-[1.02]"
                                          : "bg-slate-50 dark:bg-navy-950 border-slate-200 dark:border-gold-500/10 text-navy-900 dark:text-slate-300 hover:border-gold-500 hover:scale-[1.02]"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy-900 dark:text-slate-300">
                    {t("booking_msg")}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-gold-500/20 bg-slate-50 dark:bg-navy-950 text-navy-900 dark:text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {/* Fee Disclaimer Note */}
                <div className="bg-slate-50 dark:bg-navy-950 p-5 rounded-2xl border border-slate-100 dark:border-gold-500/10">
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    * {t("booking_note")}
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading || !formData.time || !formData.date}
                  className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4.5 rounded-full text-base font-extrabold tracking-wide uppercase gold-gradient-bg text-navy-900 shadow-xl hover:shadow-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CalendarRange className="w-5 h-5" />
                  <span>{loading ? "Processing..." : t("booking_submit")}</span>
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="text-center py-12 space-y-6"
              >
                {/* Micro-interaction path-drawn checkmark */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">
                  Appointment Request Received
                </h3>
                <p className="text-base text-slate-500 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-light">
                  {t("booking_success")}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-3 rounded-full text-sm font-bold border border-slate-200 dark:border-gold-500/20 text-navy-900 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-950 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Another Request</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 items-stretch">
          {/* Grid of contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch auto-rows-fr">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-lg flex items-start space-x-4 rtl:space-x-reverse h-full">
              <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Suite Address
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-900 leading-relaxed">
                  {t("contact_office_address")}
                </p>
              </div>
            </div>

            {/* Telephone */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-lg flex items-start space-x-4 rtl:space-x-reverse h-full">
              <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Telephone
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-900 leading-relaxed">
                  {t("contact_phone")}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-lg flex items-start space-x-4 rtl:space-x-reverse h-full">
              <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Corporate Email
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-900 leading-relaxed">
                  {t("contact_email")}
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-lg flex items-start space-x-4 rtl:space-x-reverse h-full">
              <div className="p-3 rounded-xl bg-navy-900 text-gold-500 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Business Hours
                </h4>
                <p className="text-xs sm:text-sm font-extrabold text-navy-900 leading-relaxed">
                  {t("contact_hours")}
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="min-h-[300px] lg:min-h-full h-full w-full rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg relative">
            <iframe
              title="Office Location Map"
              src="https://maps.google.com/maps?q=SPC%20Free%20Zone,%20Sharjah&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale dark:invert absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
