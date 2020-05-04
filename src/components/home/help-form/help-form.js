import React, { useState, useEffect } from "react";
import style from "./help-form.module.css";
import API from "../../../API";

const HelpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("+996777123456");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, email, content, phone };
    API.feedback(data);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.title}>Свяжитесь с нами</div>
        <div className={style.list}>
          <form onSubmit={handleSubmit}>
            <div className={style.info}>
              <span>Ваше имя</span>
              <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="ваше имя" required />
              <span>Ваше e-mail</span>
              <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL" required />
            </div>
            <div className={style.problem}>
              <span>ваше сообщение</span>
              <textarea
              onChange={(e)=> setContent(e.target.value)}
                rows="6"
                placeholder="Введите сообщение"
                required
              ></textarea>
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
