import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://coinkg.herokuapp.com"
});

export default {
  getCreditsInfo: () => http.get('/api/main/creditsinfo/'),
  getNews: () => http.get(""),
  postData: (url, data) =>
    http.post(`${url}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
};
