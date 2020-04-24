import React from "react";
import style from "./home-header.module.css";
import { Link } from "react-router-dom";
import britain from "../../../images/united-kingdom.svg";
import russian from "../../../images/russia.svg";
import kyrg from "../../../images/kyrgyzstan.svg";
import Header from "../../header";

export const HeaderContent = () => {
  return (
    <div className={style.top_wrapper}>
      <p className={style.logo}>COIN.KG</p>
      <ul className={style.menu}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <li className={style.first}>Главная страница</li>
        </Link>
        <li>
          Кредиты
          <ul className={style.submenu}>
            <Link
              to="/credit/1"
              style={{ textDecoration: "none", padding: "0", margin: "0" }}
            >
              <li>Потребительский</li>
            </Link>
            <Link to="/credit/2">
              <li>Авто-кредит</li>
            </Link>
            <Link to="/credit/3">
              <li>Ипотека</li>
            </Link>
            <Link to="/credit/4">
              <li>Для развития бизнеса</li>
            </Link>
            <Link to="/credit/5">
              <li>Агрокредит</li>
            </Link>
          </ul>
        </li>
        <Link to='/all_news'  style={{ textDecoration: "none", color: "white" }}>
          <li>Новости</li>
        </Link>
        <Link to="/about_us" style={{ textDecoration: "none", color: "white" }}>
          <li>О нас</li>
        </Link>
      </ul>
      <div className={style.flags}>
        <img src={britain} alt="english-language" />
        <img src={russian} alt="rus-language" />
        <img src={kyrg} alt="kyrg-language" />
      </div>
      <Link to="/autorization">
        <button className={style.login}>Войти</button>
      </Link>
    </div>
  );
};

const HomeHeader = (props) => {
  return (
    <div className={style.wrapper}>
      <HeaderContent />
      <div className={style.content_wrapper}>
        <div className={style.content}>
          <p>Получать кредит</p>
          <p>ещё легче</p>
        </div>
      </div>

      <div className={style.online_request}>
        <span>Онлайн заявка на кредит</span>
        <Link to="/online_request" style={{ padding: "0", margin: "0" }}>
          <div className={style.arrow}>&rarr;</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
