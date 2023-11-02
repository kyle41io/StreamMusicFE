import Link from 'next/link'
import styles from './../../../styles/auth/sign-in/SignIn.module.css'
import Input from '@/components/shared/Input'

const SignIn = () => {
  return (
    <div className={styles['main-session']}>
      <div className={styles['signin-container']}>
        <div className={styles['listener-svg']}>
        </div>
        <div className={styles['signin-box']}>
          <p className={styles['title']}>
            Sign In
          </p>
          <div className={styles['inputs-field']}>
            <Input type={"text"} placeholder="Username" icon={"person"} />
            <Input type={"password"} placeholder={"Password"} icon={"lock"} />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>Remember me</span>
          </div>
          <button className='button-1'>Submit</button>
          <span className={styles['linkSignUp']}>
            or
            <Link href={"/auth/sign-up"} ><span className='link'> Sign Up</span></Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignIn