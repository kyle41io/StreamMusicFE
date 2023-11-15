"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

import useSongControl from "@/hooks/useSongControl";
import useVolumeControl from "@/hooks/useVolumeControl";

import { DetailProvider } from "@/store/MusicDetailProvider";
import { formatTime } from "@/utils";

import ButtonControl from "./ButtonControl";
import CurrentPlaylistItem from "./CurrentPlaylistItem";

import { MdPlaylistPlay } from "react-icons/md";
import { IoVolumeHigh, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import { tracks } from "@/constant/songs(test)";
import avatar from "@/assets/images/avatar.png";

export default function Footer() {
  const {
    timeProgress,
    isLiked,
    setIsLiked,
    songProgressValue,
    setSongProgressValue,
    setTimeProgress,
    audioRef,
    volumeBarRef,
    songVolume,
    setSongVolume,
    currentIndex,
    isPlaying,
  } = useContext(DetailProvider);
  const { handleControlVolume } = useVolumeControl();
  const { onSongProgressChange } = useSongControl();

  const volumeRef = useRef(null);

  const [showVolumeBar, setShowVolumeBar] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const MAX = 100;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(songProgressValue * 100) / MAX}% 100%` };
  };

  const getVolumeBackgroundSize = () => {
    return { backgroundSize: `${(songVolume * 100) / MAX}% 100%` };
  };

  const onTimeUpdate = () => {
    if (audioRef.current?.duration) {
      const progress = Math.floor(
        (audioRef.current?.currentTime / audioRef.current?.duration) * 100
      );
      setSongProgressValue(progress);
    }
  };

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying, audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleTimeUpdate = () => {
        setTimeProgress(formatTime(audio.currentTime));
        let newProgress;
        if (audio.currentTime / audio.duration) {
          newProgress = (audio.currentTime / audio.duration) * 100;
        }
        setSongProgressValue(newProgress);
      };
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [audioRef]);

  return (
    <section className="fixed bottom-0 flex justify-center w-full bg-thirdGray items-center">
      <div className="h-[72px] 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[350px] justify-between flex gap-6 items-center">
        <ButtonControl />
        <div className="w-[42%] flex items-center gap-3">
          <p className="text-sm text-primary w-[32px]">{timeProgress}</p>
          <audio
            ref={audioRef}
            className="hidden"
            onTimeUpdate={() => onTimeUpdate()}
          >
            <source src={tracks[currentIndex].path} type="audio/mpeg" />
          </audio>
          <input
            type="range"
            value={songProgressValue}
            className="footer_progress"
            style={getBackgroundSize()}
            max={MAX}
            onChange={onSongProgressChange}
          />
          <p className="text-sm w-[32px]">
            {audioRef.current?.duration
              ? formatTime(audioRef.current.duration)
              : "--:--"}
          </p>
        </div>

        <div
          ref={volumeRef}
          className="relative group"
          onMouseOver={() => setShowVolumeBar(true)}
          onMouseLeave={() => setShowVolumeBar(false)}
        >
          <div
            className="cursor-pointer text-2xl "
            onClick={handleControlVolume}
          >
            {audioRef.current?.muted || songVolume === 0 ? (
              <IoVolumeMute size={24} />
            ) : !audioRef.current?.muted && songVolume <= 50 ? (
              <IoVolumeMedium size={24} />
            ) : (
              <IoVolumeHigh size={24} />
            )}
          </div>

          {showVolumeBar && (
            <div
              ref={volumeBarRef}
              className="absolute flex items-center justify-center w-[40px] h-[153px] top-0 left-0 border rounded bg-thirdGray -translate-y-[116%] -translate-x-2 "
            >
              <input
                value={songVolume}
                type="range"
                style={getVolumeBackgroundSize()}
                className="footer-volume"
                onChange={(e) => setSongVolume(Number(e.target.value))}
              />
            </div>
          )}
        </div>
        {/* Information */}
        <div className="w-[35,7%] h-full flex items-center border-l gap-4 border-l-secondaryGray relative">
          <Image
            src={avatar.src}
            width={46}
            height={46}
            alt="avatar"
            className="rounded-full ml-6"
          />

          {/* Song info */}
          <div className="flex flex-col h-full mt-3">
            <p className="text-xs text-primaryGray mb-1">N B D</p>
            <h5 className="text-sm text-thirdBlack uppercase">
              Mặt mộc | Phạm Nguyên Ngọc x Vanh x Ân Nhi{" "}
            </h5>
          </div>

          {/* Like */}
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <BsHeartFill
                size={24}
                className="text-2xl cursor-pointer text-primary"
              />
            ) : (
              <BsHeart size={24} className="text-2xl cursor-pointer" />
            )}
          </div>

          {/* Current Playlist */}
          {showPlaylist && (
            <div className="absolute flex flex-col w-[470px] h-[500px] top-0 -translate-y-[100%] overflow-y-auto right-0 translate-x-[11%] border border-secondaryGray z-10">
              {/* header */}
              <div className="flex justify-between bg-white border-b border-secondaryGray p-3">
                <p className="text-sm text-thirdBlack">Tracks</p>
                <IoMdClose
                  size={24}
                  className="text-thirdBlack cursor-pointer"
                />
              </div>
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
              <CurrentPlaylistItem />
            </div>
          )}
        </div>
        <MdPlaylistPlay
          size={24}
          className={`${
            showPlaylist ? "text-primary" : ""
          } text-2xl cursor-pointer`}
          onClick={() => setShowPlaylist(!showPlaylist)}
        />
      </div>
    </section>
  );
}
