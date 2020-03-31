import React, { useState } from "react";
import style from "./credit-info.module.css";
import Header from "../../header";

const CreditInfo = props => {
  const [state, setState] = useState({
    title: "Ипотека"
  });

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.title_wrapper}>
        
      </div>
    </div>
  );
};

export default CreditInfo;
