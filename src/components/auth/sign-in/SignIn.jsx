'use client'

import Link from "next/link";
import styles from "./../../../styles/auth/sign-in/SignIn.module.css";
import Input from "@/components/shared/Input";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { signIn } from "@/api/apiAuth";
import ToastMessage from "@/components/shared/ToastMessage";

const SignIn = () => {
  const t = useTranslations("Auth");
  const router = useRouter();

  const [isRemember, setIsRemember] = useState(false);
  const [userName, setUserName] = useState('');
  const [passWord, setPassword] = useState('');

  const [displayToast, setDisplayToast] = useState(false);
  const [isErrorUsername, setIsErrorUsername] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const isError = useMemo(() => isErrorUsername || isErrorPassword || !userName || !passWord, [isErrorUsername, isErrorPassword])

  const handleSubmit = () => {
    setDisplayToast(true)
    setTimeout(() => {
      setDisplayToast(false);
    }, 3000);
    const requestBody = {
      username: userName,
      password: passWord
    }

    let responseHolder = {};

    fetch('http://192.168.1.123:3000/auth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        responseHolder = response;
        return response.json();
      })
      .then(data => {
        if (responseHolder.status === 200 || responseHolder.status === 201) {
          router.push('/home', {
            scroll: true
          });
          if (isRemember) {
            localStorage.setItem('token', data.token);
          }
        } else {
          console.log(data);
        }
      })
  }

  const handleBlurUsername = () => {
    if (!userName.match(/^.{5,32}$/)) {
      setIsErrorUsername(true);
    } else {
      setIsErrorUsername(false);
    }
  }

  const handleBlurPassword = () => {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/;
    if (!passWord.match(regex)) {
      console.log('password fake');
      setIsErrorPassword(true);
    } else {
      console.log('password riel');
      setIsErrorPassword(false);
    }
  }

  return (
    <div className={styles["main-session"]}>
      <ToastMessage
        onClose={() => setDisplayToast(false)}
        error={isError}
        successMessage={'Login successfully!'}
        showToast={displayToast}
      />
      <div className={styles["signin-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signin-box"]}>
          <p className={styles["title"]}>{t("sign_in")}</p>
          <div className={styles["inputs-field"]}>
            <Input value={userName} type={"text"} placeholder={t("username")} icon={"person"} setDataState={setUserName} onBlur={handleBlurUsername} isError={isErrorUsername} errorMessage={"Username must have 5-32 characters"} />
            <Input
              value={passWord}
              type={"password"}
              placeholder={t("password")}
              icon={"lock"}
              setDataState={setPassword}
              onBlur={handleBlurPassword}
              isError={isErrorPassword}
              errorMessage={"Password must contain 1 upper case, 1 special characters, 1 number and have length from 8 to 32 characters"}
            />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} onChange={() => setIsRemember(true)} />
            <span>{t("remember_me")}</span>
          </div>
          <button className="button-1" onClick={handleSubmit} disabled={isError}>{t("submit")}</button>
          <span className={styles["linkSignUp"]}>
            {t("or")}
            <Link href={"/auth/sign-up"} scroll={true}>
              <span className="link">{t("sign_up")}</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
