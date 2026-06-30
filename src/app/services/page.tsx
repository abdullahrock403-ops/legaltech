"use client";

import React from "react";
import Services from "@/components/Services";
import PageWrapper from "@/components/PageWrapper";

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <Services preview={false} />
      </div>
    </PageWrapper>
  );
}
