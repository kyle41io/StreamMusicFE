"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import StepBar from "@/components/upload/StepBar";
import Information from "@/components/upload/Information";
import AddSong from "@/components/upload/AddSong";
import Complete from "@/components/upload/Complete";
import { FileProvider } from "@/store/FileProvider";
import ToastMessage from "@/components/shared/ToastMessage";
import "@/styles/upload/UploadStyle.css";

export default function Home() {
  const t = useTranslations("Upload");
  const [currentStep, setCurrentStep] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [closingToast, setClosingToast] = useState(false);

  useEffect(() => {
    let timeout;
    if (showToast) {
      timeout = setTimeout(() => {
        handleCloseToast();
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showToast]);

  const handleCloseToast = () => {
    setClosingToast(true);
    setTimeout(() => {
      setShowToast(false);
      setClosingToast(false);
    }, 500);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-10 text-[#0F0F0F]">
        {t("create_new_playlist")}
      </h1>
      <StepBar currentStep={currentStep} t={t} />
      <FileProvider>
        {currentStep === 1 && (
          <Information
            setCurrentStep={setCurrentStep}
            setShowToast={setShowToast}
            setError={setError}
            t={t}
          />
        )}
        {currentStep === 2 && <AddSong currentStep={currentStep} t={t} />}
        {currentStep === 3 && <Complete t={t} />}
      </FileProvider>

      <div
        className={`toast-container ${
          showToast && !closingToast ? "show" : ""
        } ${closingToast ? "closing" : ""}`}
      >
        {showToast && (
          <ToastMessage
            onClose={handleCloseToast}
            error={error}
            errorMessage={"Failed to upload"}
            successMessage={"Uploaded successfully"}
          />
        )}
      </div>
    </main>
  );
}
