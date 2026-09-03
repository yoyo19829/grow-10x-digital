import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1fr] gap-8 lg:gap-10 items-center">
        {/* LEFT */}
        <div className="text-left">
          <div className="text-[11px] uppercase tracking-[0.18em] text-orange font-bold mb-3">
            Let's talk
          </div>

          <h2 className="text-4xl md:text-[46px] font-extrabold text-navy-deep leading-[1.05]">
            Ready to <span className="text-gradient-orange">grow 10x?</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            Tell us about your brand. We'll get back within 24 hours with an honest, no-fluff plan
            for the next 90 days.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-7 max-w-lg space-y-1">
            <ContactRow icon={MapPin} title="Ahmedabad Office">
              4th Floor, C Wing, Krish Cubical, Thaltej, Ahmedabad
            </ContactRow>

            <ContactRow icon={MapPin} title="Indore Office">
              4th Floor, Mangal City, Vijay Nagar, Indore
            </ContactRow>

            <ContactRow icon={Mail} title="Email">
              info@bedifly.com
            </ContactRow>

            <ContactRow icon={Phone} title="Phone">
              +91 97524 73349
            </ContactRow>
          </div>
        </div>

        {/* RIGHT — FORM */}
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
              toast.error(
                res.error ?? "Something went wrong. Please try again or call us directly.",
              );
            }
          }}
          className="glass rounded-[1.75rem] p-6 md:p-7 shadow-navy"
        >
          {/* FIELDS */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" placeholder="Ridhima Shah" required />

              <Field label="Company" name="company" placeholder="Luméa Skincare" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Mobile number"
                name="mobile"
                type="tel"
                placeholder="+91 98765 43210"
                required
              />

              <Field label="City" name="city" placeholder="Ahmedabad" />
            </div>

            <Field label="Email" name="email" type="email" placeholder="you@brand.com" required />
          </div>

          {/* BUTTONS */}
          <div className="mt-5 space-y-3">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-navy-deep hover:bg-navy text-white rounded-full px-6 py-3.5 text-sm font-semibold shadow-navy hover:shadow-glow transition-all inline-flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {sent ? (
                "Thanks — we'll be in touch ✨"
              ) : submitting ? (
                "Sending…"
              ) : (
                <>
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <a
              href="tel:+919752473349"
              className="w-full bg-orange-gradient text-white rounded-full px-6 py-3.5 text-sm font-semibold shadow-glow hover:opacity-95 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call now: +91 97524 73349
            </a>
          </div>

          <p className="mt-4 text-[11px] text-muted-foreground text-center">
            By submitting, you agree to be contacted by Bedifly. We never share your info.
          </p>
        </form>
      </div>
    </section>
  );
}

/* CONTACT ROW */
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
    <div className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-all duration-300 hover:bg-white/60">
      <div className="h-9 w-9 rounded-xl bg-orange-gradient text-white grid place-items-center shrink-0 shadow-glow">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </div>

      <div className="min-w-0">
        <div className="text-sm font-bold text-navy-deep leading-5">{title}</div>

        <div className="text-xs md:text-sm text-muted-foreground leading-5">{children}</div>
      </div>
    </div>
  );
}

/* FORM FIELD */
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
        className="block text-[10px] font-bold text-navy-deep mb-1.5 uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-white/70 px-4 py-2.5 text-sm text-navy-deep placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange transition"
      />
    </div>
  );
}
