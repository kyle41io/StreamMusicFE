"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Live = () => {
  const t = useTranslations("Home");

  return <button onClick={console.log(1)}>{t("live_music")}</button>;
};

export default Live;
