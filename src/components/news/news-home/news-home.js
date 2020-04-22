import React, { useState, useEffect } from "react";
import NewsItem from "../news-item";
import styles from "./news-home.module.css";
import API from "../../../API";
import { Link } from "react-router-dom";

const HomeNews = (props) => {
  const [homeNews, setHomeNews] = useState([]);
  useEffect(() => {
    API.getNews().then((res) => {
      setHomeNews(res.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.news_header}>
          <span>Новости</span>
          <Link to="/all_news" style={{ textDecoration: "none" }}>
            <button>Все новости</button>
          </Link>
        </div>
      </div>

      <div className={styles.list}>
        {homeNews.map((item) => {
          return <NewsItem data={item} />;
        })}
      </div>
    </div>
  );
};

export default HomeNews;
