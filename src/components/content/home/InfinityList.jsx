import { useState, useEffect } from 'react';
import styles from './../../../styles/content/home/InfinityList.module.css'

function InfinityList({ songs, index}) {
    const [isScrollEnd, setIsScrollEnd] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsScrollEnd(true);
                } else {
                    setIsScrollEnd(false);
                }
            })
        })
        //console.log(document.querySelector(`.spinner-element.s${index}`));
        observer.observe(document.querySelector(`.spinner-element.s${index}`));
    }, [])

    return (
        <div className={styles['my-playlist-songs']}>
            {songs.map((song, songIndex) =>
                <div className={styles['my-playlist-song']} key={songIndex}>
                    <p className={styles['song-info']}>
                        {song.name_song} - {song.author_song}
                    </p>
                    <div className={styles['song-views']}>
                        <div className='play-white-2'></div>
                        <p>{song.views_song}</p>
                    </div>
                </div>
            )}
            <div className={`px-1 py-2 spinner-element s${index}`}>
                <div className={`${styles.loading} ${isScrollEnd && styles.appear}`}>
                </div>
            </div>
        </div>
    )
}

export default InfinityList