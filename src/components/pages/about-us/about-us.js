import React from "react";
import style from "./about-us.module.css";
import Header from "../../header";
import picture1 from "../../../images/about_us_1.png";
import picture2 from "../../../images/about_us_2.png";
import picture3 from "../../../images/about_us_3.png";
import { useTranslation } from "react-i18next";

export const Title = (text) => {
  return (
    <div className={style.title_about_us}>
      <div className={style.title_gradient}>
        <p>{text.text}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.wrapper}>
      <Header />
      <Title text={t("footer.about_us")} />
      <div className={style.slogan}>
        <p>{t("about_us.who_we")}</p>
        <span>{t("about_us.slogan")}</span>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.info}>
          <p className={style.info_number}>01</p>
          <p className={style.info_title}>{t("about_us.title_1")}</p>
          <p className={style.info_description}>{t("about_us.desc_1")}</p>
        </div>
        <div className={style.picture_wrapper}>
          <img src={picture1} className={style.image} alt="first_about_us" />
          <div className={style.substrate}></div>
        </div>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.picture_wrapper_2}>
          <img src={picture2} className={style.image} alt="first_about_us" />
          <div className={style.substrate_2}></div>
        </div>
        <div className={style.info}>
          <p className={style.info_number_2}>02</p>
          <p className={style.info_title}>{t("about_us.title_2")}</p>
          <p className={style.info_description}>{t("about_us.desc_2")}</p>
        </div>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.info}>
          <p className={style.info_number_3}>03</p>
          <p className={style.info_title}>{t("about_us.title_3")}</p>
          <p className={style.info_description}>{t("about_us.desc_3")}</p>
        </div>
        <div className={style.picture_wrapper}>
          <img src={picture3} className={style.image} alt="first_about_us" />
          <div className={style.substrate_3}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
