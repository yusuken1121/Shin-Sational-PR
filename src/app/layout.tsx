import type { Metadata } from "next";
import { Roboto, Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

// デフォルト
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  subsets: ["latin"], // 必要に応じて他のサブセットも追加
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"], // 必要なウェイトを指定
});

// 候補2
// const lato = Lato({
//   subsets: ["latin"],
//   variable: "--font-roboto",
//   weight: ["100", "300", "400", "700", "900"],
// });

export const metadata: Metadata = {
  title: "Update in 5 Seconds! Restaurant Websites with Notion - Shin-Sational",
  description:
    "Website updates got you down?  Notion + Shin-Sational =  Instant updates to your menu, ordering, and more!  Multilingual?  We got you.  Try it free, seriously!",
  icons: "/Logo/shin-sational_logo_small.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            duration: 5000,
          }}
        />
      </body>
    </html>
  );
}
