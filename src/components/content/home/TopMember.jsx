import TOP_MEMBERS from '@/constant/topMembers'

import styles from '@/styles/content/home/TopMember.module.css'

function TopMember({ t ,list }) {

    const formatViews = (view) => {
        if (view > 1000) {
            return (view / 1000).toFixed(3);
        } else {
            return view;
        }
    }

    return (
        <div className={styles['top-member-container']}>
            <p className={styles['title']}>
                {t('top_member')}
            </p>
            <div className={styles['top-members']}>
                {TOP_MEMBERS.map((item, index) => <div className={styles['top-member']} key={index}>
                    <img src={item.avatar} className={styles['avatar']} />
                    <div className={styles['artist-info']}>
                        <span className={styles['username']}>{item.member_username}</span>
                        <span className={styles['displayname']}>{item.member_display_name}</span>
                    </div>
                    <div className={styles['total-views']}>
                        <div className='play-white'></div>
                        <span className={styles['view-count']}>
                            {formatViews(item.totalViews)}
                        </span>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default TopMember