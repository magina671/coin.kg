import HomeNews from "./news-home";

export default {
  HomeNews
};

export const editDateFromBack = (date) => {
  let publishDate = new Date(date);
  let day = publishDate.getDate();
  let month = publishDate.getMonth() + 1;
  let year = publishDate.getFullYear();
  let finalDate = `${day}.${month}.${year}`;
  return finalDate;
} 