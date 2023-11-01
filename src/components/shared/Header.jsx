import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "./Button";
import ResultBox from "../ResultBox";
import { MdPlaylistAdd } from "react-icons/md";
import UserAvatar from "../UserAvatar";

export default function Header() {
  return (
    <div className="flex justify-center bg-primaryBlack w-full h-20">
      <div className="w-[73%] flex justify-between items-center">
        {/* Logo form */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo.src}
            width={68}
            height={68}
            className="object-center"
            alt="logo"
          />
          <p className="uppercase text-2xl font-normal text-white">
            Music is life
          </p>
        </div>

        {/* Input form */}
        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Please enter the song name"
            className="h-12 w-[450px] p-3 rounded-md placeholder:text-primaryGray placeholder:text-sm"
          />
          <HiOutlineSearch
            size={20}
            className="text-secondaryBlack absolute right-3"
          />

          {/* <ResultBox /> */}
        </form>

        {/* Buttons when there's no user */}

        <div className="flex gap-8">
          <Button text="Sign in" />
          <Button text="Sign up" color="primary" />
        </div>

        {/* Button when user logged in */}
        {/* <div className="flex gap-8 items-center">
          <Button
            text="Create Playlist"
            showIcon={{ icon: <MdPlaylistAdd /> }}
            className="w-[192px] gap-3"
          />
          <UserAvatar />
        </div> */}
      </div>
    </div>
  );
}
