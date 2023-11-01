'use client'
import styles from './../../../styles/auth/sign-up/UploadImg.module.css'

function UploadImg() {
    return (
        <div className={styles['upload-avt']}>
            <div className={styles['upload-button-container']}>
                <label htmlFor="input-avt" className={styles['button-upload-avt']}>
                    <div className='upload-icon'>
                    </div>
                    <span className='link text-xs'>
                        Upload Avatar
                    </span>
                    <input type="file" name="" id="input-avt" hidden/>
                </label>
            </div>
            <span>
                No file chosen
            </span>
        </div>
    )
}

export default UploadImg