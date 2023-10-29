import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import Navbar from './components/Navbar';

const ubuntuFont = Ubuntu({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'ReactGalaxy',
  description: 'Discover React"s Full Universe, React-Ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntuFont.className}>
        <Navbar />
        <main className='max-w-screen-xl m-auto px-5 flex min-h-screen w-full flex-col items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  )
};
