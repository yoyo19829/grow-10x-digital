import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-orange font-semibold mb-4">
            Let's talk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-deep leading-tight">
            Ready to <span className="text-gradient-orange">grow 10x?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your brand. We'll get back within 24 hours with an honest,
            no-fluff plan for the next 90 days.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow icon={MapPin} title="Ahmedabad Office">
              4th Floor, C Wing, Krish Cubical, Thaltej, Ahmedabad
            </ContactRow>
            <ContactRow icon={MapPin} title="Indore Office">
              4th Floor, Mangal City, Vijay Nagar, Indore
            </ContactRow>
            <ContactRow icon={Mail} title="Email us">
              info@bedifly.com
            </ContactRow>
            <ContactRow icon={Phone} title="Call us">
              +91 97524 73349
            </ContactRow>
          </div>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (submitting) return;
            setSubmitting(true);
            const form = e.currentTarget;
            const fd = new FormData(form);
            const { submitLead } = await import("@/lib/leads-webhook");
            const res = await submitLead({
              name: String(fd.get("name") ?? ""),
              company: String(fd.get("company") ?? ""),
              email: String(fd.get("email") ?? ""),
              mobile: String(fd.get("mobile") ?? ""),
              city: String(fd.get("city") ?? ""),
            });
            setSubmitting(false);
            if (res.ok) {
              setSent(true);
              toast.success("Thank you! Your details have been submitted.");
              form.reset();
            } else {
              toast.error(res.error ?? "Something went wrong. Please try again or call us directly.");
            }
          }}
          className="glass rounded-3xl p-8 md:p-10 shadow-navy space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" placeholder="Ridhima Shah" required />
            <Field label="Company" name="company" placeholder="Luméa Skincare" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Mobile number" name="mobile" type="tel" placeholder="+91 98765 43210" required />
            <Field label="City" name="city" placeholder="Ahmedabad" />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@brand.com" required />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-navy-deep hover:bg-navy text-primary-foreground rounded-full px-6 py-4 font-semibold shadow-navy hover:shadow-glow transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {sent ? "Thanks — we'll be in touch ✨" : submitting ? "Sending…" : (<>Send message <ArrowRight className="h-4 w-4" /></>)}
          </button>
          <a
            href="tel:+919752473349"
            className="w-full bg-orange-gradient text-white rounded-full px-6 py-4 font-semibold shadow-glow hover:opacity-95 transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="h-4 w-4" /> Call now: +91 97524 73349
          </a>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted by Bedifly. We never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-2xl bg-orange-gradient text-white grid place-items-center shrink-0 shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-navy-deep">{title}</div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-navy-deep mb-2 uppercase tracking-wider"
      >
        {label}{required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange transition"
      />
    </div>
  );
}