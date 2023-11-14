"use client";

import Link from "next/link";
import styles from "@/styles/auth/sign-in/SignIn.module.css";
import Input from "@/components/shared/Input";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { signIn } from "@/api/apiAuth";

const SignIn = () => {
  const t = useTranslations("Auth");
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const handleSubmit = async () => {
    const requestBody = {
      username: userName,
      password: passWord,
    };

    let responseHolder = {};

    fetch("http://192.168.1.123:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        responseHolder = response;
        return response.json();
      })
      .then((data) => {
        if (responseHolder.status === 200 || responseHolder.status === 201) {
          router.push("/home", {
            scroll: true,
          });
          localStorage.setItem("token", data.token);
        } else {
          console.log(data);
        }
      });
  };

  return (
    <div className={styles["main-session"]}>
      <div className={styles["signin-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signin-box"]}>
          <p className={styles["title"]}>{t("sign_in")}</p>
          <div className={styles["inputs-field"]}>
            <Input
              value={userName}
              type={"text"}
              placeholder={t("username")}
              icon={"person"}
              setDataState={setUserName}
            />
            <Input
              value={passWord}
              type={"password"}
              placeholder={t("password")}
              icon={"lock"}
              setDataState={setPassword}
            />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>{t("remember_me")}</span>
          </div>
          <button className="button-1" onClick={handleSubmit}>
            {t("submit")}
          </button>
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
