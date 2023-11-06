"use client";
import React, { useState } from "react";
import thumbnail from "@/assets/images/album_thumb.png";
import { IoStatsChartSharp } from "react-icons/io5";

export default function AlbumItem() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <div className="w-full h-20 flex py-2 px-3 gap-3 items-center hover:bg-secondaryGray cursor-pointer">
        {isPlaying ? (
          <IoStatsChartSharp className="text-primary text-sm" />
        ) : (
          <p className="text-sm">1</p>
        )}
        <div
          className="w-[13%] h-[60px] bg-center object-cover"
          style={{ background: `url(${thumbnail.src})` }}
        ></div>

        <div className="w-[73%] flex flex-col gap-1">
          <p className="text-sm  text-thirdBlack capitalize">
            Ngày mai người ta lấy chồng (Karaoke) voi bản đôn{" "}
          </p>
          <p className="text-xs text-primaryGray capitalize">N B D</p>
        </div>
      </div>
    </>
  );
}
