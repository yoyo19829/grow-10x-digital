const WEBHOOK_URL = import.meta.env["VITE_GOOGLE_SHEETS_WEBHOOK_URL"] as string | undefined;

export async function submitLead(data: {
  name: string;
  company: string;
  email: string;
  mobile: string;
  city: string;
}) {
  if (!WEBHOOK_URL) {
    console.warn("VITE_GOOGLE_SHEETS_WEBHOOK_URL is not set.");
    return {
      ok: false,
      error:
        "Google Sheets Webhook URL is not configured. Please set VITE_GOOGLE_SHEETS_WEBHOOK_URL with your Google Apps Script URL.",
    };
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        name: data.name,
        company: data.company,
        email: data.email,
        mobile: data.mobile,
        city: data.city,
      }),
      redirect: "follow",
    });

    return { ok: true };
  } catch (err) {
    console.error("Lead submission error:", err);
    return { ok: false, error: "Network error. Please try again or call us directly." };
  }
}