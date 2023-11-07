"use client";
import useSongControl from "@/hooks/useSongControl";
import { DetailProvider } from "@/store/MusicDetailProvider";
import React, { useContext } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { IoMdPause, IoMdRepeat } from "react-icons/io";

export default function ButtonControl() {
  const { isPlaying, setIsPlaying, isRepeat, setIsRepeat } =
    useContext(DetailProvider);
  const { handlePlayNext, handlePlayPrev } =
    useSongControl();

  return (
    <>
      <FaAngleDoubleLeft
        size={24}
        className="cursor-pointer"
        onClick={handlePlayPrev}
      />
      <div onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer">
        {isPlaying ? <IoMdPause size={24} /> : <BiSolidRightArrow size={24} />}
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
    </>
  );
}
