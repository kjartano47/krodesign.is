import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
