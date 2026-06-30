"use client";

import React from "react";
import Contact from "@/components/Contact";
import PageWrapper from "@/components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <Contact />
      </div>
    </PageWrapper>
  );
}
