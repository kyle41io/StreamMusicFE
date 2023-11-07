import "../../styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/shared/Header";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import MusicDetailProvider from "@/store/MusicDetailProvider";
import Modal from "@/components/Modal";
import Footer from "@/components/music-detail/Footer";

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
      <body className={"w-full flex flex-col items-center gap-12"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MusicDetailProvider>
            <Header />
            <main className="xl:w-[1400px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[350px] lg:px-10 md:px-6 sm:px-4 px-2">
              {children}
            </main>
            <Modal />
            <Footer />
          </MusicDetailProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
