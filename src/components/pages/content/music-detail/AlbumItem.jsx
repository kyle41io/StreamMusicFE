"use client";
import { useState } from "react";

import Image from "next/image";

import { IoStatsChartSharp } from "react-icons/io5";

export default function AlbumItem({ track}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div
        className="w-full h-20 flex py-2 px-3 gap-4 items-center hover:bg-secondaryGray cursor-pointer"
        
      >
        <div className="w-[12px]">
          {isPlaying ? (
            <IoStatsChartSharp size={12} className="text-primary text-sm" />
          ) : (
            <p className="text-sm">{track.id + 1}</p>
          )}
        </div>
        <div
          className="w-[60px] h-[60px] object-cover"
          // style={{ background: `url(${track.image})` }}
        >
          <Image src={track.image} width={60} height={60} alt="Image" />
        </div>
        <div className="w-[73%] flex flex-col gap-1">
          <p className="text-sm  text-thirdBlack capitalize">
            {track.songName}
          </p>
          <p className="text-xs text-primaryGray capitalize">{track.singer}</p>
        </div>
      </div>
    </>
  );
}
