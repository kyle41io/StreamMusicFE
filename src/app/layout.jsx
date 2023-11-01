
import { Poppins } from "next/font/google";

import "./../styles/globals.css";
import Header from "@/components/shared/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dolphin Music Stream",
  description: "Enjoy sharing your taste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
