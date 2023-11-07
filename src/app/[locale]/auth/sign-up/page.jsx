import SignUp from "@/components/auth/sign-up/SignUp";
import { useTranslations } from "next-intl";

const SignUpPage = () => {
  const t = useTranslations("Auth");
  return <SignUp t={t} />;
};

export default SignUpPage;
