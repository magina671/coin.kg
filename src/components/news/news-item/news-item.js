import React from "react";
import styles from "./news-item.module.css";
import newsImage from '../../../images/news-1.png';

const NewsItem = () => {
  return (
    <div className="">
      <img src={newsImage} alt="news_item" />
      <div className="">
        <p>2020: Внедрено индивидуальное кредитование</p>
        <span className="">100 просмотров</span>
        <span className="">9.03.20</span>
      </div>
    </div>
  );
};

export default NewsItem;
