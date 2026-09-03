import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground/80 px-6 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <BrandLogo light />
            <p className="mt-5 max-w-sm text-white/60 text-sm leading-relaxed">
              Bedifly is a performance marketing agency helping ambitious founders grow 10x with
              paid ads, creative and SEO that compounds.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Company</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-orange transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Offices</div>
            <ul className="space-y-3 text-sm text-white/60">
              <li>Ahmedabad — 4th Floor, C Wing, Krish Cubical, Thaltej</li>
              <li>Indore — 4th Floor, Mangal City, Vijay Nagar</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Bedifly. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
