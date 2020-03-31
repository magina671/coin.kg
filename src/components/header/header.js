import React from "react";
import style from "./header.module.css";
import {HeaderContent} from '../home/home-header/home-header';

const Header = props => {
  return (
    <div className={style.wrapper}>
      <HeaderContent />
    </div>
  );
};

export default Header;
