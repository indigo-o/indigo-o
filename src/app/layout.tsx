import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "indigo-o",
  description: "Indigo's personal website!",
  keywords: 'indigo,indigo-o,personal website,personal homepage',
  authors: [{name: "Indigo", url: ""}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
