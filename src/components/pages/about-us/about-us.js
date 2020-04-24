import React from "react";
import style from "./about-us.module.css";
import Header from "../../header";
import picture1 from "../../../images/about_us_1.png";
import picture2 from "../../../images/about_us_2.png";
import picture3 from "../../../images/about_us_3.png";

export const Title = (text) => {
  return (
    <div className={style.title_about_us}>
      <div className={style.title_gradient}>
        <p>{text.text}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Title text={"О нас"} />
      <div className={style.slogan}>
        <p>Кто мы</p>
        <span>
          Первая МикроФинансовая Компания основана Агентством Ага Хана по
          Микрофинансированию, штаб-квартира которой находится в Женеве
        </span>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.info}>
          <p className={style.info_number}>01</p>
          <p className={style.info_title}>
            Подразделение Организации Ага Хана по развитию.
          </p>
          <p className={style.info_description}>
            Первая МикроФинансовая Компания начала свою работу в 2003 году в
            рамках проекта в отдаленных регионах Алай и Чон-Алай. В октябре 2006
            года была официально зарегистрирована как микрокредитная компания. В
            сентябре 2017 года компания преобразовалась в микрофинансовую
            компанию и получила лицензию Национального Банка Кыргызской
            Республики.
          </p>
        </div>
        <div className={style.picture_wrapper}>
          <img src={picture1} className={style.image} alt="first_about_us" />
          <div className={style.substrate}></div>
        </div>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.picture_wrapper_2}>
          <img src={picture2} className={style.image} alt="first_about_us" />
          <div className={style.substrate_2}></div>
        </div>
        <div className={style.info}>
          <p className={style.info_number_2}>02</p>
          <p className={style.info_title}>
            Крупнейшая микрофинансовая организация в стране
          </p>
          <p className={style.info_description}>
            Стабильный путь за 15 лет работы развития от Программы
            МикроФинансирования Ага Хана до успешной трансформации в одну из
            крупнейших микрофинансовых организаций в стране с общими активами
            более 1 млрд. сомов и клиентской базой более 22 тысяч человек.
          </p>
        </div>
      </div>

      <div className={style.info_wrapper}>
        <div className={style.info}>
          <p className={style.info_number_3}>03</p>
          <p className={style.info_title}>Филиалы и стратегические области</p>
          <p className={style.info_description}>
            15 филиалов, 10 из которых находятся в Ошской области и 3 - в
            Нарынской, 1 - в Бишкеке и 1 в Джалал-Абаде. Микрокредиты выдаются
            для развития т животноводство и сельское хозяйство, торговля, малый
            и средний бизнес, улучшение жилищных условий и образование.
          </p>
        </div>
        <div className={style.picture_wrapper}>
          <img src={picture3} className={style.image} alt="first_about_us" />
          <div className={style.substrate_3}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
