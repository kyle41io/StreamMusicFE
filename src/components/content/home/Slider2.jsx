import { useTranslations } from 'next-intl'
import styles from './../../../styles/content/home/Slider2.module.css'
import TOP_PLAYLIST from '@/constant/topPlaylist';
import { useRef, useState } from 'react';

export default function Slider2({ list }) {
    const t = useTranslations("Home");

    const [isBlurLeft, setIsBlurLeft] = useState(false);

    const sliderRef = useRef();

    const handleGoLeft = () => {
        sliderRef.current.scrollLeft -= 301;
        setIsBlurLeft(false)
        console.log(sliderRef.current.scrollLeft);
    }

    const handleGoRight = () => {
        sliderRef.current.scrollLeft += 301;
        setIsBlurLeft(true)
        console.log(sliderRef.current.scrollLeft);
    }

    return (
        <div className={styles['slider-container']}>
            <div className={styles['slider-header']}>
                <p className='text-4xl font-bold'>{t('top_playlist')}</p>
                <div className={styles['move-buttons']}>
                    <button className={`${styles['left-arrow']} ${styles.buttons}`} onClick={handleGoLeft}></button>
                    <button className={`${styles['right-arrow']} ${styles.buttons}`} onClick={handleGoRight}></button>
                </div>
            </div>
            <div className={styles['blurs-container']}>
                {isBlurLeft && <div className={styles['blur-left']}>
                </div>}
                {!isBlurLeft && <div className={styles['blur-right']}>
                </div>}
            </div>

            <div className={styles['slider-view']} ref={sliderRef}>

                <div className={styles['slider']} >
                    {TOP_PLAYLIST.map((item, index) => <div className={styles['card']} key={index}>
                        <div className={styles['views']}>
                            <div className='headphones'></div>
                            <span className='text-xs text-white'>
                                {(item.views)}
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
