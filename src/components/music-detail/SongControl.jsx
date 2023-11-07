"use client";
import { useContext, useEffect } from "react";
import { IoVolumeHigh, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { formatTime } from "@/utils";
import useVolumeControl from "@/hooks/useVolumeControl";
import ButtonControl from "./ButtonControl";
export default function SongControl() {
  const { audioRef, timeProgress, volumeBarRef, songVolume, setSongVolume } =
    useContext(DetailProvider);
  const { handleControlVolume } = useVolumeControl();

  const MAX = 100;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(songVolume * 100) / MAX}% 100%` };
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = songVolume / 100;
    }
  }, [songVolume, audioRef]);

  return (
    <div className="flex pl-5 text-white">
      <div className="flex gap-5 items-center">
        <ButtonControl />
        <div className="flex gap-2 items-center">
          <div className="cursor-pointer" onClick={handleControlVolume}>
            {audioRef.current?.muted || songVolume === 0 ? (
              <IoVolumeMute size={24} />
            ) : !audioRef.current?.muted && songVolume <= 50 ? (
              <IoVolumeMedium size={24} />
            ) : (
              <IoVolumeHigh size={24} />
            )}
          </div>
          <input
            ref={volumeBarRef}
            value={songVolume}
            type="range"
            className="song-volume"
            onChange={(e) => setSongVolume(Number(e.target.value))}
            style={getBackgroundSize()}
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
