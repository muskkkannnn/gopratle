// @ts-nocheck
import "./globals.css"

export const metadata = {
  title: "GoPratle",
  description: "Post your event requirements.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e0e0e0]">{children}</body>
    </html>
  )
}
