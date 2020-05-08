import React, { useEffect, useState } from "react";
import styles from "./one-news.module.css";
import Header from "../../header";
import API from "../../../API";
import { getCurrentLng } from "../../../i18n";

const OneNewsPage = (props) => {
  const currentId = props.match.params.id;
  const currentLng = getCurrentLng();

  useEffect(() => {
    API.getSelectedNews(currentId).then((res) => {
      const title =
        currentLng == "en-US"
          ? res.data.content_en
          : currentLng == "kg"
          ? res.data.content_kg
          : res.data.content_ru;
      console.log("%c OneNewsPage -> title", "color:red", title);
      document.getElementById("single_news_container").innerHTML = title;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div id="single_news_container" className={styles.content}></div>
    </div>
  );
};

export default OneNewsPage;
