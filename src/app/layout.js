import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export const metadata = {
  title: 'Qianzhi Shen',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <body className="layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
