import styles from './../../styles/shared/PlayingBeat.module.css'

function PlayingBeat({onClick}) {
    return (
        <div className={`${styles['button-container']} cursor-pointer`} onClick={() => onClick(null)}>
            <div className={styles['col-1']}>
            </div>
            <div className={styles['col-2']}>
            </div>
            <div className={styles['col-3']}>
            </div>
            <div className={styles['col-4']}>
            </div>
        </div>
    )
}

export default PlayingBeat