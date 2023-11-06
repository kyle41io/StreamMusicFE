import { FileProvider } from "@/store/FileProvider";
import React, { useContext } from "react";

export default function Modal() {
  const { openModal, setOpenModal } = useContext(FileProvider);

  return (
    <>
      {openModal && (
        <div
          className="flex justify-center items-center w-screen h-screen"
          style={{ background: "rgba(0, 0, 0, 0.50)" }}
        >
          Modal
        </div>
      )}
    </>
  );
}
