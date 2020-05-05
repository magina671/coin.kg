import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
import {useTranslation } from 'react-i18next'; 

const Footer = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <p>Coin</p>
      </div>
      <div className={style.references}>
        <div className={style.title}>
  <p>{t('footer.menu')}</p>
          <div className={style.hr}></div>
        </div>
        <ul className={style.menu}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>{t('footer.main_page')}</li>
          </Link>
          <Link
            to="/about_us"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li>{t('footer.about_us')}</li>
          </Link>
          <Link
            to="/all_news"
            style={{ textDecoration: "none", color: "white" }}
          >
          <li>{t('footer.news')}</li>
          </Link>
          <Link
            to="/online_request"
            style={{ textDecoration: "none", color: "white" }}
          >
          <li>{t('footer.online_request')}</li>
          </Link>
        </ul>
      </div>
      <div className={style.references}>
        <div className={style.title}>
          <p>{t('footer.contacts')}</p>
          <div className={style.hr}></div>
        </div>
        <ul>
          <li>neobiskg@gmail.com</li>
          <li>+996 550 225 310</li>
          <li>+996 700 636 247</li>
        </ul>
      </div>
      <div>
        <div className={style.title}>
          <p>{t('footer.find')}</p>
          <div className={style.hr}></div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A896d1d50418f1cc7768da5c0242887aedfbeb6180a1cfe8b59022e538a91c71e&amp;source=constructor"
          width="417"
          height="240"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};
export default Footer;
