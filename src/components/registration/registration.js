import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { API, postData } from "../../API";
import "./registration.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const RegistrationField = props => {
  return (
    <Fragment>
      <div className="registr__input_wrapper">
        <div className="registr__input_label_name">
          <span>{props.labelName} :</span>{" "}
        </div>
        <input
          className="registInput"
          onChange={e => props.setFunc(e.target.value)}
          required
          name={props.name}
          type="text"
        />
      </div>
    </Fragment>
  );
};

const Registration = props => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleEvent = event => {
    event.preventDefault();

    const data = {
      name,
      surname,
      lastname,
      address,
      phoneNumber,
      login,
      password
    };

    console.log(data);
    // postData("/Account/Register", data);
    props.history.push('/autorization');
  };

  return (
    <div className="registration_wrapper">
      <form onSubmit={handleEvent}>
        <RegistrationField labelName="Имя" setFunc={setName} name="name" />
        <RegistrationField
          labelName="Фамилия"
          setFunc={setSurname}
          name="surname"
        />
        <RegistrationField
          labelName="Отчество"
          setFunc={setLastname}
          name="lastname"
        />
        <RegistrationField
          labelName="Адрес"
          setFunc={setAddress}
          name="address"
        />

        <div className="registr__input_wrapper">
          <div className="registr__input_label_name">
            <span>Телефон :</span>{" "}
          </div>
          <PhoneInput
            inputProps={{
              name: "phoneNumber",
              required: true
            }}
            country={"kg"}
            className="registInput"
            masks={{ kg: "+... (...) ..-..-.." }}
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e);
            }}
          />
        </div>

        <RegistrationField labelName="Логин" setFunc={setLogin} name="login" />
        <RegistrationField
          labelName="Пароль"
          setFunc={setPassword}
          name="password"
        />
        <button className="registration__submit__btn" type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Registration;
