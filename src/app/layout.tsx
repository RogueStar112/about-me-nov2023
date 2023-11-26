import type { Metadata } from 'next'
import { Teko, Montserrat, Merriweather } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })
// const quicksand = Quicksand({ weight: ['500'], subsets: ['latin'] })
// const recursive = Recursive({ weight: ['500'], subsets: ['latin'] })

const montserrat = Montserrat({ weight: ['300', '500', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
export const merriweather = Merriweather({ weight: ['300', '400', '700'], style: ['normal', 'italic'], subsets: ['latin'] })
export const teko = Teko({ weight: ['300', '400', '700'], style: ['normal'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'About Me',
  description: 'About me page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${teko.className} max-w-3xl min-h-screen mx-auto bg-[#990011] text-[#FCF6F5]`}>{children}</body>
    </html>
  )
}
