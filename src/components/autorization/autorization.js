import React, { useState } from "react";
import "./autorization.css";
import aut_logo from "../../images/autorization.png";
import { Link } from "react-router-dom";
import { API, postData } from "../../API";

const Autorization = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    const data = { login, password };
    console.log(data);
    // postData("/Account/Register", data);
    // props.history.push('/');
  };

  return (
    <div className="autorization_wrapper">
      <div className="aut_content_wrapper">
        <div className="autorization__image">
          <img src={aut_logo} alt="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <span className="aut_header_name_suka">Авторизация</span>
          <input
            type="text"
            required
            placeholder="email"
            onChange={e => setLogin(e.target.value)}
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
            placeholder="password"
          />
          <button type="submit">Login</button>
          <div className="aut_forgot_text">
            <span className="aut_forgor_span">
              Забыли
              <Link>
                <span> Логин/Пароль? </span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Autorization;
