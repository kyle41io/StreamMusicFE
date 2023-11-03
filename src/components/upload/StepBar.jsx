"use client";
import React, { useState } from "react";
import { BsCheckLg } from "react-icons/hi";
import "@/styles/upload/StepBar.css";

const StepBar = ({ currentStep, t }) => {
  const steps = [t("information"), t("add_songs"), t("complete")];
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex mb-10">
      {steps?.map((step, i) => (
        <div
          key={i}
          className={`step-item ${currentStep === i + 1 && "active"} ${
            (i + 1 < currentStep || complete) && "complete"
          } `}
        >
          <div className="step">
            {i + 1 < currentStep || complete ? (
              <BsCheckLg size={14} strokeWidth={3} color="white" />
            ) : null}
          </div>
          <p className=" step-text">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default StepBar;
