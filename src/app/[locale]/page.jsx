import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import Home from "./(content)/home/page";
import SignInPage from "./auth/sign-in/page";

function Page({ data }) {
  const t = useTranslations("Auth");

  return (
    <main className={"w-full px-20"}>
      <SignInPage />
    </main>
  );
}

export default Page;
