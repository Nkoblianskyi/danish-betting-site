import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DK BEDSTE BETTING SIDER",
  description:
    "Find de bedste betting sider i Danmark med eksklusive bonusser, vurderinger og anmeldelser. Alle bookmakere har dansk licens.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="da">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('/b66489f6c69c296718b7387a17902787.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="min-h-screen bg-black bg-opacity-40">{children}</div>
      </body>
    </html>
  )
}
