"use client";

import { useTranslations } from "next-intl";
import { useAuth } from "@/hooks/useAuth";

import TopMember from "@/components/content/home/TopMember";
import Slider2 from "@/components/content/home/Slider2";
import NewPlaylist from "@/components/content/home/NewPlaylist";
import MyPlaylist from "@/components/content/home/MyPlaylist";

const HomePage = () => {
  const t = useTranslations("Home");

  useAuth();

  return (
    <div className="body-container">
      <div className="!w-full content-container">
        <Slider2 />
        <div className="section-2">
          <div className="left-container">
            <NewPlaylist />
            <MyPlaylist />
          </div>
          <div className="right-container">
            <TopMember t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
