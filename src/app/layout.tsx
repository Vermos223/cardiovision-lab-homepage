import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CardioVisionLab",
  description: "CardioVisionLab is a medical technology company that provides a platform for remote monitoring of patients with cardiovascular diseases.",
  icons: {
    icon: "/images/navigation/cv2_square_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
