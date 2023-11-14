"use client";

import { tracks } from "@/constant/songs(test)";
import { createContext, useRef, useState } from "react";

export const DetailProvider = createContext();

export default function MusicDetailProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [track, setTrack] = useState(tracks[currentIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(null);
  const inputRef = useRef(null);
  const [songProgressValue, setSongProgressValue] = useState(0);
  const [timeProgress, setTimeProgress] = useState("--:--");
  const progressBarRef = useRef(null);
  const volumeBarRef = useRef(null);
  const [showVolume, setShowVolume] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [songVolume, setSongVolume] = useState(50);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userData, setUserData] = useState("");

  return (
    <DetailProvider.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isRepeat,
        setIsRepeat,
        isShuffle,
        setIsShuffle,
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
        progressBarRef,
        volumeBarRef,
        showVolume,
        setShowVolume,
        isLiked,
        setIsLiked,
        songVolume,
        setSongVolume,
        showDeleteModal,
        setShowDeleteModal,
        userData,
        setUserData,
      }}
    >
      {children}
    </DetailProvider.Provider>
  );
}
