import type { Metadata } from "next";
import TopButton from "./components/TopButton";
import "./globals.css";
import { Providers } from "./providers";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "YEJI PROTFOLIO",
  description: "Front-end Yeji's Portfolio",
  icons: {
    icon: "./favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={noto.className}>
        <Providers>
          {children}
          <TopButton />
        </Providers>
      </body>
    </html>
  );
}
