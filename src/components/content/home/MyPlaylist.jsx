'use client'

import { useTranslations } from 'next-intl'
import styles from './../../../styles/content/home/MyPlaylist.module.css'
import Link from 'next/link';
import { MY_PLAYLISTS } from '@/constant/myplaylists';
import PagingBar from '@/components/shared/PagingBar';
import InfinityList from './InfinityList';
import { useEffect, useRef, useState } from 'react';

function MyPlaylist() {
    const [currentPage, setCurrentPage] = useState(1);

    const t = useTranslations("Home");

    return (
        <div className={styles['my-playlists-container']}>
            <div className={styles['my-playlists-header']}>
                <p className={styles['title']}>
                    {t("my_playlist")}
                </p>
                <Link href={"./../upload"} className='links'>{t('create_new')}</Link>
            </div>
            <div>
                <div className={styles['my-playlists']}>
                    {MY_PLAYLISTS.map((item, index) =>
                        <div className={styles['my-playlist']} key={index}>
                            <img src={item.img_src} className={styles['my-playlist-bg']} />
                            <div className={styles['my-playlist-img-container']}>
                                <img src={item.img_src} className={styles['my-playlist-img']} />
                                <Link href={"./../music-detail"} className='play-orange'></Link>
                            </div>
                            <InfinityList index={index}/>
                        </div>
                    )}
                </div>
                <PagingBar currentPage={currentPage} onClick={setCurrentPage} maxPage={20} />
            </div>
        </div>
    )
}

export default MyPlaylist