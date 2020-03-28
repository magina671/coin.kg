import React, { useState, useEffect } from "react";
import style from "./crefit-info.module.css";
import API from "../../../API";
import image from "../../../images/bank.svg";

const CreditInfo = () => {
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    API.getCreditsInfo().then(res => {
      setCredits(res.data);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <div>
        {credits.map(item => {
          return (
            <div className={style.content_wrapper}>
              <div className={style.image_circle}>
                <img className={style.image} src={image} alt="logo" />
              </div>
              <p className={style.title}>{item.title}</p>
              <div
                className="credit_info_description"
                className={style.description}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditInfo;
