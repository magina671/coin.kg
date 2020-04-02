import React, { useState, useEffect } from "react";
import style from "./crefit-info.module.css";
import API from "../../../API";
import image from "../../../images/bank.svg";
import DOMPurify from "dompurify"; //защитит от xss атак, так как я использую innerHTML
import { Link } from "react-router-dom";

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
          const text = item.content;
          const id = item.id;
          return (
            <div className={style.content_wrapper}>
              <div className={style.image_circle}>
                <img className={style.image} src={image} alt="logo" />
              </div>
              <Link to={`/credit/${id}`} style={{textDecoration: 'none'}}>
                <p className={style.title}>{item.title}</p>
              </Link>
              <div
                className={style.description}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreditInfo;
