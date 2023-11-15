
import { useTranslations } from "use-intl";

import PlayingBeat from "./PlayingBeat";

import styles from "@/styles/shared/CommonTable.module.css";

function CommonTable({ list, headerList, playingIndex, setPlayingIndex }) {

  const t = useTranslations("Home");

  const createDataList = (item, index) => {
    return {
      no: item.no,
      song: (
        <>
          <img
            src={item.song.img_src}
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
        {index === playingIndex ? <PlayingBeat onClick={setPlayingIndex}/> : <div className="play-black cursor-pointer" onClick={() => setPlayingIndex(index)}></div>}
        <div className="icon-20 heart-gray"></div>
      </>
    };
  };

  return (
    <div className={styles['new-playlists']}>
      <div className={styles["header"]}>
        {headerList.map((item, index) =>
          <div className={styles[item.key]} key={index}>{t(item.label)}</div>
        )}
      </div>
      {(list.map((i, id) => createDataList(i, id))).map((item, index) =>
        <div className={`${styles['new-playlist']} ${index === playingIndex && styles.playing}`} key={index}>
          {headerList.map((headerItem, headerIndex) =>
            <div className={`${styles[`new-playlist-${headerItem.key}`]} px-2.5 py-2`} key={headerIndex}>
              {item[headerItem.key]}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CommonTable;
