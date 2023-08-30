import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from './Context/AuthProvider'
import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextAuth Tutorial',
  description: 'Learn NextAuth.js by Talha Jazzy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className='flex justify-center items-start p-6 min-h-screen'>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
