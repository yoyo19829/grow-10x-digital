const DEFAULT_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxdl3oAYq7RQtpHrtBwKvqcBObLAAnV3KfnST3BNuZ9ooq7YVu7b37GCjgvQMd68NEs/exec";

const WEBHOOK_URL =
  (import.meta.env["VITE_GOOGLE_SHEETS_WEBHOOK_URL"] as string | undefined) ||
  DEFAULT_WEBHOOK_URL;

export async function submitLead(data: {
  name: string;
  company: string;
  email: string;
  mobile: string;
  city: string;
}) {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        name: data.name,
        company: data.company,
        email: data.email,
        mobile: data.mobile,
        city: data.city,
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      console.error("Google Sheets error:", response.status);
      return {
        ok: false,
        error: "Unable to submit your details. Please try again.",
      };
    }

    return {
      ok: true,
    };
  } catch (err) {
    console.error("Lead submission error:", err);

    return {
      ok: false,
      error: "Network error. Please try again or call us directly.",
    };
  }
}
