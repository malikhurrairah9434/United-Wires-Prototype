import type { Metadata } from "next"
import { Dosis } from "next/font/google"
import "./globals.css"

// Load the Dosis font
const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis", // creates a CSS variable
  weight: ["300", "400", "500", "600", "700", "800"], // pick the weights you need
})

export const metadata: Metadata = {
  title: "BRCD Construction | Modern Engineering Solutions",
  description:
    "Turnkey construction and renovation services in Kyiv and the region",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dosis.variable}>
      <body>{children}</body>
    </html>
  )
}
