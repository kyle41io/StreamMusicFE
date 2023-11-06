import { DetailProvider } from "@/store/MusicDetailProvider";
import React, { useContext } from "react";

export default function Modal() {
  const { openDeleteModal } = useContext(DetailProvider);
  return (
    <>
      {openDeleteModal && (
        <div
          className="w-screen h-screen flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          style={{ background: "rgba(0, 0, 0, 0.50)" }}
        >
          Modal
        </div>
      )}
    </>
  );
}
