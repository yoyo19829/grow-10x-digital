const WEBHOOK_URL = import.meta.env["VITE_GOOGLE_SHEETS_WEBHOOK_URL"] as string | undefined;

export async function submitLead(data: {
  name: string;
  company: string;
  email: string;
  mobile: string;
  city: string;
}) {
  if (!WEBHOOK_URL) {
    console.error("VITE_GOOGLE_SHEETS_WEBHOOK_URL is not configured");
    return {
      ok: false,
      error:
        "Google Sheets webhook URL is not configured. Set VITE_GOOGLE_SHEETS_WEBHOOK_URL before building.",
    };
  }

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        company: data.company,
        email: data.email,
        mobile: data.mobile,
        city: data.city,
      }),
      redirect: "follow",
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`Sheets webhook failed [${res.status}]: ${body}`);
      return { ok: false, error: "Failed to save. Please try again or call us directly." };
    }

    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false, error: "Network error. Please try again or call us directly." };
  }
}
