<<<<<<< HEAD
<<<<<<< HEAD
import { Poppins } from "next/font/google";
=======
import { Inter } from "next/font/google";
>>>>>>> parent of 0cee53e (header ui)
import "./globals.css";

<<<<<<< HEAD
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
=======
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
>>>>>>> parent of 11e6572 (Merge pull request #6 from kyle41io/features/Header)
=======
const inter = Inter({ subsets: ["latin"] });
>>>>>>> parent of 0cee53e (header ui)

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
