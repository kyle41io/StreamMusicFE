"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { IoVolumeHigh, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { MdPlaylistPlay } from "react-icons/md";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { formatTime } from "@/utils";
import useVolumeControl from "@/hooks/useVolumeControl";
import ButtonControl from "./ButtonControl";
import useSongControl from "@/hooks/useSongControl";

export default function Footer() {
  const [isHover, setIsHover] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const volumeRef = useRef(null);
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
  } = useContext(DetailProvider);
  const { handleControlVolume } = useVolumeControl();
  const { onSongProgressChange } = useSongControl();

  const MAX = 100;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(songProgressValue * 100) / MAX}% 100%` };
  };

  const getVolumeBackgroundSize = () => {
    return { backgroundSize: `${(songVolume * 100) / MAX}% 100%` };
  };

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
    <section className="sticky bottom-0 flex justify-center h-[72px] bg-thirdGray 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[350px] lg:px-10 md:px-6 sm:px-4 px-2">
      <div className="w-full justify-between flex gap-6 items-center">
        <ButtonControl />
        <div className="w-[42%] flex items-center gap-3">
          <p className="text-sm text-primary w-[32px]">{timeProgress}</p>
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
        <div ref={volumeRef} className="relative group">
          <div
            className="cursor-pointer text-2xl"
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

          <div className="absolute flex items-center justify-center w-[40px] h-[153px] top-0 left-0 border rounded bg-thirdGray -translate-y-[116%] -translate-x-2 opacity-0  group-hover:opacity-100">
            <input
              ref={volumeBarRef}
              value={songVolume}
              type="range"
              style={getVolumeBackgroundSize()}
              className="footer-volume"
              onChange={(e) => setSongVolume(Number(e.target.value))}
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
