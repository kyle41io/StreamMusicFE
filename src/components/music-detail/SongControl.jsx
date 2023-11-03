"use client";
import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdRepeat } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
export default function SongControl() {
  return (
    <div className="flex pl-5 text-white">
      <div className="flex gap-5 items-center">
        <FaAngleDoubleLeft size={24} />
        <BiSolidRightArrow size={24} />
        <FaAngleDoubleRight size={24} />
        <IoMdRepeat size={24} />
        <div className="flex gap-2 items-center">
          <IoVolumeHigh size={24} />
          <input
            type="range"
            className="w-[72px] h-1 volume rounded-lg appearance-none bg-primaryGray"
          />
        </div>
        <p className="text-xs text-white">
          00:47<span className="text-primaryGray">/ 05:32</span>
        </p>
      </div>
    </div>
  );
}
