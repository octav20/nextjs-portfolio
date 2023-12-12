import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Octavio Guerrero',
  description: 'Portfolio Octavio Guerrero',
  icons: {
    icon: "/favicon.png",
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
