"use client";

import styles from "./../../../styles/content/home/NewPlaylist.module.css";
import PagingBar from "@/components/shared/PagingBar";
import { useTranslations } from "next-intl";
import { useState } from "react";
import NEW_PLAYLIST from "@/constant/newplaylist";

function NewPlaylist() {
  const t = useTranslations("Home");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles["main-container"]}>
      <p className={styles.title}>{t("new_playlist")}</p>
      <div className={styles["main-content"]}>
        <div className={styles["new-playlists-container"]}>
          <div className={styles["header"]}>
            <div className={styles.no}>No</div>
            <div className={styles.song}>Song</div>
            <div className={styles.author}>Author</div>
            <div className={styles.genre}>Genre</div>
            <div className={styles.tracks}>Tracks</div>
            <div className={styles.blank}></div>
          </div>
          <div className={styles["new-playlists"]}>
            {NEW_PLAYLIST.map((item, index) => (
              <div
                className={`${styles["new-playlist"]} ${
                  item.isPlaying && styles.playing
                }`}
                key={index}
              >
                <div className={styles["new-playlist-no"]}>{item.no}</div>
                <div className={styles["new-playlist-song"]}>
                  <img
                    src={item.img_src}
                    alt=""
                    className={styles["new-playlist-img"]}
                  />
                  <div className={styles["new-playlist-info"]}>
                    <p className="text-sm">{item.name_playlist}</p>
                    <div className={styles["new-playlist-view-like"]}>
                      <div className={styles["new-playlist-vl"]}>
                        <div className="play-gray"></div>
                        <div>{item.views}</div>
                      </div>
                      <div className={styles["new-playlist-vl"]}>
                        <div className="heart-gray"></div>
                        <div>{item.likes}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className={`${styles["new-playlist-author"]} px-2.5 py-2`}>{item.author}</p>
                <div className={`${styles["new-playlist-genre"]} px-2.5 py-2`}>{item.genre}</div>
                <div className={`${styles["new-playlist-tracks"]} px-2.5 py-2`}>
                  {item.tracks}
                </div>
                <div className={`${styles["new-playlist-action"]} px-2.5 py-2`}>
                  {item.isPlaying ? (
                    <div className="playing-icon"></div>
                  ) : (
                    <div className="play-black"></div>
                  )}
                  <div className="icon-20 heart-gray"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
