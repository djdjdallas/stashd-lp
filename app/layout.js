import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stash'd - Your Screenshot Chaos, Organized",
  description: "AI-powered app for content creators that organizes your screenshot inspiration. Find any idea in 3 seconds.",
  keywords: ["screenshots", "content creator", "AI", "organization", "YouTuber", "TikTok", "inspiration"],
  openGraph: {
    title: "Stash'd - Your Screenshot Chaos, Organized",
    description: "AI-powered app for content creators that organizes your screenshot inspiration.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
