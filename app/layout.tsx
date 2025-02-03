import localFont from "next/font/local";
import { Poppins, Tilt_Warp, Shrikhand } from "next/font/google";
import "./globals.css";
import { BlurProvider } from './blur-provider';
import ShareButton from '@/components/ui/ShareButton';
import { BlurContent } from '@/components/ui/blur-content';
import { metadata } from './metadata';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tiltWarp = Tilt_Warp({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tilt-warp',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
  display: 'swap',
});

const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
  display: 'swap',
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiltWarp.variable} ${poppins.variable} ${shrikhand.variable} font-poppins antialiased min-h-screen bg-gradient-to-b from-white via-green-100 to-purple-100`}
      >
        <BlurProvider>
          {/* <ShareButton /> */}
          <BlurContent>
            {children}
          </BlurContent>
        </BlurProvider>
      </body>
    </html>
  );
}
