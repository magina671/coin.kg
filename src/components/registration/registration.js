import React, { useState, Fragment } from "react";
import API from "../../API";
import "./registration.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const RegistrationField = (props) => {
  return (
    <Fragment>
      <div className="registr__input_wrapper">
        <div className="registr__input_label_name">
          <span>{props.labelName} :</span>{" "}
        </div>
        <input
          className="registInput"
          onChange={(e) => props.setFunc(e.target.value)}
          required
          name={props.name}
          type="text"
        />
      </div>
    </Fragment>
  );
};

const Registration = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t, i18n } = useTranslation();

  const handleEvent = (event) => {
    event.preventDefault();

    const data = {
      name,
      surname,
      patronymic,
      address,
      phone,
      email,
      password,
    };

    console.log(data);
    API.postRegistrData(data);
    props.history.push("/autorization");
  };

  return (
    <div className="registration_wrapper">
      <form onSubmit={handleEvent}>
        <RegistrationField
          labelName={t("registration.name")}
          setFunc={setName}
          name="name"
        />
        <RegistrationField
          labelName={t("registration.surname")}
          setFunc={setSurname}
          name="surname"
        />
        <RegistrationField
          labelName={t("registration.patronymic")}
          setFunc={setPatronymic}
          name="patronymic"
        />
        <RegistrationField
          labelName={t("registration.address")}
          setFunc={setAddress}
          name="address"
        />

        <div className="registr__input_wrapper">
          <div className="registr__input_label_name">
            <span>{t("registration.phone")}</span>{" "}
          </div>
          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
            }}
            country={"kg"}
            className="registInput"
            masks={{ kg: "+... (...) ..-..-.." }}
            value={phone}
            onChange={(e) => {
              setPhone(e);
            }}
          />
        </div>

        <RegistrationField
          labelName={t("registration.mail")}
          setFunc={setEmail}
          name="email"
        />
        <RegistrationField
          labelName={t("registration.password")}
          setFunc={setPassword}
          name="password"
        />
        <button className="registration__submit__btn" type="submit">
          {t("registration.submit")}
        </button>
      </form>
    </div>
  );
};

export default Registration;
