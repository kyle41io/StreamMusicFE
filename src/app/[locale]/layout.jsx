import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/shared/Header";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import MusicDetailProvider from "@/store/MusicDetailProvider";
import Footer from "@/components/music-detail/Footer";
import DeleteModal from "@/components/music-detail/DeleteModal";

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
    messages = (await import(`@/messages/${locale}.json`)).default;
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
            <main className="2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[350px]">
              {children}
              <div className="w-full h-28"></div>
            </main>
            <DeleteModal />
            <Footer />
          </MusicDetailProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
