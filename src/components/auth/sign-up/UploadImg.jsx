'use client'
import { useState } from 'react'
import styles from './../../../styles/auth/sign-up/UploadImg.module.css'

function UploadImg() {
    const [fileName, setFileName] = useState('No file chosen');

    const handleChange = () => {
        setFileName(event.target.files[0].name);
    }

    return (
        <div className={styles['upload-avt']}>
            <div className={styles['upload-button-container']}>
                <label htmlFor="input-avt" className={styles['button-upload-avt']}>
                    <div className='upload-icon'>
                    </div>
                    <span className='link text-xs'>
                        Upload Avatar
                    </span>
                    <input type="file" name="" id="input-avt" hidden onChange={handleChange}/>
                </label>
            </div>
            <span className={styles['file-name-label']}>
                {fileName}
            </span>
        </div>
    )
}

export default UploadImg