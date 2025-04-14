import "./globals.css"

export const metadata = {
  title: "XSOL Vastu Consultant",
  description: "Become a skilled XSOL Vastu Consultant and make a 6-figure income",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
