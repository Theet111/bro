import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commonstage — Find artists for your next event",
  description: "Discover musicians, DJs, performers, and creative talent for memorable events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
