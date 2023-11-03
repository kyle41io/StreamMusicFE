import Link from 'next/link'
import styles from './../../../styles/auth/sign-in/SignIn.module.css'
import Input from '@/components/shared/Input'

const SignIn = ({ t }) => {
  return (
    <div className={styles['main-session']}>
      <div className={styles['signin-container']}>
        <div className={styles['listener-svg']}>
        </div>
        <div className={styles['signin-box']}>
          <p className={styles['title']}>
            {t("sign_in")}
          </p>
          <div className={styles['inputs-field']}>
            <Input type={"text"} placeholder={t('username')} icon={"person"} />
            <Input type={"password"} placeholder={t('password')} icon={"lock"} />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>{t("remember_me")}</span>
          </div>
          <button className='button-1'>{t('submit')}</button>
          <span className={styles['linkSignUp']}>
            {t('or')}
            <Link href={"/auth/sign-up"} ><span className='link'>{t('sign_up')}</span></Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignIn