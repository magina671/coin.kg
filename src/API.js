import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://eshop-dimash.herokuapp.com"
});

export default {
  getProducts: () => http.get("/product"),
  postData: (url, data) =>
    http.post(`${url}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
};
