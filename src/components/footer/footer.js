import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}>
        <p>Coin</p>
      </div>
      <div className={style.references}>
        <p className={style.title}>МЕНЮ</p>
        <ul>
          <li>Главная страница</li>
          <li>О нас</li>
          <li>Кредиты</li>
          <li>Новости</li>
          <li>Онлайн заявка</li>
        </ul>
      </div>
      <div className={style.references}>
        <p className={style.title}>Контакты</p>
        <ul>
          <li>Главная страница</li>
          <li>О нас</li>
          <li>Кредиты</li>
          <li>Новости</li>
          <li>Онлайн заявка</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
