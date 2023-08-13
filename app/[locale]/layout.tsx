import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudhijan Pathagar",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
