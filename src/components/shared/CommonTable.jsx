import { useTransition } from "react";
import styles from "./../../styles/shared/CommonTable.module.css";
import { useTranslations } from "use-intl";

function CommonTable({ list, headerList }) {

  const t = useTranslations("Home");

  const createDataList = (item) => {
    return {
      no: item.no,
      song: (
        <>
          <img
            src={item.song.img_src}
            alt=""
            className={styles["new-playlist-img"]}
          />
          <div className={styles["new-playlist-info"]}>
            <p className="text-sm">{item.song.name_playlist}</p>
            <div className={styles["new-playlist-view-like"]}>
              <div className={styles["new-playlist-vl"]}>
                <div className="play-gray"></div>
                <div>{item.song.views}</div>
              </div>
              <div className={styles["new-playlist-vl"]}>
                <div className="heart-gray"></div>
                <div>{item.song.likes}</div>
              </div>
            </div>
          </div>
        </>
      ),
      author: item.author,
      genre: item.genre,
      tracks: item.tracks,
      isPlaying: <>
        {item.isPlaying ? <div className="playing-icon"></div> : <div className="play-black"></div>}
        <div className="icon-20 heart-gray"></div>
      </>
    };
  };

  return (
    <div className={styles['new-playlists']}>
      <div className={styles["header"]}>
        {headerList.map((item) =>
          <div className={styles[item.key]}>{t(item.label)}</div>
        )}
      </div>
      {(list.map(i => createDataList(i))).map((item) =>
        <div className={styles['new-playlist']}>
          {headerList.map((headerItem) =>
            <div className={`${styles[`new-playlist-${headerItem.key}`]} px-2.5 py-2`}>
              {item[headerItem.key]}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CommonTable;
