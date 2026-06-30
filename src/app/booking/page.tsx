"use client";

import React from "react";
import Booking from "@/components/Booking";
import PageWrapper from "@/components/PageWrapper";

export default function BookingPage() {
  return (
    <PageWrapper>
      <div className="pt-24">
        <Booking />
      </div>
    </PageWrapper>
  );
}
