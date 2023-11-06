import { useTranslations } from "next-intl";
import Link from "next-intl/link";

function Home({ data }) {
  const t = useTranslations("Auth");

  return (
    <main className={"min-h-screen"}>
      <div>
        <Link href={"/"} locale="en">
          English
        </Link>
        <Link href={"/"} locale="vi">
          Tiếng Việt
        </Link>
      </div>
      <p>{t("sign_in")}</p>
      <div>{t("sign_up")}</div>
    </main>
  );
}

export default Home;
