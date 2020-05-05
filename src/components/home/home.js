import React from "react";
import HomeNews from "../news/news-home";
import style from "./home.module.css";
import HomeHeader from "./home-header";
import CreditInfo from "./credit-info";
import HelpForm from "./help-form";
import { useTranslation } from "react-i18next";

const Home = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={style.wrapper}>
      <HomeHeader />
      <div className={style.intro}>
        <div className={style.intro_header}>
          <p>{t('home.what_we_do')}</p>
        </div>
        <div className={style.intro_desc}>
          <p>{t('home.answer')}</p>
        </div>
      </div>
      <div className={style.statistics}>
        <div className={style.stat_content}>
          <div className={style.stat_content_list}>
            <div>
              <p>10+</p>
              <span>{t('home.regions')}</span>
            </div>
            <div>
              <p>1м</p>
              <span>{t('home.clients')}</span>
            </div>
            <div>
              <p>5</p>
              <span>{t('home.credit_num')}</span>
            </div>
          </div>
        </div>
      </div>
      <CreditInfo />
      <HomeNews {...props} />
      <HelpForm />
    </div>
  );
};

export default Home;
