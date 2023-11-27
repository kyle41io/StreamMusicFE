"use client";
import { useParams } from "next/navigation";

import AlbumItem from "@/components/pages/content/music-detail/AlbumItem";
import Information from "@/components/pages/content/music-detail/Information";
import ListAction from "@/components/layouts/HeaderComponents/ListAction";
import MusicPlayer from "@/components/pages/content/music-detail/MusicPlayer";

import { tracks, playlists_PhuongLy } from "@/constant/songs(test)";
import { useContext } from "react";
import { DetailProvider } from "@/store/MusicDetailProvider";

const DetailMusic = () => {
  const params = useParams();
  const playlistId = params.playlistId;

  let data;
  if (playlistId === "1") {
    data = tracks;
  }

  if (playlistId === "2") {
    data = playlists_PhuongLy;
  }

  return (
    <div className="flex mx-auto gap-[4%]">
      <div className="w-[64%] flex flex-col gap-6">
        <MusicPlayer data={data} />
        <ListAction />
        <Information />
      </div>
      <div className="w-[32%] flex flex-col border border-secondaryGray rounded overflow-y-auto">
        {data.map((track, idx) => (
          <AlbumItem key={idx} track={track} />
        ))}
      </div>
    </div>
  );
};

export default DetailMusic;
