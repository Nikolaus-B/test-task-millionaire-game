import "@/styles/base/index.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { RootProvider } from "@/providers/RootProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Millionaire Game",
  description: "Frontend test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
