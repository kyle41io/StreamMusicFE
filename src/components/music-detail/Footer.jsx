"use client";
import React, { useContext } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdRepeat, IoMdPause } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { MdPlaylistPlay } from "react-icons/md";
import MusicDetailProvider, {
  DetailProvider,
} from "@/store/MusicDetailProvider";
import { formatTime } from "@/utils";

export default function Footer() {
  const {
    timeProgress,
    audioRef,
    isPlaying,
    setIsPlaying,
    isRepeat,
    setIsRepeat,
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
    <MusicDetailProvider>
      <section className="sticky bottom-0 flex justify-center w-full h-[72px] bg-thirdGray">
        <div className="w-[73%] justify-between flex gap-6 items-center">
          <FaAngleDoubleLeft
            size={24}
            className="cursor-pointer text-2xl"
            onClick={handlePlayPrev}
          />
          <span onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <IoMdPause size={24} className="cursor-pointer text-2xl" />
            ) : (
              <BiSolidRightArrow
                size={24}
                className="cursor-pointer text-2xl"
              />
            )}
          </span>

          <FaAngleDoubleRight
            size={24}
            className="cursor-pointer text-2xl"
            onClick={handlePlayNext}
          />
          <IoMdRepeat
            size={24}
            className={`${
              isRepeat ? "text-primary" : ""
            } cursor-pointer text-2xl`}
            onClick={() => setIsRepeat(!isRepeat)}
          />
          <div className="w-[42%] flex items-center gap-3">
            <p className="text-sm text-primary w-[32px]">{timeProgress}</p>
            <input
              type="range"
              className="w-[85%] h-1 rounded-lg appearance-none bg-primaryGray cursor-pointer footer-bar"
            />
            <p className="text-sm w-[32px]">
              {audioRef.current?.duration
                ? formatTime(audioRef.current.duration)
                : "--:--"}
            </p>
          </div>
          <div className="relative">
            <IoVolumeHigh size={24} className="cursor-pointer text-2xl" />
            <div className="absolute flex items-center justify-center w-[40px] h-[153px] top-0 left-0 border rounded bg-thirdGray -translate-y-[116%] -translate-x-2 ">
              <input
                type="range"
                //   style={{ transform: "rotate(270deg)" }}
                className="absolute  w-1 h-[131px] volume rounded appearance-none bg-primaryGray cursor-pointer footer-volume footer-scrollbar-thumb"
              />
            </div>
          </div>
          {/* Information */}
          <div className="w-[35,7%] h-full flex items-center border-l gap-4 border-l-secondaryGray">
            <Image
              src={avatar.src}
              width={46}
              height={46}
              alt="avatar"
              className="rounded-full ml-6"
            />
            <div className="h-full flex flex-col gap-1 mt-1">
              <p className="text-xs text-primaryGray">N B D</p>
              <h5 className="text-sm text-thirdBlack uppercase">
                Mặt mộc | Phạm Nguyên Ngọc x Vanh x Ân Nhi{" "}
              </h5>
            </div>
            <BsHeart size={24} className="text-2xl cursor-pointer" />
          </div>
          <MdPlaylistPlay size={24} className="text-2xl cursor-pointer" />
        </div>
      </section>
    </MusicDetailProvider>
  );
}
