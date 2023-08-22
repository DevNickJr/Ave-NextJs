import NextAuthSesssionProvider from '@/providers/SesssionProvider';
import QueryProvider from '@/providers/QueryProvider';
import { TranslationProvider } from '@/providers/TranslationProvider';
import './globals.css'
// import { Inter } from 'next/font/google'
// This component also contains tidio installation and aos initiallisation


// const inter = Inter({ subsets: ['latin'] })

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
      <body>
      <NextAuthSesssionProvider>
        <QueryProvider>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </QueryProvider>
      </NextAuthSesssionProvider>
      </body>
      <script src="//code.tidio.co/xmkv5uj01vnyzvbec65ti8tmhdaoylfc.js" async></script>
    </html>
  )
}
