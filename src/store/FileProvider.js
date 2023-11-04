"use client";
import React, { createContext, useState } from "react";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [infoPlaylist, setInfoPlaylist] = useState({
    title: null,
    artist: null,
    genre: null,
    slug: null,
    ref: null,
  });
  const [uploadedImageFile, setUploadedImageFile] = useState(null);

  return (
    <FileContext.Provider
      value={{
        infoPlaylist,
        setInfoPlaylist,
        uploadedImageFile,
        setUploadedImageFile,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileContext;
