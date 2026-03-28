import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venix | حلول برمجية متكاملة وأنظمة ERP",
  description: "نساعد الشركات في مصر والخليج على النمو من خلال أنظمة ERP مخصصة، تصميم متاجر إلكترونية، وإدارة حملات إعلانية احترافية.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}