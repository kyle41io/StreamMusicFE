"use client";

import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { SIGN_IN_INPUTS } from "@/constant/configInputs";

import { UserData } from "@/store/UserDataProvider";

import { signIn } from "@/api/apiAuth";

import Link from "next/link";
import Input from "@/components/shared/Input";
import ToastMessage from "@/components/shared/ToastMessage";

import styles from "@/styles/auth/sign-in/SignIn.module.css";

const SignInPage = () => {
  const t = useTranslations("Auth");
  const router = useRouter();

  const { setIsLogin } = useContext(UserData);

  const [signInForm, setSignInForm] = useState({
    userName: "",
    passWord: "",
  });

  const [isErrorObject, setIsErrorObject] = useState({
    isErrorUsername: false,
    isErrorPassword: false
  })

  const isError = useMemo(() => isErrorObject.isErrorUsername || isErrorObject.isErrorPassword || !signInForm.userName || !signInForm.passWord,
    [signInForm.userName, signInForm.passWord, isErrorObject.isErrorUsername, isErrorObject.isErrorPassword]
  );

  const handleSubmit = async () => {
    const requestBody = {
      username: signInForm.userName,
      password: signInForm.passWord,
    };
    const response = await signIn(requestBody);
    if (response.status === 200 || response.status === 201) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.userId);
      router.push("/");
    } else {
      console.log(response.data);
    }
  };

  const handleBlurForm = (item) => {
      setIsErrorObject(prev => ({
        ...prev,
        [item.isError_key]: !signInForm[item.id].match(item.regex)
      }))
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      router.push('/')
    }
  })

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, []);

  return (
    <div className={styles["main-session"]}>
      <div className={styles["signin-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signin-box"]}>
          <p className={styles["title"]}>{t("sign_in")}</p>
          <div className={styles["inputs-field"]}>
            {SIGN_IN_INPUTS.map((item, index) => (
              <Input
                key={index}
                id={item.id}
                value={signInForm[item.id]}
                type={item.type}
                placeholder={item.placeholder}
                icon={item.icon}
                isError={isErrorObject[item.isError_key]}
                errorMessage={item.errorMessage}
                setDataState={setSignInForm}
                onBlur={() => {
                  handleBlurForm(item);
                }}
              />
            ))}
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>{t("remember_me")}</span>
          </div>
          <button
            className="button-1"
            onClick={handleSubmit}
            disabled={isError}
          >
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

export default SignInPage;
