 "use client";
import { DetailProvider } from "@/store/MusicDetailProvider";

import { useContext, useEffect } from "react";

import { formatTime } from "@/utils";

import ButtonControl from "./ButtonControl";
import VolumeControl from "./VolumeControl";

export default function SongControl() {
  const { audioRef, timeProgress, volumeBarRef, songVolume, setSongVolume } =
    useContext(DetailProvider);

  const MAX = 100;
  const getBackgroundSize = () => {
    return { backgroundSize: `${(songVolume * 100) / MAX}% 100%` };
  };

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = songVolume / 100;
    }
  }, [songVolume, audioRef.current]);

  return (
    <div className="flex pl-5 text-white">
      <div className="flex gap-5 items-center">
        <ButtonControl />
        <div className="flex gap-2 items-center">
          <VolumeControl />
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
