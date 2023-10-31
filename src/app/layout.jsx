import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ weight: ['400', '500', '700'],subsets: ["latin"] });

export const metadata = {
  title: "Music Is Life",
  description: "Enjoy sharing your taste",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
