import type { Metadata } from "next";
import { Inter, Poppins, Syne } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--syne",
});

const poppins = Poppins({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});


export const metadata: Metadata = {
  title: "MindLeap",
  description: "A TailwindCSS playground",
  icons: {
    icon: '/assets/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${syne.variable}`}>{children}</body>
    </html>
  );
}
