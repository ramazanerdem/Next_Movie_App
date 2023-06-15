import '@/styles/globals.css'
import { Inter } from '@next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZORTFLIX',
  description: 'Next generation movie app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <div className="relative">
          <div className="absolute -z-10 inset-0 bg-gradient-to-b from-black"></div>
          <Header />
        </div>
        <main className="flex-grow px-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
