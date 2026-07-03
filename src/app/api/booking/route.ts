import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Forward the payload to Google Apps Script
    const response = await fetch("https://script.google.com/macros/s/AKfycbwvVp3seXyJUdtTMvf32WfL8wlmlbBW2cZwzWLspTo4VXx8VEbErAbZchIsgIodJ6Bd/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: response.status });
    }
  } catch (error: any) {
    console.error("Error proxying to Apps Script:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
