import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpit Ranjan - Portfolio",
  description: "Personal portfolio of Arpit Ranjan - Digital Experience Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
