import { tracks } from "@/constant/songs(test)";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { formatTime } from "@/utils";
import { useContext } from "react";

export default function useSongControl() {
  const {
    currentIndex,
    setCurrentIndex,
    setTrack,
    audioRef,
    setIsPlaying,
    setTimeProgress,
    setSongProgressValue,
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

  const onSongProgressChange = (e) => {
    const newTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
    setSongProgressValue(e.target.value);
    setTimeProgress(formatTime(newTime));
  };

  return { handlePlayPrev, handlePlayNext, onSongProgressChange };
}
