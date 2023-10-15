import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luciano Gimenez Desarrollador Full-Stack',
  description: 'Hola! ✋ Soy Luciano Giménez, un desarrollador Full Stack Web con base en Buenos Aires, Argentina.',
  openGraph: {
    title: 'Luciano Gimenez Full Stack Web - Portafolio ',
    description: 'Hola! ✋ Soy Luciano Giménez, un desarrollador Full Stack Web con base en Buenos Aires, Argentina.'
  },
  robots: { follow: true, index: true }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property='og:image' content='/src/assets/IMG_20220413_151800490(1)-min.jpg' />
        <meta property='og:image:alt' content='Fotografia de Luciano Gimenez mirando al frente' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
