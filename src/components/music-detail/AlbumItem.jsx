"use client";
import { IoStatsChartSharp } from "react-icons/io5";

export default function AlbumItem({ track, setIsPlaying, isPlaying }) {
  const handlePlayClick = () => {
    setIsPlaying(); // Make sure to pass track information if needed
  };

  return (
    <>
      <div
        className="w-full h-20 flex py-2 px-3 gap-4 items-center hover:bg-secondaryGray cursor-pointer"
        onClick={handlePlayClick}
      >
        <div className="w-[12px]">
          {isPlaying ? (
            <IoStatsChartSharp size={12} className="text-primary text-sm" />
          ) : (
            <p className="text-sm">{track.id + 1}</p>
          )}
        </div>
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
