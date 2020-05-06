import React from "react";
import style from "./home-header.module.css";
import { Link } from "react-router-dom";
import britain from "../../../images/united-kingdom.svg";
import russian from "../../../images/russia.svg";
import kyrg from "../../../images/kyrgyzstan.svg";
import Header from "../../header";
import { useTranslation } from "react-i18next";

export const HeaderContent = () => {
  const { t, i18n } = useTranslation();

  function handleChangeLang(lang) {
    i18n.changeLanguage(lang);
    window.location.reload(true);
  }

  return (
    <div className={style.top_wrapper}>
      <p className={style.logo}>COIN.KG</p>
      <ul className={style.menu}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <li className={style.first}>
            {t('header.home_page')}
            </li>
        </Link>
        <li>
        {t('header.credits')}
          <ul className={style.submenu}>
            <Link
              to="/credit/1"
              style={{ textDecoration: "none", padding: "0", margin: "0" }}
            >
              <li>{t('header.potreb')}</li>
            </Link>
            <Link to="/credit/2">
              <li>{t('header.auto')}</li>
            </Link>
            <Link to="/credit/3">
              <li>{t('header.ipoteka')}</li>
            </Link>
            <Link to="/credit/4">
              <li>{t('header.business')}</li>
            </Link>
            <Link to="/credit/5">
              <li>{t('header.agro')}</li>
            </Link>
          </ul>
        </li>
        <Link to="/all_news" style={{ textDecoration: "none", color: "white" }}>
          <li>{t('header.news')}</li>
        </Link>
        <Link to="/about_us" style={{ textDecoration: "none", color: "white" }}>
          <li>{t('header.about_us')}</li>
        </Link>
      </ul>
      <div className={style.flags}>
        <img
          src={britain}
          alt="english-language"
          onClick={() => handleChangeLang("en-US")}
        />
        <img
          src={russian}
          alt="rus-language"
          onClick={() => handleChangeLang("ru-RU")}
        />
        <img
          src={kyrg}
          alt="kyrg-language"
          onClick={() => handleChangeLang("kg")}
        />
      </div>
      <Link to="/autorization">
        <button className={style.login}>{t('header.login')}</button>
      </Link>
    </div>
  );
};

const HomeHeader = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.wrapper}>
      <HeaderContent />
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <p>{t('header.taking_credit')}</p>
          <p>{t('header.easier')}</p>
        </div>
      </div>

      <div className={style.online_request}>
        <span>{t('header.online_request')}</span>
        <Link to="/online_request" style={{ padding: "0", margin: "0" }}>
          <div className={style.arrow}>&rarr;</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
