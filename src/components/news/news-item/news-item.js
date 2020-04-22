import React from "react";
import styles from "./news-item.module.css";
import newsImage from '../../../images/news-1.png';

const NewsItem = (props) => {
  const {data} = props;
  let publishDate = new Date(data.publish);
  let day = publishDate.getDate();
  let month = publishDate.getMonth()+1;
  let year = publishDate.getFullYear();
  let finalDate = `${day}.${month}.${year}`
  return (
    <div className={styles.wrapper}>
      <img src={newsImage} alt="news_item" />
      <div className={styles.content_wrapper}>
        <p className={styles.content}>{data.title}</p>
        <span className={styles.views}>{data.views} просмотров</span>
        <span className={styles.date}>{finalDate}</span>
      </div>
    </div>
  );
};

export default NewsItem;
