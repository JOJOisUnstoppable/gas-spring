import './globals.css'
import type { Metadata } from 'next'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  title: 'DK Gas Spring Solutions',
  description: 'Professional Damper and Gas Spring Solutions for Global Manufacturing by DK',
  icons: {
    icon: '/DK_Logo_withoutBG.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {children}
    </html>
  )
}
