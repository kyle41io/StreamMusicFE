'use client'
import { useEffect, useReducer, useRef, useState } from 'react'
import styles from './../../../styles/content/home/Slider.module.css'
import TOP_PLAYLIST from '@/constant/topPlaylist'

function Slider({ topPlayList_t, list }) {
    const [showBlurLeft, setShowBlurLeft] = useState(false);
    const [showBlurRight, setShowBlurRight] = useState(true);

    const sliderRef = useRef();
    const containerRef = useRef();
    const interValLeft = useRef();
    const interValRight = useRef();

    useEffect(() => {
        sliderRef.current.style.left = '0px';
        sliderRef.current.style.right = `${(-1790 + containerRef.current.offsetWidth)}px`;
    }, [])

    const handleGoLeft = () => {
        interValLeft.current = setInterval(() => {
            if (parseInt(sliderRef.current.style.left) >= 0) {
                clearInterval(interValLeft);
            } else {
                sliderRef.current.style.left = `${parseInt(sliderRef.current.style.left) + 10}px`
                sliderRef.current.style.right = `${parseInt(sliderRef.current.style.right) - 10}px`
                setShowBlurRight(true);
                setShowBlurLeft(false);
            }
        }, 50);
    }

    const handleGoRight = () => {
        interValRight.current = setInterval(() => {
            if (parseInt(sliderRef.current.style.left) <= (-1790 + containerRef.current.offsetWidth)) {
                clearInterval(interValRight)
            } else {
                sliderRef.current.style.left = `${parseInt(sliderRef.current.style.left) - 10}px`
                sliderRef.current.style.right = `${parseInt(sliderRef.current.style.right) + 10}px`
                setShowBlurLeft(true);
                setShowBlurRight(false);
            }
        }, 50);
    }

    const handleResize = () => {
        console.log('resized!');
    }

    const formatViews = (views) => {
        if (views < 1000) {
            return views.toString();
        } else {
            return (views / 1000).toFixed(3);
        }
    }

    return (
        <div className={styles['slider-container']} onResize={handleResize}>
            <div className={styles['slider-header']}>
                <p className={styles['slider-title']}>
                    {topPlayList_t}
                </p>
                <div className={styles['move-buttons']}>
                    <button className={`${styles['move-button']} left-arrow`} onMouseDown={handleGoLeft} onMouseUp={() => clearInterval(interValLeft.current)}></button>
                    <button className={`${styles['move-button']} right-arrow`} onMouseDown={handleGoRight} onMouseUp={() => clearInterval(interValRight.current)}></button>
                </div>
            </div>
            <div className={styles['main-slider']} ref={containerRef}>
                {showBlurLeft && <div className={styles['blur-left']}>
                </div>}
                {showBlurRight && <div className={styles['blur-right']}>
                </div>}
                <div className={styles['slider']} ref={sliderRef}>
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
                        <img src={item.img_src} className={styles['img']} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Slider