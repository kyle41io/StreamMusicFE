"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen = false, disabled, className }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
  }, [disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Background container */}
      <div
        className="justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70"
      >
        {/* Main modal */}
        <div
          className={`translate
              h-[147px] 
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              p-3
              flex-col 
              w-[393px]
              bg-white 
              gap-5
              outline-none 
              focus:outline-none ${className}`}
        >
          {/* Header */}
          <header className="flex justify-between">
            <p className="text-sm">Delete confirmation</p>
            <IoMdClose size={16} className="cursor-pointer text-primaryGray" />
          </header>

          {/* Body */}
          <div
            className="flex items-center p-3 text-primaryError text-xs font-normal rounded"
            style={{ background: "rgba(255, 64, 64, 0.15)" }}
          >
            Are you sure want to delete this album?
          </div>

          <footer className="flex justify-end gap-3 text-xs">
            <button className="text-primaryGray p-1">Cancel</button>
            <button className="text-white border rounded bg-primaryError py-[2px] px-2">
              Delete
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Modal;
