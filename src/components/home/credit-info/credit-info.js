import React, { useState, useEffect } from "react";
import style from "./crefit-info.module.css";
import API from "../../../API";
import image from "../../../images/bank.svg";
import DOMPurify from "dompurify"; //защитит от xss атак, так как я использую innerHTML
import { Link } from "react-router-dom";
import Calculator from "../calculator";
import { getCurrentLng } from "../../../i18n";

const CreditInfo = () => {
  const [credits, setCredits] = useState([]);
  const currentLng = getCurrentLng();
  useEffect(() => {
    API.getCreditsInfo().then((res) => {
      setCredits(res.data);
    });
  }, []);

  return (
    <div className={style.wrapper}>
      <div>
        {credits.map((item) => {
          const text =
            currentLng == "en-US"
              ? item.content_en
              : currentLng == "kg"
              ? item.content_kg
              : item.content_ru;
          const id = item.id;
          const title =
            currentLng == "en-US"
              ? item.title_en
              : currentLng == "kg"
              ? item.title_kg
              : item.title_ru;
          return (
            <div key={id} className={style.content_wrapper}>
              <div className={style.image_circle}>
                <img className={style.image} src={image} alt="logo" />
              </div>
              <Link to={`/credit/${id}`} style={{ textDecoration: "none" }}>
                <p className={style.title}>{title}</p>
              </Link>
              <div
                className={style.description}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
              ></div>
            </div>
          );
        })}
      </div>
      <Calculator />
    </div>
  );
};

export default CreditInfo;
