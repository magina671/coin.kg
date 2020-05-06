import React, { useState } from "react";
import "./autorization.css";
import aut_logo from "../../images/autorization.png";
import { Link } from "react-router-dom";
import API from "../../API";
import { useTranslation } from "react-i18next";

const Autorization = (props) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password };
    //1 вариант:

    //2 вариант:
    // let res = await axios.post(
    //   "https://cors-anywhere.herokuapp.com/https://coinkgtest.herokuapp.com/api/auth/jwt/create/",
    //   data
    // );
    // console.log("handleSubmit -> res", res.data);

    //3 вариант:
    // let req = await fetch(
    //   "https://cors-anywhere.herokuapp.com/https://coinkgtest.herokuapp.com/api/auth/jwt/create/",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );

    async function checking() {
      const res = await API.autorization(data);
      if (res) {
        localStorage.setItem("token", res.data.access);
        props.history.push("/");
      } else {
        alert("перезагрузите страницу и попробуйте ввести данные заново");
      }
    }
    checking();
  }

  return (
    <div className="autorization_wrapper">
      <div className="aut_content_wrapper">
        <div className="autorization__image">
          <img src={aut_logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <span className="aut_header_name_suka">{t("auth.title")}</span>
          <input
            type="text"
            required
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="password"
          />
          <button type="submit">{t("auth.login")}</button>
          {/* <div className="aut_forgot_text">
            <span className="aut_forgor_span">
              Забыли
              <Link>
                <span> Логин/Пароль? </span>
              </Link>
            </span>
          </div> */}
          <Link to="/registration" style={{ textDecoration: "none" }}>
            <button className="regisrt"> {t("auth.registr")} </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Autorization;
