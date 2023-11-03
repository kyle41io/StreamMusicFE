import SignIn from "@/components/auth/sign-in/SignIn";

import { useTranslations } from "next-intl";

const PageSignIn = () => {
  const t = useTranslations("Auth");
  return (<SignIn t={t}/>);
}

export default PageSignIn;
