import { DetailProvider } from "@/store/MusicDetailProvider";
import { useContext } from "react";

export default function useVolumeControl() {
  const { songVolume, setSongVolume, audioRef } = useContext(DetailProvider);

  const handleControlVolume = () => {
    if (songVolume !== 0 && audioRef.current) {
      setSongVolume(0);
    }
    if (songVolume === 0 && audioRef.current) {
      setSongVolume(60);
    }
  };

  return { handleControlVolume };
}
