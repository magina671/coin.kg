import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <p>Coin</p>
      </div>
      <div className={style.references}>
        <div className={style.title}>
          <p>МЕНЮ</p>
          <div className={style.hr}></div>
        </div>
        <ul className={style.menu}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>Главная страница</li>
          </Link>
          <Link to="/about_us" style={{ textDecoration: "none", color: "white" }}>
            <li>О нас</li>
          </Link>
          <li>Новости</li>
          <li>Онлайн заявка</li>
        </ul>
      </div>
      <div className={style.references}>
        <div className={style.title}>
          <p>Контакты</p>
          <div className={style.hr}></div>
        </div>
        <ul>
          <li>neobiskg@gmail.com</li>
          <li>+996 550 225 310</li>
          <li>+996 700 636 247</li>
        </ul>
      </div>
      <div>
        <div className={style.title}>
          <p>Как нас найти</p>
          <div className={style.hr}></div>
        </div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A896d1d50418f1cc7768da5c0242887aedfbeb6180a1cfe8b59022e538a91c71e&amp;source=constructor"
          width="417"
          height="240"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};
export default Footer;
