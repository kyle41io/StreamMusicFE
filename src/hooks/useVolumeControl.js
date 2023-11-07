import { DetailProvider } from "@/store/MusicDetailProvider";
import React, { useContext } from "react";

export default function useVolumeControl() {
  const { songVolume, setSongVolume, audioRef } = useContext(DetailProvider);

  const handleControlVolume = () => {
    if (songVolume !== 0 && audioRef.current) {
      setSongVolume(0);
      audioRef.current.muted = true;
    }

    if (songVolume === 0 && audioRef.current) {
      setSongVolume(60);
      audioRef.current.muted = false;
    }
  };

  return { handleControlVolume };
}
