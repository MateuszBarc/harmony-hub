import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HarmonyHUB',
  description: 'HarmonyHUB by Karol Kruczek and Mateusz Barć',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
