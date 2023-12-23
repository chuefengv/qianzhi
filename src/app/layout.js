import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

export const metadata = {
  title: 'Qianzhi Shen',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
