import React, { useState } from "react";
import "./autorization.css";
import aut_logo from "../../images/autorization.png";
import { Link } from "react-router-dom";
import API from "../../API";
import axios from "axios";

const Autorization = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { email, password };
    //1 вариант:
    API.autorization(data)

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

    // const res = await req.json();
    // if (res.access) {
    //   localStorage.setItem("token", res.access);
    //   props.history.push("/");
    // } else {
    //   alert("перезагрузите страницу и попробуйте ввести данные заново");
    // }
  }

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
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
          <Link to="/registration" style={{ textDecoration: "none" }}>
            <p className="regisrt"> Зарегистрироваться </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Autorization;
