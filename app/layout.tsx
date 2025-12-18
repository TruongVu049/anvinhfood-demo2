import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "Frost - Thực Phẩm Đông Lạnh Cao Cấp | Tươi & Ngon",
  description:
    "Website bán thực phẩm đông lạnh cao cấp - Hải sản tươi sống, thịt nhập khẩu, combo tiết kiệm. Giao hàng siêu tốc 2h, đảm bảo chất lượng.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
