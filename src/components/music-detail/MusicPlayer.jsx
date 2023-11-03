"use client";
import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/song_detail_avatar.png";
import SongControl from "./SongControl";

export default function MusicPlayer() {
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
          type="range"
          className="song-progress rounded-lg appearance-none bg-primaryGray h-[6px] w-full"
        />
      </div>

      {/* Song control */}
      <SongControl />
    </div>
  );
}
