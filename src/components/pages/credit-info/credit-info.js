import React, { useState, useEffect } from "react";
import style from "./credit-info.module.css";
import Header from "../../header";
import jsonData from "./content/db.json";

const CreditInfo = props => {
  const [state, setState] = useState({
    id: 0,
    title: "Агрокредит",
    upTopRight: "сумма кредита – от 50 USD или эквивалент в KGS",
    upTopLeft: "оплата работ для сельскохозяйственных нужд и на другие цели",
    upMiddleRight: "процентная ставка – от 14%",
    upMiddleLeft:
      "все документы по получению кредита составит кредитный эксперт",
    upBottomRight:
      "гибкий график погашения составляется с учетом особенностей сельскохозяйственной деятельности. Отсрочка по выплатам основных сумм - до 6 месяцев",
    upBottomLeft:
      "оформление кредита происходит в кратчайшие сроки – от 3-х дней",
    downTopRight:
      "банк работает с клиентами напрямую и без посредников, что исключает дополнительные расходы, не указанные в договоре",
    downTopLeft: "срок кредита – от 3 месяцев до 60 месяцев",
    downMiddleRight: "приобретение и ремонт с/х техники и оборудования",
    downMiddleLeft:
      "Расчет эффективной годовой процентной ставки осуществляется в каждом конкретном случае индивидуально",
    downBottomRight:
      "приобретение животных, птиц, саженцев, пчелиных семей и улье",
    downBottomLeft:
      "Комиссия за выдачу кредитных средств - от 0,5 % от суммы кредита",
    topImage: "./content/agro-top.png",
    bottomImage: "./content/agro-bottom.png"
  });

  useEffect(() => {
    const creditData = JSON.parse(JSON.stringify(jsonData.credits));
    const currentCredit = +props.match.params.id;
    creditData.map(credit => {
      if (credit.id == currentCredit) {
        setState(credit);
      }
    });
  }, [+props.match.params.id]);
  console.log(state);
  

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.title_wrapper}>
        <p>{state.title}</p>
        <span>Условия и возможности</span>
      </div>
      <div className={style.content_wrapper}>
        <div className={style.upTopLeft}>{state.upTopLeft}</div>
        <div className={style.upTopRight}>{state.upTopRight}</div>
        <div className={style.upMiddleLeft}>{state.upMiddleLeft}</div>
        <div className={style.upMiddleRight}>{state.upMiddleRight}</div>
        <div className={style.upBottomLeft}>{state.upBottomLeft}</div>
        <div className={style.upBottomRight}>{state.upBottomRight}</div>
        <img
          src={require(`${state.topImage}`)}
          alt="top"
          className={style.topImage}
        />

        <div className={style.downTopLeft}>{state.downTopLeft}</div>
        <div className={style.downTopRight}>{state.downTopRight}</div>
        <div className={style.downMiddleLeft}>{state.downMiddleLeft}</div>
        <div className={style.downMiddleRight}>{state.downMiddleRight}</div>
        <div className={style.downBottomLeft}>{state.downBottomLeft}</div>
        <div className={style.downBottomRight}>{state.downBottomRight}</div>
        <img
          src={require(`${state.bottomImage}`)}
          alt="top"
          className={style.bottomImage}
        />
      </div>
    </div>
  );
};

export default CreditInfo;
