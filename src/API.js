import Axios from "axios";

const http = Axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://coinkgtest.herokuapp.com",
});

const postData = (url, data) => {
  http.post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default {
  getCreditsInfo: () => http.get("/api/main/creditsinfo/"),
  getNews: (currentPage, perPage) =>
    http.get(`/api/main/news/?limit=${perPage}&offset=${currentPage}`),
  getSelectedNews: (id) => http.get(`/api/main/news/${id}`),
  postOnlineRequestInfo: (data) => postData("/api/main/credit/", data),
  postRegistrData: (data) => postData("/api/auth/users/", data),
};

// async function getData(url) {
//   let response = await fetch(`${url}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Bearer " + token,
//       "Content-Type": "application/json"
//     }
//   });
//   let body = await response.json();
//   return body;
// }
