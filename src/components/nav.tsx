import { BrandLogo } from "./brand-logo";

export function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass w-full max-w-6xl rounded-full px-5 py-2.5 flex items-center justify-between shadow-soft">
        <BrandLogo />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#services" className="hover:text-orange transition">Services</a>
          <a href="#about" className="hover:text-orange transition">About</a>
          <a href="#brands" className="hover:text-orange transition">Clients</a>
          <a href="#reviews" className="hover:text-orange transition">Reviews</a>
          <a href="#contact" className="hover:text-orange transition">Contact</a>
        </div>
        <a
          href="#contact"
          className="bg-navy-deep text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-navy transition shadow-navy"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}