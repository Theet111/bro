import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Commonstage — Find artists for your next event",
  description: "Discover musicians, DJs, performers, and creative talent for memorable events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
