"use client";
import React, { useContext } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdRepeat, IoMdPause } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { tracks } from "@/constant/songs(test)";
import { formatTime } from "@/utils";
export default function SongControl() {
  const {
    isPlaying,
    setIsPlaying,
    isRepeat,
    setIsRepeat,
    setTrack,
    audioRef,
    currentIndex,
    setCurrentIndex,
    timeProgress,
  } = useContext(DetailProvider);

  const handlePlayPrev = () => {
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentIndex(prevIndex);
    setTrack(tracks[prevIndex]);
    audioRef.current.src = tracks[prevIndex].path;
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePlayNext = () => {
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentIndex(nextIndex);
    setTrack(tracks[nextIndex]);
    setIsPlaying(true);
    audioRef.current.src = tracks[nextIndex].path;
    audioRef.current.play();
  };

  return (
    <div className="flex pl-5 text-white">
      <div className="flex gap-5 items-center">
        <FaAngleDoubleLeft
          size={24}
          className="cursor-pointer"
          onClick={handlePlayPrev}
        />
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="cursor-pointer"
        >
          {isPlaying ? (
            <IoMdPause size={24} />
          ) : (
            <BiSolidRightArrow size={24} />
          )}
        </div>
        <FaAngleDoubleRight
          size={24}
          className="cursor-pointer"
          onClick={handlePlayNext}
        />
        <IoMdRepeat
          size={24}
          className={`${isRepeat ? "text-primary" : ""} cursor-pointer`}
          onClick={() => setIsRepeat(!isRepeat)}
        />
        <div className="flex gap-2 items-center">
          <IoVolumeHigh size={24} className="cursor-pointer" />
          <input
            type="range"
            className="w-[72px] h-1 volume rounded-lg appearance-none bg-primaryGray cursor-pointer"
          />
        </div>
        <p className="text-xs text-white">
          {timeProgress}
          <span className="text-primaryGray">
            /{" "}
            {audioRef.current?.duration
              ? formatTime(audioRef.current.duration)
              : "--:--"}
          </span>
        </p>
      </div>
    </div>
  );
}
