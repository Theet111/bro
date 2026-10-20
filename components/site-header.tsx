"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDemoData } from "../lib/demo-store";
import { BrandMark, Icon } from "./icons";

const navigation = [
  { href: "/artists", label: "Explore artists" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-artists", label: "For artists" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { favorites } = useDemoData();
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <>
    <div className="announcement"><span className="announcement-dot" /> A thoughtful way to find talent for your next event <span className="announcement-star">✳</span> <span className="demo-label">Interactive demo</span></div>
    <header className="site-header"><Link className="wordmark" href="/" onClick={close} aria-label="Commonstage home"><BrandMark /> commonstage<span className="wordmark-period">.</span></Link><nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}<Link className="mobile-extra" href="/saved" onClick={close}>Saved artists</Link><Link className="mobile-extra" href="/requests" onClick={close}>My requests</Link><Link className="nav-mobile-cta" href="/join" onClick={close}>Create a profile</Link></nav><div className="header-actions"><Link className="text-action" href="/saved" aria-label={`Saved artists, ${favorites.length}`}><Icon name="heart" size={17} /> Saved <span className="saved-count">{favorites.length}</span></Link><Link className="header-cta" href="/join">List your talent <Icon name="arrow" size={16} /></Link></div><button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={23} /></button></header>
  </>;
}
