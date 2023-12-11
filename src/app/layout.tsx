import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/landingpage/Footer'
import ContainerBox from '@/components/ui/ContainerBox'

const poppins = Poppins({ subsets: ['latin'], weight:["300","400","500","600","700"] })

export const metadata: Metadata = {
  title: 'Chartered Accountant Firm in mumbai - CA Neerav Shah & Co. Associates',
  description: 'Discover financial clarity with Neerav Shah & Associates, your reliable CA firm in Mumbai. From tax consulting to compliance management, our experienced team ensures your financial success through strategic solutions.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <ContainerBox>
        <Footer />
        </ContainerBox>
      </body>
    </html>
  )
}
