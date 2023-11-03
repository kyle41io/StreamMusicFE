import { useTranslations } from "next-intl";
import TopMember from "@/components/content/TopMember";

const Home = () => {
  const t = useTranslations("Home");
  return <TopMember t={t} />;
};

export default Home;
