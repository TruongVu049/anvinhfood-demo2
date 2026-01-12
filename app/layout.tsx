import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: " MeU - Building Materials",
  description:
    "Chuyên cung cấp vật liệu xây dựng chất lượng cao: Xi măng, gạch, ngói, sơn, thiết bị điện, công cụ xây dựng. Giá tốt nhất thị trường, giao hàng nhanh.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/Logo-MeU.png" },
      { url: "/Logo-MeU.png", sizes: "16x16", type: "image/png" },
      { url: "/Logo-MeU.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon.png" },
      { rel: "android-chrome-512x512", url: "/favicon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
