import React, { useState, useEffect } from "react";
import NewsItem from "../news-item";
import styles from "./news-home.module.css";
import API from "../../../API";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeNews = (props) => {
  const { t, i18n } = useTranslation();
  const [homeNews, setHomeNews] = useState([]);
  useEffect(() => {
    API.getNews().then((res) => {
      setHomeNews(res.data.results);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.news_header}>
          <span>{t("home_news.news")}</span>
          <Link to="/all_news" style={{ textDecoration: "none" }}>
            <button>{t("home_news.all_news")}</button>
          </Link>
        </div>
      </div>

      <div className={styles.list}>
        {homeNews.map((item) => {
          return (
            <div key={item.id} className={styles.list_wrapper}>
              <NewsItem data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeNews;
