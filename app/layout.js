import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata = {
  title: "TaxVibe Advisory | Tax Planning & Financial Services",
   description:
    "TaxVibe Advisory provides expert tax planning, GST filing, income tax return services, business registration, and financial consulting to help individuals and businesses stay compliant and grow financially.",
  icons: {
    icon: [{ url: "/mainlogo1.png", type: "image/webp" }],
  },
};

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
