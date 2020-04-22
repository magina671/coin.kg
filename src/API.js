import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://coinkg.herokuapp.com"
});

const postData = ( url, data) => {
  http.post(url, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
}

export default {
  getCreditsInfo: () => http.get('/api/main/creditsinfo/'),
  getNews: () => http.get('/api/main/news/'),
  postOnlineRequestInfo: (data) => postData('/api/main/credit/',data),
  // postRegistrData: (data) => postData(,data)
  
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
