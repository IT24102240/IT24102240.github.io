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
  title: "Kavindu Alwis",
  description: "Kavindu Alwis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Emoji favicon - mobile developer */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📱</text></svg>"
        />
        {/* EmailJS SDK - Add defer attribute and make sure it loads before your app code */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
