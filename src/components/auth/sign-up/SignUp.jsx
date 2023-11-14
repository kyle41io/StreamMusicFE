'use client'

import styles from "./../../../styles/auth/sign-up/SignUp.module.css";
import Input from "@/components/shared/Input";
import UploadImg from "./UploadImg";
import Link from "next/link";
import ToastMessage from "@/components/shared/ToastMessage";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

function SignUp() {
  const t = useTranslations("Auth")
  const router = useRouter();

  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [isErrorDisplayName, setIsErrorDisplayName] = useState(false);
  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorRepeatPassword, setIsErrorRepeatPassword] = useState(false);

  const handleSend = () => {
    const body = {
      name: displayName,
      username: userName,
      password: password,
    };

    let responsePlaceHolder = {};

    fetch("http://192.168.1.123:3000/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        responsePlaceHolder = response;
        return response.json();
      })
      .then((data) => {
        if(responsePlaceHolder.status === 200 || responsePlaceHolder.status === 201) {
          router.push('/home', {
            scroll: true
          })
        } else {
          console.log(data);
        }
      });
  };

  const handleBlurDisplayName = () => {
    if(!displayName.match(/^.{6,32}$/)) {

    }
  }

  const handleBlurUsername = () => {

  }

  const handleBlurPassword = () => {

  }

  const handleBlurRepeatPassword = () => {
    
  }

  return (
    <div className={styles["main-session"]}>
      <div className={styles["signup-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signup-box"]}>
          <p className={styles["title"]}>{t("sign_up")}</p>
          <div className={styles["inputs-field"]}>
            <Input
              value={displayName}
              type={"text"}
              placeholder={t("display_name")}
              icon={"card"}
              setDataState={setDisplayName}
              onBlur={handleBlurDisplayName}
              isError={isErrorDisplayName}
              errorMessage={"Display name must have 6-32 characters"}
            />
            <Input
              value={userName}
              type={"text"}
              placeholder={t("username")}
              icon={"person"}
              setDataState={setUserName}
              onBlur={handleBlurUsername}
              isError={isErrorUserName}
              errorMessage={"Username must have 5-32 characters"}
            />
            <Input
              value={password}
              type={"password"}
              placeholder={t("password")}
              icon={"lock"}
              setDataState={setPassword}
              onBlur={handleBlurPassword}
              isError={isErrorPassword}
              errorMessage={"Password must have 1 uppercase, 1 special character, 1 number and 8-32 characters"}
            />
            <Input
              value={repeatPassword}
              type={"password"}
              placeholder={t("repeat_password")}
              icon={"key"}
              setDataState={setRepeatPassword}
              onBlur={handleBlurRepeatPassword}
              isError={isErrorRepeatPassword}
              errorMessage={"Please make sure that you have correctly repeated your password!"}
            />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>
              {t("i_accept")} <span className="link">{t("term_of_use")}</span>
            </span>
          </div>
          <UploadImg
            uploadAvatar={t("upload_avatar")}
            noFileChosen={t("no_file_chosen")}
          />
          <button className="button-1" onClick={handleSend}>
            {t("send")}
          </button>
          <span className={styles["linkSignUp"]}>
            {t("or")}
            <Link href={"/auth/sign-in"}>
              <span className="link">{t("sign_in")}</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
