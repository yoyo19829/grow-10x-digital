export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="group flex items-center gap-1.5 pl-1 py-1 select-none">
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange" />
      </span>
      <span className="font-display text-2xl font-black tracking-tight flex items-center">
        <span className={light ? "text-white" : "text-navy-deep group-hover:text-orange transition-colors duration-300"}>
          Bedi
        </span>
        <span className="text-gradient-orange group-hover:scale-105 transition-transform duration-300 inline-block">
          fly
        </span>
        <span className="text-orange text-2xl font-black inline-block animate-bounce" style={{ animationDuration: "2s" }}>
          .
        </span>
      </span>
    </a>
  );
}