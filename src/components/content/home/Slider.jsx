'use client'
import { useEffect, useState } from 'react'
import styles from './../../../styles/content/home/Slider.module.css'
import TOP_PLAYLIST from '@/constant/topPlaylist'

function Slider({ t, list }) {
    const [pointer, setPointer] = useState(0);
    const [showBlurLeft, setShowBlurLeft] = useState(false);
    const [showBlurRight, setShowBlurRight] = useState(true);

    useEffect(() => {
        console.log(pointer);
        if (pointer === 0) {
            setShowBlurRight(true);
            setShowBlurLeft(false);
        } else if (pointer === - TOP_PLAYLIST.length + 5) {
            setShowBlurLeft(true);
            setShowBlurRight(false);
        }
    }, [pointer])

    const handleGoLeft = () => {
        if (pointer < 0) { setPointer(pointer => pointer + 1); }
    }

    const handleGoRight = () => {
        if (pointer > -TOP_PLAYLIST.length + 5) { setPointer(pointer => pointer - 1); }
    }

    const formatViews = (views) => {
        if(views < 1000) {
            return views.toString();
        } else {
            return (views / 1000).toFixed(3);
        }
    }

    return (
        <div className={styles['slider-container']}>
            <div className={styles['slider-header']}>
                <p className={styles['slider-title']}>
                    {t('top_playlist')}
                </p>
                <div className={styles['move-buttons']}>
                    <button className={`${styles['move-button']} left-arrow`} onClick={handleGoLeft}></button>
                    <button className={`${styles['move-button']} right-arrow`} onClick={handleGoRight}></button>
                </div>
            </div>
            <div className={styles['main-slider']} >
                {showBlurLeft && <div className={styles['blur-left']}>
                </div>}
                {showBlurRight && <div className={styles['blur-right']}>
                </div>}
                <div className={styles['slider']} style={{ transform: `translateX(${pointer * (374 + 16)}px)` }}>
                    {TOP_PLAYLIST.map((item, index) => <div className={styles['card']} key={index}>
                        <div className={styles['views']}>
                            <div className='headphones'></div>
                            <span className='text-xs text-white'>
                                {formatViews(item.views)}
                            </span>
                        </div>
                        <div className={styles['info']}>
                            <p className={styles['member-name']}>
                                {item.member}
                            </p>
                            <p className={styles['playlist-name']}>
                                {item.title}
                            </p>
                        </div>
                        <img src={item.img_src} className={styles['img']}/>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Slider