import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import ThemeProvider from '@/app/providers/ThemeProvider';
import { Header } from '@/app/ui/components/shared/Header';
import './styles/globals.css';
import { Footer } from './ui/components/shared/Footer';

const onest = Onest({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
