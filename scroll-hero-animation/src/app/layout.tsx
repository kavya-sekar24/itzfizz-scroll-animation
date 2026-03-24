import type { Metadata } from 'next';
import { Inter, Syncopate } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syncopate = Syncopate({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-syncopate' });

export const metadata: Metadata = {
  title: 'Itz Fizz | Advanced Web Motion',
  description: 'A premium scroll-driven hero animation experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syncopate.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
