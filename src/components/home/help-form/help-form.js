import React from "react";
import style from "./help-form.module.css";

const HelpForm = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.title}>Свяжитесь с нами</div>
        <div className={style.list}>
          <form>
            <div className={style.info}>
              <span>Ваше имя</span>
              <input type="text" placeholder="ваше имя" required />
              <span>Ваше e-mail</span>
              <input type="text" placeholder="EMAIL" required />
            </div>
            <div className={style.problem}>
              <span>ваше сообщение</span>
              <textarea rows='6' placeholder="Введите сообщение" required></textarea>
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
