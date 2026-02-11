import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rang & Mall",
  description: "Rang & Mall is a collection of companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
