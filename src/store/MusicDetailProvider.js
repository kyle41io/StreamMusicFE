"use client";

import { tracks } from "@/constant/songs(test)";
import { createContext, useRef, useState } from "react";

export const DetailProvider = createContext();

export default function MusicDetailProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [track, setTrack] = useState(tracks[currentIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const audioRef = useRef(null);
  const inputRef = useRef(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [songProgressValue, setSongProgressValue] = useState(0);
  const [timeProgress, setTimeProgress] = useState("--:--");

  return (
    <DetailProvider.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isRepeat,
        setIsRepeat,
        track,
        setTrack,
        audioRef,
        inputRef,
        currentIndex,
        setCurrentIndex,
        songProgressValue,
        setSongProgressValue,
        timeProgress,
        setTimeProgress,
        openDeleteModal,
        setOpenDeleteModal,
      }}
    >
      {children}
    </DetailProvider.Provider>
  );
}
