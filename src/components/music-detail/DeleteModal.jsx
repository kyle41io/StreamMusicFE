"use client";
import React, { useContext, useEffect } from "react";
import Modal from "@/components/shared/Modal";
import { DetailProvider } from "@/store/MusicDetailProvider";

export default function DeleteModal() {
  const { showDeleteModal, setShowDeleteModal } = useContext(DetailProvider);

  const handleCloseModal = () => {
    setShowDeleteModal(false);
  };

  const bodyContent = (
    <div
      className="flex items-center p-3 text-primaryError text-xs font-normal rounded"
      style={{ background: "rgba(255, 64, 64, 0.15)" }}
    >
      Are you sure want to delete this album?
    </div>
  );

  return (
    <Modal
      isOpen={showDeleteModal}
      title="Delete confirmation"
      body={bodyContent}
      buttonTitle="Delete"
      onClose={handleCloseModal}
    />
  );
}
