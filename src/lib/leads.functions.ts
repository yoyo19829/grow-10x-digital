import { createServerFn } from "@tanstack/react-start";

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name: string;
      company: string;
      email: string;
      mobile: string;
      city: string;
    }) => {
      if (!data.name || !data.email || !data.mobile)
        throw new Error("Missing required fields");
      return data;
    },
  )
  .handler(async ({ data }) => {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is not configured");
      return { ok: false, error: "Server not configured" };
    }
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: data.name,
          company: data.company,
          email: data.email,
          mobile: data.mobile,
          city: data.city,
        }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error(`Sheets webhook failed [${res.status}]: ${body}`);
        return { ok: false, error: "Failed to save" };
      }
      return { ok: true };
    } catch (err) {
      console.error(err);
      return { ok: false, error: "Network error" };
    }
  });
