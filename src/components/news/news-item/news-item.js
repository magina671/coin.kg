import React from "react";
import styles from "./news-item.module.css";
import { editDateFromBack } from "../index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NewsItem = (props) => {
  const { t, i18n } = useTranslation();
  const { data } = props;
  const finalDate = editDateFromBack(data.publish);
  return (
    <Link
      to={`/one_news/${data.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className={styles.wrapper}>
        <img src={data.image} width="271px" height="192px" alt="news_item" />
        <div className={styles.content_wrapper}>
          <p className={styles.content}>{data.title}</p>
          <span className={styles.views}>{data.views} {t('home_news.views')}</span>
          <span className={styles.date}>{finalDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
