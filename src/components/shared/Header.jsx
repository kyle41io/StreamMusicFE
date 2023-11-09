"use client";
import Image from "next/image";
import React, { useContext } from "react";
import logo from "@/assets/images/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import Button from "./Button";
import ResultBox from "../ResultBox";
import { MdPlaylistAdd } from "react-icons/md";
import UserAvatar from "../UserAvatar";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { DetailProvider } from "@/store/MusicDetailProvider";

export default function Header() {
  const { userData } = useContext(DetailProvider);
  const useAuthentication = useAuth();

  return (
    <div className="sticky top-0 flex justify-center bg-primaryBlack w-full h-20 z-10">
      <div className="flex justify-between items-center md:gap-2 h-full 2xl:w-[1400px] xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] w-[350px] px-10">
        {/* Logo form */}
        <Link href="/home">
          <div className="flex gap-2 items-center cursor-pointer p-2">
            <Image
              src={logo.src}
              width={68}
              height={68}
              className="object-center min-w-[46px] min-h-[46px] sm:block md:block lg:block xl:block"
              alt="logo"
            />

            <div className="text-2xl text-white uppercase font-normal hidden xl:block">
              Music is life
            </div>
          </div>
        </Link>

        {/* Input form */}
        <form className="flex items-center relative">
          <input
            type="text"
            placeholder="Please enter the song name"
            className="xl:h-12 lg:h-12 md:h-12  2xl:w-[450px] lg:w-[450px] xl:w-[450px] md:w-[360px] p-3 rounded-md placeholder:text-primaryGray placeholder:text-sm"
          />
          <HiOutlineSearch
            size={20}
            className="text-secondaryBlack absolute right-3"
          />

          {/* <ResultBox /> */}
        </form>

        {/* Buttons when there's no user */}

        {userData ? (
          <div className="flex gap-8 items-center">
            <Button
              text="Create Playlist"
              showIcon={{ icon: <MdPlaylistAdd /> }}
              iconSize={24}
              iconColor="text-white"
              className="w-[192px] gap-3"
            />
            <UserAvatar />
          </div>
        ) : (
          <div className="flex justify-between 2xl:gap-8 xl:gap-8 lg:gap-8 md:gap-4 sm:gap-3">
            <Link href="/auth/sign-in">
              <Button
                text="Sign in"
                className="w-12 sm:w-24 lg:w-32 xl:w-32 2xl:w-32"
              />
            </Link>
            <Link href="/auth/sign-up">
              <Button
                text="Sign up"
                color="primary"
                className="w-12 sm:w-24 lg:w-32 xl:w-32 2xl:w-32"
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
