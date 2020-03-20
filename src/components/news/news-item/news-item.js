import React from "react";
import "./news-item.css";
import newsImage from '../../../images/news-1.png';

const NewsItem = () => {
  return (
    <div className="news_item__wrapper">
      <img src={newsImage} alt="news_item" />
      <div className="news_item_content">
        <p>2020: Внедрено индивидуальное кредитование</p>
        <span className="news_item_seeings">100 просмотров</span>
        <span className="news_item_date">9.03.20</span>
      </div>
    </div>
  );
};

export default NewsItem;
