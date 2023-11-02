import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Music Is Life",
  description: "Enjoy sharing your taste",
};
const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "vi"];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
