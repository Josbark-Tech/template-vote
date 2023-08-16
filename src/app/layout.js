import './globals.css'
// import { Inter } from 'next/font/google'


export const metadata = {
  title: 'The Gospel voice',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  )
}
