import Link from "next/link";
import { BrandMark } from "./icons";

export function SiteFooter() {
  return <footer className="site-footer container"><div><Link className="wordmark" href="/"><BrandMark /> commonstage<span className="wordmark-period">.</span></Link><p>Good people. Great moments.</p></div><div className="footer-links"><Link href="/artists">Explore artists</Link><Link href="/how-it-works">How it works</Link><Link href="/for-artists">For artists</Link><Link href="/saved">Saved</Link><Link href="/requests">My requests</Link></div><div className="footer-bottom"><span>© 2026 Commonstage. A concept demo.</span><span>Made for moments that matter.</span></div></footer>;
}
