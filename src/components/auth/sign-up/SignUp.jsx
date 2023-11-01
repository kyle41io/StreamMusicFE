import styles from './../../../styles/auth/sign-up/SignUp.module.css'
import Input from '@/components/shared/Input'
import UploadImg from './UploadImg'
import Link from 'next/link'


function SignUp() {
    return (
        <div className={styles['main-session']}>
            <div className={styles['signup-container']}>
                <div className={styles['listener-svg']}>
                </div>
                <div className={styles['signup-box']}>
                    <p className={styles['title']}>
                        Sign Up
                    </p>
                    <div className={styles['inputs-field']}>
                        <Input type={"text"} placeholder="Display name" icon={"card"} />
                        <Input type={"text"} placeholder="Username" icon={"person"} />
                        <Input type={"password"} placeholder={"Password"} icon={"lock"} />
                        <Input type={"password"} placeholder={"Password"} icon={"key"} />
                    </div>
                    <div className={styles.remember}>
                        <input type="checkbox" name="" id="" className={styles.checkbox} />
                        <span>I accept <span className="link">Term of use</span></span>
                    </div>
                    <UploadImg />
                    <button className='button-1'>Send</button>
                    <span className={styles['linkSignUp']}>
                        or
                        <Link href={"/auth/sign-in"} ><span className='link'> Sign In</span></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignUp