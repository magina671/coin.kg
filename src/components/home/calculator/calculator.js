import React, { useState } from "react";
import style from "./calculator.module.css";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [payment, setPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [overpaying, setOverpaying] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (total <= 100000 && deadline <= 120) {
      const percent = getRandomIntInclusive(12, 20);
      setPayment(percent);

      const totalPercent = total * (percent / 100);
      const finalTotal = +total + +totalPercent;
      setTotalPay(finalTotal);

      const overPayingValue = finalTotal - total;
      setOverpaying(overPayingValue);

      const monthlyPercent = overPayingValue / deadline;
      const monthlyTotal = total / deadline;
      const monthly = monthlyPercent + monthlyTotal;
      setMonthlyPayment(monthly);
    } else if( total > 100000){
      alert("Сумма не должна превышать 100 тыс. сомов")
    } else {
      alert('Срок кредита не должен превышать 120 месяцев')
    }
  };

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={handleSubmit}>
        <p className={style.title}>Кредитный калькулятор</p>
        <div className={style.input_box}>
          <p className={style.name}>Сумма</p>
          <input
            type="text"
            pattern="[0-9]{1,6}"
            placeholder="не больше 100 тыс."
            className={style.total}
            required
            onChange={(e) => setTotal(e.target.value)}
          />
          <div className={style.dates}>
            <div>
              <p className={style.name}>Срок (месяцы)</p>
              <input
                type="text"
                pattern="[0-9]{1,3}"
                placeholder="0"
                className={style.deadline}
                required
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div>
              <p className={style.name}>Ставка, %</p>
              <input
                type="text"
                pattern="[0-9]{1-2}"
                placeholder="0"
                className={style.payment}
                required
                readOnly
                value={payment}
              />
            </div>
          </div>

          <p className={`${style.name} ${style.result}`}>Результат расчёта :</p>
          <div className={style.countings_box}>
            <p>Ежемесячный платеж </p>
            <span>{monthlyPayment}</span>
          </div>
          <div className={style.countings_box}>
            <p>Переплата по кредиту </p>
            <span>{overpaying}</span>
          </div>
          <div className={style.countings_box}>
            <p>Общая выплата </p>
            <span>{totalPay}</span>
          </div>
          <div className={style.buttons}>
            <button className={style.button} type="submit">
              Рассчитать
            </button>
            <Link to="/online_request" style={{ textDecoration: "none" }}>
              <button className={style.button}>Оформить кредит</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
