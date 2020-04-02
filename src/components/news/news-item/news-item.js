import React from "react";
import styles from "./news-item.module.css";
import newsImage from '../../../images/news-1.png';

const NewsItem = (props) => {
  const {data} = props;
  return (
    <div className={styles.wrapper}>
      <img src={newsImage} alt="news_item" />
      <div className={styles.content_wrapper}>
        <p className={styles.content}>{data.title}</p>
        <span className={styles.views}>{data.views} просмотров</span>
        <span className={styles.date}>9.03.20</span>
      </div>
    </div>
  );
};

export default NewsItem;
