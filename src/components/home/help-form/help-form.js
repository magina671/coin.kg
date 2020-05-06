import React, { useState, useEffect } from "react";
import style from "./help-form.module.css";
import API from "../../../API";
import { useTranslation } from "react-i18next";

const HelpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("+996777123456");
  const { t, i18n } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, email, content, phone };
    API.feedback(data);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content_wrapper}>
  <div className={style.title}>{t('help_form.title')}</div>
        <div className={style.list}>
          <form onSubmit={handleSubmit}>
            <div className={style.info}>
              <span>{t('help_form.name')}</span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder={t('placeholders.your_name')}
                required
              />
              <span>{t('help_form.mail')}</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                required
              />
            </div>
            <div className={style.problem}>
              <span>{t('help_form.question')}</span>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                rows="6"
                placeholder={t('placeholders.your_message')}
                required
              ></textarea>
              <button type="submit">{t('help_form.submit')}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpForm;
