import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "To track the expenses in smart way ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* {header} */}
          <Header></Header>
          {/* {main container} */}
          <main className="min-h-screen">{children}</main>
          {/* {footer} */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-grey-600">
              Made by Mangu Singh......
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
