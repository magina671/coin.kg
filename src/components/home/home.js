import React, { useState, useEffect } from "react";
import HomeNews from "../news/news-home";
import style from "./home.module.css";
import API from "../../API";
import HomeHeader from "./home-header";
import CreditInfo from "./credit-info";
import HelpForm from "./help-form";
import Footer from '../footer';


const Home = props => {
  const [news, setNews] = useState([]);

  // useEffect(()=>{
  // },[]);

  return (
    <div className={style.wrapper}>
      <HomeHeader />
      <div className={style.intro}>
        <div className={style.intro_header}>
          <p>Чем мы занимаемся?</p>
        </div>
        <div className={style.intro_desc}>
          <p>Предоставляем возможность быстрого кредита, упрощая вашу жизнь.</p>
        </div>
      </div>
      <div className={style.statistics}>
        <div className={style.stat_content}>
          <div className={style.stat_content_list}>
            <div>
              <p>10+</p>
              <span>обслуживающих стран</span>
            </div>
            <div>
              <p>1м</p>
              <span>клиентов</span>
            </div>
            <div>
              <p>5</p>
              <span>видов кредитов</span>
            </div>
          </div>
        </div>
      </div>
      <CreditInfo />
      <HomeNews {...props}/>
      <HelpForm />
    </div>
  );
};

export default Home;
