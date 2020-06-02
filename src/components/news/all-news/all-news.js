import React, { useState, useEffect } from "react";
import style from "./all-news.module.css";
import Header from "../../header";
import newsImage from "../../../images/news-1.png";
import API from "../../../API";
import NewsItem from "../news-item/news-item";
import { editDateFromBack } from "..";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCurrentLng } from "../../../i18n";

const AllNews = () => {
  const [perPage, setPerPage] = useState(5);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [firstNews, setFirstNews] = useState([]);
  const [otherNews, setOtherNews] = useState([]);
  const finalDate = editDateFromBack(firstNews.publish);
  const { t, i18n } = useTranslation();
  const currentLng = getCurrentLng();
  const title =
    currentLng == "en-US"
      ? firstNews.title_en
      : currentLng == "kg"
      ? firstNews.title_kg
      : firstNews.title_ru;
  const fake =
    currentLng == "en-US"
      ? "Employees comply with safety rules and are fully equipped              means of protection. Disinfectants are installed in each office. gels and daily sanitization and disinfection all premises and client areas."
      : currentLng == "kg"
      ? "Кызматкерлер коопсуздук эрежелерин сактап, толук жабдылган коргоо каражаттары. Дезинфекциялоочу каражаттар ар бир кеңседе орнотулган.        гелдер жана күн сайын тазалоо жана дезинфекциялоо бардык турак жайлар жана кардарлар жайгашкан."
      : "Сотрудники соблюдают правила безопасности и полностью снабжены      средствами защиты. В каждом офисе установлены дезинфицирующие гели и ежедневно проводится санитарная обработка и дезинфекция всех помещений и клиентских зон.";

  //pagination
  useEffect(() => {
    API.getNews(currentPage * perPage, perPage).then((res) => {
      setTotalProducts(res.data.meta.pagination.count);
      setFirstNews(res.data.results[0]);
      const otherNewsArray = res.data.results.slice(1);
      setOtherNews(otherNewsArray);
    });
  }, [currentPage, perPage]);

  let pagesCount = Math.ceil(totalProducts / perPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //end pagination

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.content}>
        <p className={style.title}>{t("home_news.news")}</p>
        <div className={style.item_wrapper}>
          <Link
            to={`/one_news/${firstNews.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={style.item_row}>
              <img
                src={firstNews.image}
                className={style.item_image}
                alt="news_item"
              />
              <div className={style.item_content_wrapper}>
                <p className={style.item_content}>
                  {title}
                  {/* {fake} */}
                  </p>
                <span className={style.item_views}>
                  {firstNews.views} {t("home_news.views")}
                </span>
                <span className={style.item_date}>{finalDate}</span>
              </div>
            </div>
          </Link>

          <div className={style.list}>
            {otherNews.map((news) => {
              return (
                <Link
                  to={`/one_news/${news.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div key={news.id} className={style.list_wrapper}>
                    <NewsItem data={news} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={style.centering}>
          <div className={style.paginator}>
            {pages.map((page) => {
              return (
                <div
                  className={style.page_block}
                  onClick={() => setCurrentPage(page - 1)}
                >
                  <span
                    className={currentPage + 1 === page && style.selectedPage}
                  >
                    {page}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
