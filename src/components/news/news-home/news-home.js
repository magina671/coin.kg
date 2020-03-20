import React, { useState, useEffect } from "react";
import NewsItem from "../news-item";
import "./news-home.css";

const HomeNews = props => {
  return (
    <div className="home__news__container">
      <div className="home__news__header">
        <div >
          <span>Новости</span>
          <button>Все новости</button>
        </div>
      </div>

      <div className="home_news_wrapper">
        <NewsItem />
      </div>
    </div>
  );
};

export default HomeNews;
