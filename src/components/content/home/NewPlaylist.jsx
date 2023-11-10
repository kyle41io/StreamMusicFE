"use client";

import styles from "./../../../styles/content/home/NewPlaylist.module.css";
import PagingBar from "@/components/shared/PagingBar";
import CommonTable from "@/components/shared/CommonTable";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { NEW_PLAYLIST, tableHeader } from "@/constant/newplaylist";

function NewPlaylist() {
  const t = useTranslations("Home");

  const [currentPage, setCurrentPage] = useState(1);
  const [playingIndex, setPlayingIndex] = useState();

  console.log(playingIndex);

  return (
    <div className={styles["main-container"]}>
      <p className={styles.title}>{t("new_playlist")}</p>
      <div className={styles["main-content"]}>
        <CommonTable list={NEW_PLAYLIST} headerList={tableHeader} playingIndex={playingIndex} setPlayingIndex={setPlayingIndex}/>
        <PagingBar
          currentPage={currentPage}
          onClick={setCurrentPage}
          maxPage={12}
        />
      </div>
    </div>
  );
}

export default NewPlaylist;
