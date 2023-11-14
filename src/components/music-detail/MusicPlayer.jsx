"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import avatar from "@/assets/images/song_detail_avatar.png";
import SongControl from "./SongControl";
import { DetailProvider } from "@/store/MusicDetailProvider";
import { tracks } from "@/constant/songs(test)";
import { formatTime } from "@/utils";
import useSongControl from "@/hooks/useSongControl";

const MAX = 100;

export default function MusicPlayer() {
  const {
    isPlaying,
    isRepeat,
    setIsPlaying,
    isShuffle,
    currentIndex,
    setCurrentIndex,
    track,
    setTrack,
    audioRef,
    setSongProgressValue,
    songProgressValue,
    setTimeProgress,
    progressBarRef,
  } = useContext(DetailProvider);
  const { onSongProgressChange } = useSongControl();

  const getBackgroundSize = () => {
    return { backgroundSize: `${(songProgressValue * 100) / MAX}% 100%` };
  };

  const onTimeUpdate = () => {
    if (audioRef.current.duration) {
      const progress = Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      setSongProgressValue(progress);
    }
  };

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, audioRef]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTrackEnded = () => {
      if (isRepeat) {
        audio.currentTime = 0;
      } else if (isShuffle) {
        let randomIndex = Math.floor(Math.random() * (tracks.length + 1));
        setCurrentIndex(randomIndex);
        setTrack(tracks[randomIndex]);
        audio.src = tracks[randomIndex].path;
      } else {
        const nextIndex = (currentIndex + 1) % tracks.length;
        setCurrentIndex(nextIndex);
        setTrack(tracks[nextIndex]);
        audio.src = tracks[nextIndex].path;
      }
      setIsPlaying(true);
      audio.play();
    };
    audio.addEventListener("ended", handleTrackEnded);

    return () => audio.removeEventListener("ended", handleTrackEnded);
  }, [isRepeat, currentIndex, audioRef.current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleTimeUpdate = () => {
        setTimeProgress(formatTime(audio.currentTime));
        let newProgress;
        if (audio.currentTime && audio.duration) {
          newProgress = (audio.currentTime / audio.duration) * 100;
        }
        setSongProgressValue(newProgress);
      };
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => audio.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [audioRef]);

  return (
    <div className="w-full flex-col h-[180px] bg-primaryBlack">
      <section className="flex p-5 justify-between">
        <div className="flex rounded gap-6">
          <Image
            src={avatar.src}
            width={98}
            height={98}
            alt="Song image"
            className="rounded"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-normal text-white capitalize">
              Nàng thơ
            </h2>
            <h4 className="text-xs font-normal text-white capitalize">
              Hoàng Dũng
            </h4>
          </div>
        </div>

        <p className="w-[93px] h-[22px] rounded-xl bg-primaryGray flex justify-center items-center text-white text-xs">
          # Pop Ballad
        </p>
      </section>

      {/* Song progress */}
      <div className="-mt-5 mb-1">
        <input
          ref={progressBarRef}
          type="range"
          className="music_player"
          value={songProgressValue}
          onChange={onSongProgressChange}
          style={getBackgroundSize()}
        />
      </div>
      <audio
        ref={audioRef}
        className="hidden"
        onTimeUpdate={() => onTimeUpdate()}
      >
        <source src={tracks[currentIndex].path} type="audio/mpeg" />
      </audio>

      {/* Song control */}
      <SongControl />
    </div>
  );
}
