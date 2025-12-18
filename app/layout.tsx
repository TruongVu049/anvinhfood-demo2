import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ AN VĨNH",
  description:
    "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ AN VĨNH - Chuyên cung cấp thực phẩm đông lạnh cao cấp: Hải sản tươi sống, thịt nhập khẩu, combo tiết kiệm. Giao hàng siêu tốc 2h, đảm bảo chất lượng.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
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
