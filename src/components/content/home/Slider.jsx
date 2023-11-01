'use client'
import styles from './../../../styles/content/home/Slider.module.css'

function Slider () {
    return(
        <div className={styles['slider-container']}>
            <div className={styles['slider-header']}>
                <p className={styles['slider-title']}>
                    Top Playlist
                </p>
                <div className={styles['move-buttons']}>
                    <button className={`${styles['move-button']} left-arrow`}></button>
                    <button className={`${styles['move-button']} right-arrow`}></button>
                </div>
            </div>
            <div className={styles['main-slider']}>

            </div>
        </div>
    )
}

export default Slider