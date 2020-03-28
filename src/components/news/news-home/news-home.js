import React, { useState, useEffect } from "react";
import NewsItem from "../news-item";
import styles from "./news-home.module.css";

const HomeNews = props => {
  return (
    <div className={styles.wrapper}>
      {/* news */}
      {/* <div className="">
        <div >
          <span>Новости</span>
          <button>Все новости</button>
        </div>
      </div>

      <div className="">
        <NewsItem />
      </div> */}
    </div>
  );
};

export default HomeNews;
