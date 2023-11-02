import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("Index");

  return <div>Home</div>;
};

export default Home;
