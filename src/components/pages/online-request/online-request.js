import React from "react";
import style from "./online-request.module.css";
import Header from '../../header';
import { Title } from "../about-us/about-us";

const OnlineRequest = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <Title text={'Онлайн заявка на кредит'} />
        <div className={style.content_wrapper}>
          <div className={style.white_box}></div>
          <div className={style.pink_image}>
            <div className={style.pink_image_color}></div>
          </div>
          <div className={style.content}></div>
        </div>
    </div>
  );
};

export default OnlineRequest;
