import { useTranslations } from "next-intl";
import TopMember from "@/components/content/home/TopMember";
import Slider from "@/components/content/home/Slider";
import NewPlaylist from "@/components/content/home/NewPlaylist";

const HomePage = () => {
  const t = useTranslations("Home");

  return (
    <div className="body-container">
      <div className="content-container">
        <Slider topPlayList_t={t("top_playlist")} />
        <div className="section-2">
          <div className="left-container">
            <NewPlaylist />
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
