'use client';

import { useState } from 'react'
import styles from '../../styles/shared/Input.module.css'

const Input = ({ value, type, placeholder, icon, setDataState, regex, errorMessage }) => {
  const [internalType, setInternalType] = useState(type);
  const [eye, setEye] = useState('open');
  const [status, setStatus] = useState('');

  const handleChangeValue = (event) => {
    setDataState(event.target.value)
    setStatus('typing');
  }

  const handleBlur = () => {
    if (!value.match(regex)) {
      setStatus('error');
    }
  }

  const handleToggleEye = () => {
    if (eye === 'open') {
      setEye('close');
      setInternalType('text');
    } else {
      setEye('open');
      setInternalType('password');
    }
  }

  return (
    <div>
      <div className={styles['input-container']}>
        <div className={`${styles['icon']} ${icon}`}></div>
        <input type={internalType} id={`input-${type}-${icon}`} className={`${styles['input-1']} ${styles[status]}`} placeholder={placeholder} value={value} onChange={event => { handleChangeValue(event) }} onBlur={handleBlur} />
        {type === 'password' && <div className={`${eye} ${styles['icon']} ${styles['right-icon']}`} onClick={handleToggleEye}></div>}
      </div>
      {status === 'error' && <p className={styles['error-msg']}>{errorMessage}</p>}
    </div>

  )
}

export default Input