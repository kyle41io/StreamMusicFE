"use client";
import AlbumItem from "@/components/music-detail/AlbumItem";
import Information from "@/components/music-detail/Information";
import ListAction from "@/components/music-detail/ListAction";
import MusicPlayer from "@/components/music-detail/MusicPlayer";
import MusicDetailProvider from "@/store/MusicDetailProvider";
import React from "react";

const DetailMusic = () => {
  return (
    <div className="w-[73%] flex mx-auto mt-10 gap-[4%]">
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