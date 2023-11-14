
import AlbumItem from "@/components/music-detail/AlbumItem";
import Information from "@/components/music-detail/Information";
import ListAction from "@/components/ListAction";
import MusicPlayer from "@/components/music-detail/MusicPlayer";
import { tracks } from "@/constant/songs(test)";
import { useContext, useState } from "react";
import { DetailProvider } from "@/store/MusicDetailProvider";

const DetailMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const { currentIndex, setCurrentIndex } = useContext(DetailProvider);

  const handlePlayTrack = (track) => {
    setIsPlaying(true);
    setSelectedTrack(track);
    setCurrentIndex(track.id);
  };

const DetailMusic = () => {
  return (
    <div className="flex mx-auto gap-[4%]">
      <div className="w-[64%] flex flex-col gap-6">
        <MusicPlayer />
        <ListAction />
        <Information />
      </div>
      <div className="w-[32%] flex flex-col border border-secondaryGray rounded">
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </div>
    </div>
  );
};

export default DetailMusic;
