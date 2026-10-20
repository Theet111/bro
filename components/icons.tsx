export function Icon({ name, size = 18 }: { name: "search" | "arrow" | "pin" | "heart" | "close" | "menu" | "check" | "calendar"; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };
  if (name === "search") return <svg {...p}><circle cx="10.8" cy="10.8" r="6.7" /><path d="m16 16 4.3 4.3" /></svg>;
  if (name === "arrow") return <svg {...p}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>;
  if (name === "pin") return <svg {...p}><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.3" /></svg>;
  if (name === "heart") return <svg {...p}><path d="M20.3 8.5c0 4.5-8.3 10-8.3 10s-8.3-5.5-8.3-10a4.6 4.6 0 0 1 8.3-2.7 4.6 4.6 0 0 1 8.3 2.7Z" /></svg>;
  if (name === "close") return <svg {...p}><path d="M5 5 19 19M19 5 5 19" /></svg>;
  if (name === "menu") return <svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "calendar") return <svg {...p}><rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4m10-4v4M3 10h18" /></svg>;
  return <svg {...p}><path d="m5 12 4 4L19 6" /></svg>;
}

export function BrandMark({ size = 27 }: { size?: number }) {
  return <svg className="brand-svg" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 5v38M5 24h38M10.56 10.56l26.88 26.88m0-26.88L10.56 37.44" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/><circle cx="24" cy="24" r="5" fill="var(--paper, #fffefa)" stroke="currentColor" strokeWidth="2.3"/></svg>;
}
