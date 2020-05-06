import React, { useEffect, useState } from "react";
import styles from "./one-news.module.css";
import Header from "../../header";
import API from "../../../API";
import { getCurrentLng } from "../../../i18n";

const OneNewsPage = (props) => {
  const [data, setData] = useState({});
  const currentId = props.match.params.id;
  const currentLng = getCurrentLng();
  const title =
    currentLng == "en-US"
      ? data.content_en
      : currentLng == "kg"
      ? data.content_kg
      : data.content_ru;
  useEffect(() => {
    API.getSelectedNews(currentId).then((res) => {
      setData(res.data);
    });
    document.getElementById('single_news_container').innerHTML = title
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div id='single_news_container' className={styles.content}>

      </div>
    </div>
  );
};

export default OneNewsPage;
