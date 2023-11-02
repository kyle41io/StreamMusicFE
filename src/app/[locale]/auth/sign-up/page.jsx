import SignUp from "@/components/auth/sign-up/SignUp";
import { useTranslations } from "next-intl";

const pageSignUp = () => {
  const t = useTranslations("Auth");
  return <SignUp t={t}/>;
};

export default pageSignUp;
