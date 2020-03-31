import React, { useState, useEffect } from "react";
import style from "./crefit-info.module.css";
import API from "../../../API";
import image from "../../../images/bank.svg";
import DOMPurify from 'dompurify'; //защитит от xss атак, так как я использую innerHTML

const CreditInfo = () => {
  const [credits, setCredits] = useState([]);
  console.log("CreditInfo -> credits", credits)
  useEffect(() => {
    API.getCreditsInfo().then(res => {
      setCredits(res.data);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <div>
        {credits.map(item => {
          const text = item.content;
          return (
            <div className={style.content_wrapper}>
              <div className={style.image_circle}>
                <img className={style.image} src={image} alt="logo" />
              </div>
              <p className={style.title}>{item.title}</p>
              <div
                className={style.description}
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditInfo;
