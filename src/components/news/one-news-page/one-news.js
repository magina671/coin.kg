import React, { useEffect, useState } from "react";
import styles from "./one-news.module.css";
import Header from "../../header";
import API from "../../../API";

const OneNewsPage = (props) => {
  const [data, setData] = useState({});
  console.log("OneNewsPage -> data", data)
  const currentId = props.match.params.id;
  useEffect(() => {
    API.getSelectedNews(currentId).then((res) => {
      setData(res.data);
    });
    document.getElementById('single_news_container').innerHTML = data.content
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
