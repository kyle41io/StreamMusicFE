"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "./Button";
import ResultBox from "../ResultBox";
import { MdPlaylistAdd } from "react-icons/md";
import UserAvatar from "../UserAvatar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-center bg-primaryBlack w-full h-20 z-10">
      <div className="w-[73%] flex justify-between items-center">
        {/* Logo form */}
        <Link href="/home">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              src={logo.src}
              width={240}
              height={68}
              className="object-center"
              alt="logo"
            />
          </div>
        </Link>

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
          <Link href="/auth/sign-in">
            <Button text="Sign in" />
          </Link>
          <Link href="/auth/sign-up">
            <Button text="Sign up" color="primary" />
          </Link>
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
