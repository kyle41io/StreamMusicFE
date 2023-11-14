"use client";
import AlbumItem from "@/components/music-detail/AlbumItem";
import Information from "@/components/music-detail/Information";
import ListAction from "@/components/ListAction";
import MusicPlayer from "@/components/music-detail/MusicPlayer";
import { tracks } from "@/constant/songs(test)";
import { useState } from "react";

const DetailMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handlePlayTrack = (track) => {
    setIsPlaying(true);
    setSelectedTrack(track);
  };

  return (
    <div className="flex mx-auto gap-[4%]">
      <div className="w-[64%] flex flex-col gap-6">
        <MusicPlayer />
        <ListAction />
        <Information />
      </div>
      <div className="w-[32%] flex flex-col border border-secondaryGray rounded">
        {tracks.map((track, idx) => (
          <AlbumItem
            key={idx}
            track={track}
            isPlaying={isPlaying && selectedTrack === track}
            setIsPlaying={() => handlePlayTrack(track)}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailMusic;
