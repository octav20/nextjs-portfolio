import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Octavio Guerrero',
  description: 'Portfolio Octavio Guerrero',

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
