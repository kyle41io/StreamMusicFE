import React, { cloneElement } from "react";

export default function Button({ text, color, showIcon, className }) {
  return (
    <div
      className={`${className} h-12 w-32 inline-flex items-center justify-center border rounded-md text-center border-${color} bg-${color} cursor-pointer rela`}
    >
      <span className="inline-block">
        {showIcon &&
          cloneElement(showIcon.icon, {
            size: 24,
            className: "text-white",
          })}
      </span>
      <p
        className={`${
          showIcon ? "" : "mx-auto"
        } text-white font-semibold text-lg capitalize`}
      >
        {text}
      </p>
    </div>
  );
}
