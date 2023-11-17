"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import useUpload from "@/hooks/useUpload";

import { signUp } from "@/api/apiAuth";

import { INPUT_SIGN_UP } from "@/constant/signUpInputs";

import Input from "@/components/shared/Input";
import UploadImg from "./UploadImg";
import Link from "next/link";
import ToastMessage from "@/components/shared/ToastMessage";

import IcCard from "@/assets/icons/IcCard";
import IcPerson from "@/assets/icons/IcPerson";
import IcLock from "@/assets/icons/IcLock";
import IcKey from "@/assets/icons/IcKey";

import styles from "@/styles/auth/sign-up/SignUp.module.css";

function SignUp() {
  const t = useTranslations("Auth");
  const router = useRouter();

  const [signUpForm, setSignUpForm] = useState({
    displayName: "",
    userName: "",
    password: "",
    repeatPassword: "",
  });
  const [img, setImg] = useState();

  const [isErrorObject, setIsErrorObject] = useState({
    isErrorDisplayName: false,
    isErrorUserName: false,
    isErrorPassword: false,
    isErrorRepeatPassword: false
  })

  const [isErrorDisplayName, setIsErrorDisplayName] = useState(false);
  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isErrorRepeatPassword, setIsErrorRepeatPassword] = useState(false);

  // const isError = useMemo(() => {
  //   return (
  //     isErrorDisplayName ||
  //     isErrorUserName ||
  //     isErrorPassword ||
  //     isErrorRepeatPassword ||
  //     !displayName ||
  //     !userName ||
  //     !password ||
  //     !repeatPassword
  //   );
  // }, [
  //   displayName,
  //   userName,
  //   password,
  //   repeatPassword,
  //   isErrorDisplayName,
  //   isErrorUserName,
  //   isErrorPassword,
  //   isErrorRepeatPassword,
  // ]);

  const handleSend = async () => {
    const body = {
      name: displayName,
      username: userName,
      password: password,
      image: await useUpload(img),
    };

    const response = await signUp(body);
    if (response.status === 201) {
      router.push("/auth/sign-in");
    }
  };

  const handleBlurForm = (key) => {
    console.log(key);
  }

  return (
    <div className={styles["main-session"]}>
      <div className={styles["signup-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signup-box"]}>
          <p className={styles["title"]}>{t("sign_up")}</p>
          <div className={styles["inputs-field"]}>
            {INPUT_SIGN_UP.map((item, index) => (
              <Input
                key={index}
                id={item.id}
                value={signUpForm[item.id]}
                type={item.type}
                placeholder={item.placeholder}
                icon={item.icon}
                isError={isErrorObject[item.isError_key]}
                errorMessage={item.errorMessage}
                setDataState={setSignUpForm}
                onBlur={() => {
                  handleBlurForm(item.isError_key);
                }}
              />
            ))}
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <span>
              {t("i_accept")} <span className="link">{t("term_of_use")}</span>
            </span>
          </div>
          <UploadImg onChange={setImg} />
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
