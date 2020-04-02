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
      <ul className={style.list}>
        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
          <li>Главная страница</li>
        </Link>
        <li>Кредиты</li>
        <li>Новости</li>
        <li>О нас</li>
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

const HomeHeader = props => {
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
        <div className={style.arrow}>&rarr;</div>
      </div>
    </div>
  );
};

export default HomeHeader;
