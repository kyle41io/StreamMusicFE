import Image from "next/image";
import React from "react";
import avatar from "@/assets/images/avatar.png";

export default function CommentTextarea() {
  return (
    <div className="w-full h-[56px] flex items-center gap-2 rounded border-t border-b bg-[#f6f6f6] border-t-secondaryGray border-b-secondaryGray">
      <textarea
        className="w-[89%] h-10 p-2 ml-2 rounded placeholder:text-xs placeholder:text-primaryGray"
        placeholder="Write a comment"
        cols={800}
      />
      <Image
        src={avatar.src}
        width={40}
        height={40}
        alt="Avatar"
        className="rounded-full"
      />
    </div>
  );
}
