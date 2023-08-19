import NextAuthSesssionProvider from '@/providers/SesssionProvider';
import QueryProvider from '@/providers/QueryProvider';
import './globals.css'
import { Inter } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';

// This component also contains tidio installation and aos initiallisation


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avestock Trades',
  description: 'Trade with us for full financial security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthSesssionProvider>
        <QueryProvider>
          {children}

        </QueryProvider>
      </NextAuthSesssionProvider>
      </body>
      <script src="//code.tidio.co/xmkv5uj01vnyzvbec65ti8tmhdaoylfc.js" async></script>
    </html>
  )
}
