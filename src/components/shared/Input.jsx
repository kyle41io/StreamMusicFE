"use client";

import { useState } from "react";
import styles from "@/styles/shared/Input.module.css";

const Input = ({ value, type, placeholder, icon, setDataState }) => {
  const [internalType, setInternalType] = useState(type);
  const [eye, setEye] = useState("open");

  const handleChangeValue = (event) => {
    setDataState(event.target.value);
  };

  const handleToggleEye = () => {
    if (eye === "open") {
      setEye("close");
      setInternalType("text");
    } else {
      setEye("open");
      setInternalType("password");
    }
  };

  return (
    <div className={styles["input-container"]}>
      <div className={`${styles["icon"]} ${icon}`}></div>
      <input
        type={internalType}
        id={`input-${type}-${icon}`}
        className={styles["input-1"]}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          handleChangeValue(event);
        }}
      />
      {type === "password" && (
        <div
          className={`${eye} ${styles["icon"]} ${styles["right-icon"]}`}
          onClick={handleToggleEye}
        ></div>
      )}
    </div>
  );
};

export default Input;
