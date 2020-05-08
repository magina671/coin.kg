import React from "react";
import styles from "./success-story.module.css";
import Header from "../../header";
import picture1 from "../../../images/success_1.png";
import picture2 from "../../../images/success_2.png";
import kitaec from "../../../images/success_story_kitaec.png";
import { useTranslation } from "react-i18next";

const SuccessStory = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.title}>{t("header.success_story")}</div>
      <div className={styles.description}>
        <div className={styles.desc_content}>
          <p className={styles.con_title}>{t("success_story.title")}</p>
          <p className={styles.con_slogan}>{t("success_story.slogan")}</p>
          <p className={styles.con_plus}>
          {t("success_story.advantages")}
          </p>
          <p className={styles.con_con}>
          {t("success_story.story_first")}
          </p>
        </div>

        <img src={picture1} alt="picture1" className={styles.picture_one} />
        <img src={picture2} alt="picture1" className={styles.picture_two} />
      </div>
      <div className={styles.certain_user}>
        <div className={styles.user_content}>
          <p>
          {t("success_story.user_story")}
          </p>
        </div>
        <p className={styles.user_word}>{t("success_story.user_name")}</p>
        <img src={kitaec} alt="kitaec" className={styles.certain_user_img} />
      </div>
    </div>
  );
};

export default SuccessStory;
