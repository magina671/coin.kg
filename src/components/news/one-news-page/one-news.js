import React, { useEffect, useState } from "react";
import styles from "./one-news.module.css";
import Header from "../../header";
import API from "../../../API";
import { getCurrentLng } from "../../../i18n";
import { editDateFromBack } from "..";
import {useTranslation} from 'react-i18next';

const OneNewsPage = (props) => {
  const currentId = props.match.params.id;
  const currentLng = getCurrentLng();
  const [title, setTitle] = useState("");
  const [data, setData] = useState({});
  const finalDate = editDateFromBack(data.publish);
  const {t,i18n} = useTranslation();
  useEffect(() => {
    API.getSelectedNews(currentId).then((res) => {
      const content =
        currentLng == "en-US"
          ? res.data.content_en
          : currentLng == "kg"
          ? res.data.content_kg
          : res.data.content_ru;
      let titleData =
        currentLng == "en-US"
          ? res.data.title_en
          : currentLng == "kg"
          ? res.data.title_kg
          : res.data.title_ru;
      setTitle(titleData);
      setData(res.data);
      document.getElementById("single_news_container").innerHTML = content;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content_wrapper}>
        <div className={styles.title}>{title}</div>
        <div id="single_news_container" className={styles.content}></div>
        <span className={styles.views}>
          {data.views} {t("home_news.views")}
        </span>
        <span className={styles.date}>{finalDate}</span>
      </div>
    </div>
  );
};

export default OneNewsPage;
