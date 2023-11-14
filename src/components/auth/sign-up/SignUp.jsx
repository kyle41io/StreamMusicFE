import styles from "./../../../styles/auth/sign-up/SignUp.module.css";
import Input from "@/components/shared/Input";
import UploadImg from "./UploadImg";
import Link from "next/link";

function SignUp({ t }) {
  return (
    <div className={styles["main-session"]}>
      <div className={styles["signup-container"]}>
        <div className={styles["listener-svg"]}></div>
        <div className={styles["signup-box"]}>
          <p className={styles["title"]}>{t("sign_up")}</p>
          <div className={styles["inputs-field"]}>
            <Input
              type={"text"}
              placeholder={t("display_name")}
              icon={"card"}
            />
            <Input type={"text"} placeholder={t("username")} icon={"person"} />
            <Input
              type={"password"}
              placeholder={t("password")}
              icon={"lock"}
            />
            <Input
              type={"password"}
              placeholder={t("repeat_password")}
              icon={"key"}
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
          <button className="button-1">{t("send")}</button>
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
