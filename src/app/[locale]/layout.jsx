import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/music-detail/shared/Header";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/music-detail/Footer";
import MusicDetailProvider from "@/store/MusicDetailProvider";

export const metadata = {
  title: "Music Is Life",
  description: "Enjoy sharing your taste",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const locales = ["en", "vi"];

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Validate that the incoming `locale` parameter is valid
  // const isValidLocale = locales.some((cur) => cur === locale);
  // if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MusicDetailProvider>
            <Header />
            {children}
            <Footer />
          </MusicDetailProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
